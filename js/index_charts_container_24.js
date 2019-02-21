
var dom = document.getElementById("container_24");
var myChart_24 = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['','','']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:30, name:'Users'},
                {value:12, name:'Profits'},
                {value:20, name:'Total Sales'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart_24.setOption(option, true);
}
window.onresize = function(){
    myChart_24.resize();
}