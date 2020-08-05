// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2020 <i style="color:#49B1F5;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> CC康纳百川');
})

if(aidaori()){
    $("html").css({
        "filter":"gray !important",
        "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
        "filter":"grayscale(100%)",
        "-webkit-filter":"grayscale(100%)",
        "-moz-filter":"grayscale(100%)",
        "-ms-filter":"grayscale(100%)",
        "-o-filter":"grayscale(100%)" 
    });
}

function aidaori(){
    var aidaoriarr=new Array("0403","0404","0405","0406","0414","0512","0807","0909","1213");
    //2020年4月4日 新冠肺炎哀悼日，清明节
    //2010年4月14日，青海玉树地震
    //2008年5月12日，四川汶川地震
    //2010年8月7日，甘肃舟曲特大泥石流
    //1976年9月9日，毛泽东逝世
    //1937年12月13日，南京大屠杀
    var mydate = new Date();
    var str = "";// + mydate.getFullYear();
    var mm = mydate.getMonth()+1;
    if(mydate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(mydate.getDate()>9){
      str += mydate.getDate();
    }else{
      str += "0" + mydate.getDate();
    }
    if(aidaoriarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
}

// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/CCKNBC/CDN/logo/ccknbc.png");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/CCKNBC/CDN/logo/favicon.svg");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});

(function () {
    // 查询存储的记录
    function getRecord(Counter, target) {
      return new Promise(function (resolve, reject) {
        Counter('get', '/classes/Counter?where=' + encodeURIComponent(JSON.stringify({target})))
          .then(resp => resp.json())
          .then(({results, code, error}) => {
            if (code === 401) {
              throw error;
            }
            if (results && results.length > 0) {
              var record = results[0];
              resolve(record);
            } else {
              Counter('post', '/classes/Counter', {target, time: 0})
                .then(resp => resp.json())
                .then((record, error) => {
                  if (error) {
                    throw error;
                  }
                  resolve(record);
                }).catch(error => {
                console.error('Failed to create', error);
                reject(error);
              });
            }
          }).catch((error) => {
          console.error('LeanCloud Counter Error:', error);
          reject(error);
        });
      })
    }
    // 发起自增请求
    function increment(Counter, incrArr) {
      return new Promise(function (resolve, reject) {
        Counter('post', '/batch', {
          "requests": incrArr
        }).then((res) => {
          res = res.json();
          if (res.error) {
            throw res.error;
          }
          resolve(res);
        }).catch((error) => {
          console.error('Failed to save visitor count', error);
          reject(error);
        });
      });
    }
    // 构建自增请求体
    function buildIncrement(objectId) {
      return {
        "method": "PUT",
        "path": `/1.1/classes/Counter/${ objectId }`,
        "body": {
          "time": {
            '__op': 'Increment',
            'amount': 1
          }
        }
      }
    }
    // 校验是否为有效的 UV
    function validUV() {
      var key = 'LeanCloud_UV_Flag';
      var flag = localStorage.getItem(key);
      if (flag) {
        // 距离标记小于 24 小时则不计为 UV
        if (new Date().getTime() - parseInt(flag) <= 86400000) {
          return false;
        }
      }
      localStorage.setItem(key, new Date().getTime().toString());
      return true;
    }
    function addCount(Counter) {
      var enableIncr = '<%= theme.web_analytics.enable %>' === 'true' && window.location.hostname !== 'localhost';
      var getterArr = [];
      var incrArr = [];
      // 请求 PV 并自增
      var pvCtn = document.querySelector('#leancloud-site-pv-container');
      if (pvCtn || enableIncr) {
        var pvGetter = getRecord(Counter, 'site-pv').then((record) => {
          incrArr.push(buildIncrement(record.objectId))
          var ele = document.querySelector('#leancloud-site-pv');
          if (ele) {
            ele.innerText = record.time + 1;
            if (pvCtn) {
              pvCtn.style.display = 'inline';
            }
          }
        });
        getterArr.push(pvGetter);
      }
      // 请求 UV 并自增
      var uvCtn = document.querySelector('#leancloud-site-uv-container');
      if (uvCtn || enableIncr) {
        var uvGetter = getRecord(Counter, 'site-uv').then((record) => {
          var vuv = validUV();
          vuv && incrArr.push(buildIncrement(record.objectId))
          var ele = document.querySelector('#leancloud-site-uv');
          if (ele) {
            ele.innerText = record.time + (vuv ? 1 : 0);
            if (uvCtn) {
              uvCtn.style.display = 'inline';
            }
          }
        });
        getterArr.push(uvGetter);
      }
      // 如果是文章，请求文章的浏览数，并自增
      if ('<%= is_post() %>' === 'true') {
        var viewCtn = document.querySelector('#leancloud-post-views-container');
        if (viewCtn || enableIncr) {
          var target = decodeURI('<%= url_for(page.path) %>');
          var viewGetter = getRecord(Counter, target).then((record) => {
            incrArr.push(buildIncrement(record.objectId))
            if (viewCtn) {
              var ele = document.querySelector('#leancloud-post-views');
              if (ele) {
                ele.innerText = (record.time || 0) + 1;
                viewCtn.style.display = 'inline';
              }
            }
          });
          getterArr.push(viewGetter);
        }
      }
      // 如果启动计数自增，批量发起自增请求
      if (enableIncr) {
        Promise.all(getterArr).then(() => {
          incrArr.length > 0 && increment(Counter, incrArr);
        })
      }
    }
  
    var app_id = '4WVPOlvntLRA30H4M8pYvzAQ-MdYXbMMI'
    var app_key = '4cc9ovBo1RTcIh0SBFYtfay5'
    var server_url = ''
  
    function fetchData(api_server) {
      var Counter = (method, url, data) => {
        return fetch(`${ api_server }/1.1${ url }`, {
          method,
          headers: {
            'X-LC-Id': app_id,
            'X-LC-Key': app_key,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
      };
      addCount(Counter);
    }
    var api_server = app_id.slice(-9) !== '-MdYXbMMI' ? server_url : `https://${ app_id.slice(0, 8).toLowerCase() }.api.lncldglobal.com`;
    if (api_server) {
      fetchData(api_server);
    } else {
      fetch('https://app-router.leancloud.cn/2/route?appId=' + app_id)
        .then(resp => resp.json())
        .then(({api_server}) => {
          fetchData('https://' + api_server);
        });
    }
  })();
