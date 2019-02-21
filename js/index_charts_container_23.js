Highcharts.chart('container_23', {
    credits:{
        enabled:false // 禁用版权信息
    },
    exporting: {
        enabled:false
    },
    legend: {
        enabled : false
    },
    chart: {
        type: 'line'
    },
    title: {
        text: '时候VB文化的',
        style : {
            color : 'transparent'
        }
    },
    subtitle: {
        text: '是否是二维火ID',
        style : {
            color : 'transparent'
        }
    },
    xAxis: {
        categories: ['','','','','','','2020','','','','']
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '',
        data: [90,185,130,160,65,70,125,175,85,155,195]
    }, {
        name: '',
        data: [50,165,150,175,80,90,100,155,80,145,160]
    }]
});