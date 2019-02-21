
var dom = document.getElementById("container_10");
var myChart_10 = echarts.init(dom);
var app = {};
option = null;
app.title = '多 Y 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            restore: {show: false},
            saveAsImage: {show: false}
        }
    },
    legend: {
        show : false
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: false
            },
            data: ['2006','','2008','','2010','','2012']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data: [100,75,50,75,50,75,100]
        },
        {
            name:'降水量',
            type:'bar',
            data: [90,65,40,60,45,60,90]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart_10.setOption(option, true);
}
window.addEventListener('resize',function(){
    myChart_10.resize();
})