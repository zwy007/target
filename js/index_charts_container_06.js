

var chart = Highcharts.chart('container_06', {
    credits:{
        enabled:false // 禁用版权信息
    },
    exporting: {
        enabled:false
    },
    chart: {
        type: 'column',
        marginTop : 100
    },
    tooltip : {
        enabled : false
    },
    title: {
        text: '是从你的就SVN',
        margin:20,
        style : {
            color : 'transparent'
        }
    },

    subtitle: {
        text: '威锋网办哈的',
        style : {
            color : 'transparent'
        }
    },

    legend: {
        enabled : false
    },
    xAxis: {
        categories: [],
        labels: {
            x: -10
        }
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: ''
        }
    },
    series: [{
        name: '',
        data: [100,75,50,75,50,75,100]
    }, {
        name: '',
        data: [90,65,40,60,45,60,90]
    }]
});