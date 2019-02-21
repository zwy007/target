Highcharts.chart('container_05', {
    credits:{
        enabled:false // 禁用版权信息
    },
    exporting: {
        enabled:false
    },
    chart: {
        type: 'line'
    },
    title :{
        text : '自行车全文',
        margin : 50,
        style : {
            color : 'transparent'
        }
    },
    subtitle :{
        text : '自行车全文',
        style : {
            color : 'transparent'
        }
    },
    xAxis: {
        categories: ['','','','','','','2020','','','','']
    },
    yAxis: {
        title : {
            text: ''
        }
    },
    legend: {
        enabled:false
    },


    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
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