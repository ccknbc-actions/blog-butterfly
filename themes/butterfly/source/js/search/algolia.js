window.addEventListener('load', () => {
  const openSearch = () => {
    const bodyStyle = document.body.style
    bodyStyle.width = '100%'
    bodyStyle.overflow = 'hidden'
    btf.animateIn(document.getElementById('search-mask'), 'to_show 0.5s')
    btf.animateIn(document.querySelector('#algolia-search .search-dialog'), 'titleScale 0.5s')
    setTimeout(() => { document.querySelector('#algolia-search .ais-SearchBox-input').focus() }, 100)

    // shortcut: ESC
    document.addEventListener('keydown', function f (event) {
      if (event.code === 'Escape') {
        closeSearch()
        document.removeEventListener('keydown', f)
      }
    })
  }

  const closeSearch = () => {
    const bodyStyle = document.body.style
    bodyStyle.width = ''
    bodyStyle.overflow = ''
    btf.animateOut(document.querySelector('#algolia-search .search-dialog'), 'search_close .5s')
    btf.animateOut(document.getElementById('search-mask'), 'to_hide 0.5s')
  }

  const searchClickFn = () => {
    document.querySelector('#search-button > .search').addEventListener('click', openSearch)
    document.getElementById('search-mask').addEventListener('click', closeSearch)
    document.querySelector('#algolia-search .search-close-button').addEventListener('click', closeSearch)
  }

  searchClickFn()

  window.addEventListener('pjax:complete', function () {
    getComputedStyle(document.querySelector('#algolia-search .search-dialog')).display === 'block' && closeSearch()
    searchClickFn()
  })

  const algolia = GLOBAL_CONFIG.algolia
  const isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName
  if (!isAlgoliaValid) {
    return console.error('Algolia setting is invalid!')
  }

  const searchClient = window.algoliasearch(algolia.appId, algolia.apiKey)
  const search = instantsearch({
    indexName: algolia.indexName,
    searchClient
  })

  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#algolia-search-input',
      showReset: false,
      showSubmit: false,
      placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder,
      searchAsYouType: false,
      showLoadingIndicator: true
    }),
    instantsearch.widgets.configure({
      hitsPerPage: algolia.hits.per_page || 5
    }),
    instantsearch.widgets.hits({
      container: '#algolia-hits',
      templates: {
        item: function (data) {
          const link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
          return `
            <a href="${link}" class="algolia-hit-item-link">
            <b>${data._highlightResult.title.value || 'no-title'}</b>
            <br>${data._snippetResult.contentStrip.value}</br>
            匹配字词: <em><mark>${data._highlightResult.contentStrip.matchedWords}</mark></em> | 匹配等级: <em><mark>${data._highlightResult.contentStrip.matchLevel}</emmark></em>
            </a>`
        },
        empty: function (data) {
          return (
            '<div id="algolia-hits-empty">' +
            GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, data.query) +
            '</div>'
          )
        }
      }
    }),
    instantsearch.widgets.pagination({
      container: '#algolia-pagination',
      templates: {
        first: '<i class="fa-solid fa-angle-double-left" title="第一页"></i>',
        last: '<i class="fa-solid fa-angle-double-right" title="最后一页"></i>',
        previous: '<i class="fa-solid fa-angle-left" title="上一页"></i>',
        next: '<i class="fa-solid fa-angle-right" title="下一页"></i>'
      }
    }),
    instantsearch.widgets.stats({
      container: '#algolia-stats',
      templates: {
        text: function (data) {
          const stats = GLOBAL_CONFIG.algolia.languages.hits_stats
            .replace(/\$\{hits}/, data.nbHits)
            .replace(/\$\{time}/, data.processingTimeMS)
          return (
            `${stats}`
          )
        }
      }
    }),
    instantsearch.widgets.poweredBy({
      container: '#algolia-powered-by'
    })
  ])
  search.start()

  window.pjax && search.on('render', () => {
    window.pjax.refresh(document.getElementById('algolia-hits'))
  })
})
