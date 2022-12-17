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
  }

  const searchClickFnOnce = () => {
    document.getElementById('search-mask').addEventListener('click', closeSearch)
    document.querySelector('#algolia-search .search-close-button').addEventListener('click', closeSearch)
  }

  const algolia = GLOBAL_CONFIG.algolia
  const isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName
  if (!isAlgoliaValid) {
    return console.error('Algolia setting is invalid!')
  }

  const search = instantsearch({
    indexName: algolia.indexName,
    searchClient: algoliasearch(algolia.appId, algolia.apiKey),
    searchFunction(helper) {
      helper.state.query && helper.search()
    },
  })

  const configure = instantsearch.widgets.configure({
    hitsPerPage: algolia.per_page || 5
  })

  const searchBox = instantsearch.widgets.searchBox({
    container: '#algolia-search-input',
    showReset: false,
    showSubmit: false,
    searchAsYouType: false,
    showLoadingIndicator: true,
    autofocus: true,
    placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder
  })

  const hits = instantsearch.widgets.hits({
    container: '#algolia-hits',
    templates: {
      item(data) {
        const link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
        const content = data._snippetResult.contentStrip.value
        return `
          <a href="${link}#:~:text=${content.substring(content.indexOf('<mark>')-3,content.indexOf('<mark>'))}-,${content.substring(content.indexOf('<mark>')+6,content.indexOf('</mark>'))},-${content.substring(content.indexOf('</mark>')+7,content.indexOf('</mark>')+10)}" class="algolia-hit-item-link">
          <b>${data._highlightResult.title.value || "no-title"}</b>
          <br>${content}</br>
          匹配字词: <em><mark>${
          data._highlightResult.contentStrip.matchedWords
          }</mark></em> | 匹配等级: <em><mark>${
          data._highlightResult.contentStrip.matchLevel
          }</mark></em>
          </a>`;
      },
      empty: function (data) {
        return (
          '<div id="algolia-hits-empty">' +
          GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, data.query) +
          '</div>'
        )
      }
    }
  })

  const stats = instantsearch.widgets.stats({
    container: '#algolia-info > .algolia-stats',
    templates: {
      text: function (data) {
        const stats = GLOBAL_CONFIG.algolia.languages.hits_stats
          .replace(/\$\{hits}/, data.nbHits)
          .replace(/\$\{time}/, data.processingTimeMS)
        return (
          `<hr>${stats}`
        )
      }
    }
  })

  const powerBy = instantsearch.widgets.poweredBy({
    container: '#algolia-info > .algolia-poweredBy',
  })

  const pagination = instantsearch.widgets.pagination({
    container: '#algolia-pagination',
    totalPages: algolia.totalPages,
    templates: {
      first: '<i class="fa-solid fa-angle-double-left" title="第一页"></i>',
      last: '<i class="fa-solid fa-angle-double-right" title="最后一页"></i>',
      previous: '<i class="fa-solid fa-angle-left" title="上一页"></i>',
      next: '<i class="fa-solid fa-angle-right" title="下一页"></i>'
    }
  })


  search.addWidgets([configure,searchBox,hits,stats,powerBy,pagination]) // add the widgets to the instantsearch instance

  search.start()

  searchClickFn()
  searchClickFnOnce()

  window.addEventListener('pjax:complete', () => {
    getComputedStyle(document.querySelector('#algolia-search .search-dialog')).display === 'block' && closeSearch()
    searchClickFn()
  })

  window.pjax && search.on('render', () => {
    window.pjax.refresh(document.getElementById('algolia-hits'))
  })
})
