const cheerio = require('cheerio')
const moment = require('moment')
const fetch = require('node-fetch')

hexo.extend.filter.register('after_render:html', async function (locals) {
  const $ = cheerio.load(locals)
  const source = $('#sources-chart')
  const trend = $('#trends-chart')
  const map = $('#map-chart')
  let htmlEncode = false

  if (source.length > 0 || trend.length > 0 || map.length > 0) {
    if (source.length > 0 && $('#sourcesChart').length === 0) {
      source.after(await sourcesChart())
    }
    if (trend.length > 0 && $('#trendsChart').length === 0) {
      trend.after(await trendsChart())
    }
    if (map.length > 0 && $('#mapChart').length === 0) {
      map.after(await mapChart())
    }
    if (htmlEncode) {
      return $.root().html().replace(/&amp;#/g, '&#')
    } else {
      return $.root().html()
    }
  } else {
    return locals
  }
}, 15)

const startDate = '20210101' // 开始日期
const endDate = moment().format('YYYYMMDD') // 结束日期
const accessToken = '121.5ebf1505e7e192c6fd429ddd0a402655.Y5WyuVfQpAjy3PKPwOtThsB-ijZoZStGv7MtS0x.oAboLQ' // accessToken
const siteId = '16230867' // 网址id
const dataUrl = 'https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=' + accessToken + '&site_id=' + siteId;

// 访问次数（PV）月份趋势
function trendsChart () {
  return new Promise(resolve => {
    const paramUrl = '&start_date=' + startDate + '&end_date=' + endDate + '&metrics=pv_count&method=trend/time/a&gran=month'
    fetch(dataUrl + paramUrl)
      .then(data => data.json())
      .then(data => {
        const monthArr = []
        const monthValueArr = []
        const monthName = data.result.items[0]
        const monthValue = data.result.items[1]
        for (let i = Math.min(monthName.length, 12) - 1; i >= 0; i--) {
          monthArr.push(monthName[i][0].substring(0, 7).replace('/', '-'))
          if (monthValue[i][0] !== '--') {
            monthValueArr.push(monthValue[i][0])
          } else {
            monthValueArr.push(null)
          }
        }
        const monthArrJson = JSON.stringify(monthArr)
        const monthValueArrJson = JSON.stringify(monthValueArr)
        resolve(`
          <script id="trendsChart">
            var trendsChart = echarts.init(document.getElementById('trends-chart'), 'light');
            var trendsOption = {
              textStyle: {
                color: '#FFF'
              },
              title: {
                text: '博客访问量统计图',
                x: 'center',
                textStyle: {
                  color: '#FFF'
                }
              },
              tooltip: {
                trigger: 'axis'
              },
              xAxis: {
                name: '日期',
                type: 'category',
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#FFF'
                  }
                },
                data: ${monthArrJson}
              },
              yAxis: {
                name: '访问次数',
                type: 'value',
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#FFF'
                  }
                }
              },
              series: [{
                name: '访问次数',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                itemStyle: {
                  opacity: 1,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                  }])
                },
                areaStyle: {
                  opacity: 1,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                  }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                  }])
                },
                data: ${monthValueArrJson},
                markLine: {
                  data: [{
                    name: '平均值',
                    type: 'average'
                  }]
                }
              }]
            };
            trendsChart.setOption(trendsOption);
            window.addEventListener("resize", () => { 
              trendsChart.resize();
            });
          </script>`)
      }).catch(function (error) {
        console.log(error);
      });
  })
}

// 访问次数（PV）来源
function sourcesChart () {
  return new Promise(resolve => {
    const paramUrl = '&start_date=' + startDate + '&end_date=' + endDate + '&metrics=pv_count&method=source/all/a';
    fetch(dataUrl + paramUrl)
      .then(data => data.json())
      .then(data => {
        monthArr = [];
        let sourcesName = data.result.items[0]
        let sourcesValue = data.result.items[1]
        let sourcesArr = []
        for (let i = 0; i < sourcesName.length; i++) {
          sourcesArr.push({ name: sourcesName[i][0].name, value: sourcesValue[i][0] })
        }
        const sourcesArrJson = JSON.stringify(sourcesArr)
        resolve(`
          <script id="sourcesChart">
            var sourcesChart = echarts.init(document.getElementById('sources-chart'), 'light');
            var sourcesOption = {
              textStyle: {
                color: '#FFF'
              },
              title: {
                text: '博客访问来源统计图',
                x: 'center',
                textStyle: {
                  color: '#FFF'
                }
              },
              legend: {
                top: 'bottom',
                textStyle: {
                  color: '#FFF'
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              series: [{
                name: '访问次数',
                type: 'pie',
                radius: [30, 80],
                center: ['50%', '50%'],
                roseType: 'area',
                label: {
                  formatter: "{b} : {c} ({d}%)"
                },
                data: ${sourcesArrJson},
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                  }
                }
              }]
            };
          sourcesChart.setOption(sourcesOption);
          window.addEventListener("resize", () => { 
            sourcesChart.resize();
          });
          </script>`);
      }).catch(function (error) {
        console.log(error);
      });
  })
}

// 访问次数（PV）来源
function mapChart () {
  return new Promise(resolve => {
    const paramUrl = '&start_date=' + startDate + '&end_date=' + endDate + '&metrics=pv_count&method=visit/district/a';
    fetch(dataUrl + paramUrl)
      .then(data => data.json())
      .then(data => {
        monthArr = [];
        let mapName = data.result.items[0]
        let mapValue = data.result.items[1]
        let mapArr = []
        let max = mapValue[0][0]
        for (let i = 0; i < mapName.length; i++) {
          mapArr.push({ name: mapName[i][0].name, value: mapValue[i][0] })
        }
        const mapArrJson = JSON.stringify(mapArr)
        resolve(`
          <script id="mapChart">
            var mapChart = echarts.init(document.getElementById('map-chart'), 'light');
            var mapOption = {
              textStyle: {
                color: '#FFF'
              },
              title: {
                text: '博客访问来源地图',
                x: 'center',
                textStyle: {
                  color: '#FFF'
                }
              },
              tooltip: {
                trigger: 'item'
              },
              visualMap: {
                min: 0,
                max: ${max},
                left: 'left',
                top: 'bottom',
                text: ['高','低'],
                color: ['#1E90FF', '#AAFAFA'],
                textStyle: {
                  color: '#FFF'
                },
                calculable: true
              },
              series: [{
                name: '访问次数',
                type: 'map',
                mapType: 'china',
                showLegendSymbol: false,
                label: {
                  emphasis: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: '#111',
                    borderColor: '#20232a'
                  },
                  emphasis: {
                    areaColor: 'gold'
                  }
                },
                data: ${mapArrJson}
                }]
            };
          mapChart.setOption(mapOption);
          window.addEventListener("resize", () => { 
            mapChart.resize();
          });
          </script>`);
      }).catch(function (error) {
        console.log(error);
      });
  })
}