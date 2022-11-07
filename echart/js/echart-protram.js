
(function(){
    $('.monitor').on('click','a',function(){
        $(this).addClass('active').siblings('a').removeClass('active')
        $('.content').eq($(this).index()).show().siblings('.content').hide()
    })
    $('.marquee-view .marquee').each(function(){
        var row=$(this).children().clone()
        $(this).append(row)
    })
    
})();
(function(){
    var mypiechart=echarts.init(document.querySelector('.pie')) 
    var  optionpie= {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
          "#006cff",
          "#60cda0",
          "#ed8884",
          "#ff9f7f",
          "#0096ff",
          "#9fe6b8",
          "#32c5e9",
          "#1d9dff"
        ],
        series: [
          {
            name: "点位统计",
            type: "pie",
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            data: [
              { value: 20, name: "云南" },
              { value: 26, name: "北京" },
              { value: 24, name: "山东" },
              { value: 25, name: "河北" },
              { value: 20, name: "江苏" },
              { value: 25, name: "浙江" },
              { value: 30, name: "四川" },
              { value: 42, name: "湖北" }
            ],
            label: {
              fontSize: 15,
              color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
              ],
            },
            labelLine: {
              length: 4,
              length2: 6
            }
          }
          
        ]
      };
      mypiechart.setOption(optionpie)
      window.addEventListener("resize", function() {
        mypiechart.resize();
      })
})();
// 柱形图模块
(function() {
    var item = {
      name: "",
      value: 1200,
      itemStyle: {
        color: "#254065"
      },
      emphasis: {
        itemStyle: {
          color: "#254065"
        }
      },
      tooltip: {
        extraCssText: "opacity: 0"
      }
    };
    var myuserChart = echarts.init(document.querySelector(".bar"));
    var optionuser = {
      color: new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          { offset: 0, color: "#00fffb" }, 
          { offset: 1, color: "#0061ce" } 
        ]
      ),
      tooltip: {
        trigger: "item"
      },
      grid: {
        left: "0%",
        right: "3%",
        bottom: "3%",
        top: "3%",
        containLabel: true,
        show: true,
        borderColor: "rgba(0, 240, 255, 0.3)"
      },
      xAxis: [
        {
          type: "category",
          data: [
            "上海",
            "广州",
            "北京",
            "深圳",
            "合肥",
            "",
            "......",
            "",
            "杭州",
            "厦门",
            "济南",
            "成都",
            "重庆"
          ],
          axisTick: {
            alignWithLabel: false,

            show: false
          },
          axisLabel: {
            color: "#4c9bfd"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0, 240, 255, 0.3)"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            alignWithLabel: false,
            show: false
          },
          axisLabel: {
            color: "#4c9bfd"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(0, 240, 255, 0.3)"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(0, 240, 255, 0.3)"
            }
          }
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [
            2100,
            1900,
            1700,
            1560,
            1400,
            item,
            item,
            item,
            900,
            750,
            600,
            480,
            240
          ]
        }
      ]
    };
    myuserChart.setOption(optionuser);
    window.addEventListener("resize", function() {
        myuserChart.resize();
    });
  })();
  
// 订单功能
(function(){
    // 1. 准备数据
    var data = [
       { orders: '20,301,987', amount: '99834' },
       { orders: '301,987', amount: '9834' },
       { orders: '1,987', amount: '3834' },
       { orders: '987', amount: '834' }
    ]
    // 获取显示 订单数量 容器
    var h4Orders = $('.order h4:eq(0)')
    // 获取显示 金额数量 容器
    var h4Amount = $('.order h4:eq(1)')
    var index=0
    h4Orders.html(data[index].orders)
      h4Amount.html(data[index].amount)
    
    $('.order').on('click','.filter a',function(){
      // 2. 点击切换激活样式
      $(this).addClass('active').siblings().removeClass('active')
      // 3. 点击切换数据
       index=$(this).index();
      h4Orders.html(data[index].orders)
      h4Amount.html(data[index].amount)
    })
    var $allTab = $('.order .filter a')
    setInterval(function(){
      index++
      if (index >= 4) index = 0
      $allTab.eq(index).click()
    },5000)
  })();
  
