let config = hexo.config.copyMarkdown
let pureMarkdown = config.pureMarkdown || false
let field = config.field || 'post'
let copyright_enable = config.copyright ?? true
let Reprint_enable = config.Reprint ?? true

// const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.filter.register('after_generate', function () {
  if (hexo.config.copyMarkdown.enable) {
    var content = `<script>const copyright_enable = ${copyright_enable} </script>` + js("https://jsd.onmicrosoft.cn/npm/turndown/dist/turndown.min.js");
    if (!pureMarkdown) content += js('https://jsd.onmicrosoft.cn/gh/ccknbc-forked/hexo-butterfly-copymarkdown/lib/copyMarkdown.min.js');
    else content += js('https://jsd.onmicrosoft.cn/gh/ccknbc-forked/hexo-butterfly-copymarkdown/lib/pureMarkdown.min.js');
    if (Reprint_enable) {
      content += js('https://jsd.onmicrosoft.cn/gh/ccknbc-forked/hexo-butterfly-copymarkdown/lib/reprint.min.js');
      // hexo.extend.injector.register('head_end', () => {
      //   return css('https://jsd.onmicrosoft.cn/npm/hexo-butterfly-copymarkdown/lib/reprint.css');
      // }, 'post');
    }
    hexo.extend.injector.register('body_end', content, field);
  }
});