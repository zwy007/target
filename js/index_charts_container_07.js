Highcharts.chart('container_07', {
    credits:{
        enabled:false // 禁用版权信息
    },
    exporting: {
        enabled:false
    },
    chart: {
        type: 'area',
        marginTop:90

    },
    title: {
        text: '说不好VB额',
        style : {
            color : 'transparent'
        }
    },
    subtitle: {
        text: '而非遇到',
        style : {
            color : 'transparent'
        }
    },
    xAxis: {
        categories: ['2010-03', '2010-06', '2010-09', '2010-12','2011-03', '2011-06', '2011-09', '2011-12','2012-03', '2012-06'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'iPhone',
        data: [2666,2778,4912,3767,6810,5670,4820,15073,10687,8432]
    }, {
        name: 'iPad',
        data: [2647,2294,1969,3597,1914,4293,3795,5967,4460,5713]
    }, {
        name: 'iPod Touch',
        data: [2647,2441,2501,5689,2293,1881,1588,5175,2028,1791]
    }]
});