(function() {

    var data = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ],
      quarter: [
        [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
        [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
      ],
      month: [
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
      ],
      week: [
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
      ]
    };

    var myChart = echarts.init(document.querySelector(".line"));

    var option = {
      color: ["#00f2f1", "#ed3f35"],
      tooltip: {

        trigger: "axis"
      },
      legend: {

        right: "10%",

        textStyle: {
          color: "#4c9bfd"
        }

      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true,
        borderColor: "#012f4a",
        containLabel: true
      },
  
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },

        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",

        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a"
          }
        }
      },
      series: [
        {
          name: "预期销售额",
          type: "line",
          stack: "总量",
          smooth: true,
          data: data.year[0]
        },
        {
          name: "实际销售额",
          type: "line",
          stack: "总量",
          smooth: true,
          data: data.year[1]
        }
      ]
    };
    myChart.setOption(option);
    $(".sales .caption").on("click", "a", function() {
      // 此时要注意这个索引号的问题
      index = $(this).index() - 1;
      // 点击当前a 高亮显示 调用active
      $(this)
        .addClass("active")
        .siblings("a")
        .removeClass("active");
      var arr = data[this.dataset.type];
      // console.log(arr);
      // 根据拿到的数据重新渲染 series里面的data值
      option.series[0].data = arr[0];
      option.series[1].data = arr[1];
      // 重新把配置好的新数据给实例对象
      myChart.setOption(option);
    });
    // 5. tab栏自动切换效果
    //  开启定时器每隔3s，自动让a触发点击事件即可
    var as = $(".sales .caption a");
    var index = 0;
    var timer = setInterval(function() {
      index++;
      if (index >= 4) index = 0;
      as.eq(index).click();
    }, 1000);
    // 鼠标经过sales，关闭定时器，离开开启定时器
    $(".sales").hover(
      function() {
        clearInterval(timer);
      },
      function() {
        clearInterval(timer);
        timer = setInterval(function() {
          index++;
          if (index >= 4) index = 0;
          as.eq(index).click();
        }, 1000);
      }
    );
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
(function() {
    var myChart = echarts.init(document.querySelector(".radar"));

  
    var option = {
      tooltip: {
        show: true,
        position: ["60%", "10%"]
      },
       
      radar: {
        indicator: [
          { name: "机场", max: 100 },
          { name: "商场", max: 100 },
          { name: "火车站", max: 100 },
          { name: "汽车站", max: 100 },
          { name: "地铁", max: 100 }
        ],
        radius: "55%",
        shape: "circle",
        splitNumber: 4,
        name: {

          textStyle: {
            color: 'skyblue',
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255, 0.5)"
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.5)"
          }
        }
      },
      series: [
        {
          name: "北京",
          type: "radar",
          lineStyle: {
            normal: {
              color: "#fff",
              width: 1,
              opacity: 0.5
            }
          },
          data: [[90, 30, 56, 50, 99]],
          // 设置图形标记 （拐点）
          symbol: "circle",
          // 这个是设置小圆点大小
          symbolSize: 5,
          // 设置小圆点颜色
          itemStyle: {
            color: "pink"
          },
          // 让小圆点显示数据
          label: {
            show: true,
            fontSize: 8
          },
          areaStyle: {
            color: "rgba(238, 197, 102, 0.7)"
          }
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  // 销售模块 饼形图 半圆形 设置方式
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".gauge"));
    // 2. 指定数据和配置
    var option = {
      series: [
        {
          name: "销售进度",
          type: "pie",
          radius: ["100%", "150%"],
          // 移动下位置  套住50%文字
          center: ["50%", "80%"],
          //是否启用防止标签重叠策略
          // avoidLabelOverlap: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          // 饼形图的起始角度为 180， 注意不是旋转角度
          startAngle: 180,
          // 鼠标经过不需要放大偏移图形
          hoverOffset: 0,
          data: [
            {
              value: 100,
              itemStyle: {
                // 颜色渐变#00c9e0->#005fc1
                color: new echarts.graphic.LinearGradient(
                  // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                  1,
                  0,
                  0,
                  0,
                  [
                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                    { offset: 1, color: "blue" } // 1 结束颜色
                  ]
                )
              }
            },
            {
              value: 100,
              itemStyle: {
                color: "#12274d"
              }
            },
            {
              value: 200,
              itemStyle: {
                color: "transparent"
              }
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  // 全国热榜模块
(function() {
    // 1. 准备相关数据
    var hotData = [
      {
        city: "北京", // 城市
        sales: "25, 179", // 销售额
        flag: true, //  上升还是下降
        brands: [
          //  品牌种类数据
          { name: "可爱多", num: "9,086", flag: true },
          { name: "娃哈哈", num: "8,341", flag: true },
          { name: "喜之郎", num: "7,407", flag: false },
          { name: "八喜", num: "6,080", flag: false },
          { name: "小洋人", num: "6,724", flag: false },
          { name: "好多鱼", num: "2,170", flag: true }
        ]
      },
      {
        city: "河北",
        sales: "23,252",
        flag: false,
        brands: [
          { name: "可爱多", num: "3,457", flag: false },
          { name: "娃哈哈", num: "2,124", flag: true },
          { name: "喜之郎", num: "8,907", flag: false },
          { name: "八喜", num: "6,080", flag: true },
          { name: "小洋人", num: "1,724", flag: false },
          { name: "好多鱼", num: "1,170", flag: false }
        ]
      },
      {
        city: "上海",
        sales: "20,760",
        flag: true,
        brands: [
          { name: "可爱多", num: "2,345", flag: true },
          { name: "娃哈哈", num: "7,109", flag: true },
          { name: "喜之郎", num: "3,701", flag: false },
          { name: "八喜", num: "6,080", flag: false },
          { name: "小洋人", num: "2,724", flag: false },
          { name: "好多鱼", num: "2,998", flag: true }
        ]
      },
      {
        city: "江苏",
        sales: "23,252",
        flag: false,
        brands: [
          { name: "可爱多", num: "2,156", flag: false },
          { name: "娃哈哈", num: "2,456", flag: true },
          { name: "喜之郎", num: "9,737", flag: true },
          { name: "八喜", num: "2,080", flag: true },
          { name: "小洋人", num: "8,724", flag: true },
          { name: "好多鱼", num: "1,770", flag: false }
        ]
      },
      {
        city: "山东",
        sales: "20,760",
        flag: true,
        brands: [
          { name: "可爱多", num: "9,567", flag: true },
          { name: "娃哈哈", num: "2,345", flag: false },
          { name: "喜之郎", num: "9,037", flag: false },
          { name: "八喜", num: "1,080", flag: true },
          { name: "小洋人", num: "4,724", flag: false },
          { name: "好多鱼", num: "9,999", flag: true }
        ]
      }
    ];
    //  2. 根据数据渲染各省热销 sup 模块内容
    // (1) 遍历 hotData对象
    var supHTML = "";
    $.each(hotData, function(index, item) {
      // console.log(item);
      supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
      ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });
    // 把生成的5个小li字符串给 sub dom盒子
    $(".sup").html(supHTML);
    // 3. 当鼠标进入 tab 的时候
    // 鼠标经过当前的小li要高亮显示
    $(".province .sup").on("mouseenter", "li", function() {
      index = $(this).index();
      render($(this));
    });
  
    function render(currentEle) {
      currentEle
        .addClass("active")
        .siblings()
        .removeClass();

      var subHTML = "";
      $.each(hotData[currentEle.index()].brands, function(index, item) {

        subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
      ${item.flag ? "icon-up" : "icon-down"}
      ></s></span></li>`;
      });
      $(".sub").html(subHTML);
    }
    var lis = $(".province .sup li");
    lis.eq(0).mouseenter();
    var index = 0;
    var timer = setInterval(function() {
      index++;
      if (index >= 5) index = 0;
      // lis.eq(index).mouseenter();
      render(lis.eq(index));
    }, 2000);
  
    $(".province .sup").hover(
      function() {
        clearInterval(timer);
      },
      function() {
        clearInterval(timer);
        timer = setInterval(function() {
          index++;
          if (index >= 5) index = 0;
          // lis.eq(index).mouseenter();
          render(lis.eq(index));
        }, 2000);
      }
    );
  })();
  
  
    