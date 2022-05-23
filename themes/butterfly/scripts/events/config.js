/**
 * Butterfly
 * 1. Merge CDN
 * 2. Capitalize the first letter of comment name
 */

'use strict'

const { version } = require('../../package.json')
const path = require('path')

hexo.extend.filter.register('before_generate', () => {
  const themeConfig = hexo.theme.config
  const { CDN, comments } = themeConfig

  /**
   * Merge CDN
   */

  const internalSrcCDN = {
    main_css: '/css/index.css',
    main: `https://gcore.jsdelivr.net/npm/hexo-theme-butterfly@${version}/source/js/main.min.js`,
    utils: `https://gcore.jsdelivr.net/npm/hexo-theme-butterfly@${version}/source/js/utils.min.js`,
    translate: `https://gcore.jsdelivr.net/npm/hexo-theme-butterfly@${version}/source/js/tw_cn.min.js`,
    local_search: `https://gcore.jsdelivr.net/npm/hexo-theme-butterfly@${version}/source/js/search/local-search.min.js`,
    algolia_js: `https://gcore.jsdelivr.net/npm/hexo-theme-butterfly@${version}/source/js/search/algolia.min.js`,
  }

  const internalSrcLocal = {
    main_css: '/css/index.css',
    main: '/js/main.js',
    utils: '/js/utils.js',
    translate: '/js/tw_cn.js',
    local_search: '/js/search/local-search.js',
    algolia_js: '/js/search/algolia.js',
  }

  const thirdPartySrcCDN = {
    algolia_search_v4: 'https://gcore.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.umd.js',
    instantsearch_v4: 'https://gcore.jsdelivr.net/npm/instantsearch.js@4/dist/instantsearch.production.min.js',
    pjax: 'https://gcore.jsdelivr.net/npm/pjax/pjax.min.js',
    gitalk: 'https://gcore.jsdelivr.net/npm/gitalk@latest/dist/gitalk.min.js',
    gitalk_css: 'https://gcore.jsdelivr.net/npm/gitalk/dist/gitalk.min.css',
    blueimp_md5: 'https://gcore.jsdelivr.net/npm/blueimp-md5/js/md5.min.js',
    valine: 'https://gcore.jsdelivr.net/npm/valine/dist/Valine.min.js',
    disqusjs: 'https://gcore.jsdelivr.net/npm/disqusjs@3/dist/browser/disqusjs.es2015.umd.min.js',
    disqusjs_css: 'https://gcore.jsdelivr.net/npm/disqusjs@3/dist/browser/styles/disqusjs.css',
    twikoo: 'https://gcore.jsdelivr.net/npm/twikoo@1/dist/twikoo.all.min.js',
    waline_js: 'https://gcore.jsdelivr.net/npm/@waline/client/dist/waline.js',
    waline_css: 'https://gcore.jsdelivr.net/npm/@waline/client/dist/waline.css',
    discuss: 'https://gcore.jsdelivr.net/npm/discuss/dist/Discuss.js',
    sharejs: 'https://gcore.jsdelivr.net/gh/overtrue/share.js@master/dist/js/social-share.min.js',
    sharejs_css: 'https://gcore.jsdelivr.net/npm/social-share.js/dist/css/share.min.css',
    mathjax: 'https://gcore.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    katex: 'https://gcore.jsdelivr.net/npm/katex@latest/dist/katex.min.css',
    katex_copytex: 'https://gcore.jsdelivr.net/npm/katex@latest/dist/contrib/copy-tex.min.js',
    katex_copytex_css: 'https://gcore.jsdelivr.net/npm/katex@latest/dist/contrib/copy-tex.css',
    mermaid: 'https://gcore.jsdelivr.net/npm/mermaid/dist/mermaid.min.js',
    canvas_ribbon: 'https://gcore.jsdelivr.net/npm/butterfly-extsrc@1/dist/canvas-ribbon.min.js',
    canvas_fluttering_ribbon: 'https://gcore.jsdelivr.net/npm/butterfly-extsrc@1/dist/canvas-fluttering-ribbon.min.js',
    canvas_nest: 'https://gcore.jsdelivr.net/npm/butterfly-extsrc@1/dist/canvas-nest.min.js',
    activate_power_mode: 'https://gcore.jsdelivr.net/npm/butterfly-extsrc@1/dist/activate-power-mode.min.js',
    fireworks: 'https://gcore.jsdelivr.net/npm/butterfly-extsrc@1/dist/fireworks.min.js',
    click_heart: 'https://gcore.jsdelivr.net/npm/butterfly-extsrc@1/dist/click-heart.min.js',
    ClickShowText: 'https://gcore.jsdelivr.net/npm/butterfly-extsrc@1/dist/click-show-text.min.js',
    lazyload: 'https://gcore.jsdelivr.net/npm/vanilla-lazyload/dist/lazyload.iife.min.js',
    instantpage: 'https://gcore.jsdelivr.net/npm/instant.page@5/instantpage.min.js',
    typed: 'https://gcore.jsdelivr.net/npm/typed.js/lib/typed.min.js',
    pangu: 'https://gcore.jsdelivr.net/npm/pangu@4/dist/browser/pangu.min.js',
    fancybox_css_v4: 'https://gcore.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
    fancybox_v4: 'https://gcore.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js',
    medium_zoom: 'https://gcore.jsdelivr.net/npm/medium-zoom/dist/medium-zoom.min.js',
    snackbar_css: 'https://gcore.jsdelivr.net/npm/node-snackbar/dist/snackbar.min.css',
    snackbar: 'https://gcore.jsdelivr.net/npm/node-snackbar/dist/snackbar.min.js',
    fontawesomeV6: 'https://gcore.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css',
    flickr_justified_gallery_js: 'https://gcore.jsdelivr.net/npm/flickr-justified-gallery@2/dist/fjGallery.min.js',
    flickr_justified_gallery_css: 'https://gcore.jsdelivr.net/npm/flickr-justified-gallery@2/dist/fjGallery.min.css',
    aplayer_css: 'https://gcore.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.css',
    aplayer_js: 'https://gcore.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js',
    meting_js: 'https://gcore.jsdelivr.net/gh/metowolf/MetingJS@1.2/dist/Meting.min.js',
    prismjs_js: 'https://gcore.jsdelivr.net/npm/prismjs@1/prism.min.js',
    prismjs_lineNumber_js: 'https://gcore.jsdelivr.net/npm/prismjs@1/plugins/line-numbers/prism-line-numbers.min.js',
    prismjs_autoloader: 'https://gcore.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js',
  }

  // delete null value
  const deleteNullValue = obj => {
    if (!obj) return
    for (const i in obj) {
      obj[i] === null && delete obj[i]
    }
    return obj
  }

  const defaultVal = (obj, choose) => {
    if (obj === 'internal') {
      if (choose === 'local') return internalSrcLocal
      else return internalSrcCDN
    }

    if (obj === 'external') {
      if (choose === 'local') {
        let result = {}
        try {
          const data = path.join(hexo.plugin_dir,'hexo-butterfly-extjs/plugins.yml')
          result = hexo.render.renderSync({ path: data, engine: 'yaml'})
          Object.keys(result).map(key => {
            result[key] = '/pluginsSrc/' + result[key]
          })
        } catch (e) {}
        return result
      } else return thirdPartySrcCDN
    }
  }

  themeConfig.asset = Object.assign(defaultVal('internal', CDN.internal_provider),
    defaultVal('external', CDN.third_party_provider), deleteNullValue(CDN.option))

  /**
   * Capitalize the first letter of comment name
   */

  let { use } = comments

  if (!use) return

  if (typeof use === 'string') {
    use = use.split(',')
  }

  const newArray = use.map(item => item.toLowerCase().replace(/\b[a-z]/g, s => s.toUpperCase()))

  themeConfig.comments.use = newArray
})
