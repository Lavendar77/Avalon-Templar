$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016 Q1',
            iphone: 2666,
            samsung: 2659,
            sony: 2647
        }, {
            period: '2016 Q2',
            iphone: 2778,
            samsung: 2294,
            sony: 2441
        }, {
            period: '2016 Q3',
            iphone: 4912,
            samsung: 1969,
            sony: 2501
        }, {
            period: '2016 Q4',
            iphone: 3767,
            samsung: 3597,
            sony: 5689
        }, {
            period: '2017 Q1',
            iphone: 6810,
            samsung: 1914,
            sony: 2293
        }, {
            period: '2017 Q2',
            iphone: 5670,
            samsung: 4293,
            sony: 1881
        }, {
            period: '2017 Q3',
            iphone: 4820,
            samsung: 3795,
            sony: 1588
        }, {
            period: '2017 Q4',
            iphone: 15073,
            samsung: 5967,
            sony: 5175
        }, {
            period: '2018 Q1',
            iphone: 10687,
            samsung: 4460,
            sony: 2028
        }, {
            period: '2018 Q2',
            iphone: 8432,
            samsung: 5713,
            sony: 1791
        }, {
            period: '2018 Q3',
            iphone: 10687,
            samsung: 4460,
            sony: 2028
        }, {
            period: '2018 Q4',
            iphone: 8432,
            samsung: 5713,
            sony: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'samsung', 'sony'],
        labels: ['iPhone', 'Samsung', 'Sony XPeria'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2018',
            a: 50,
            b: 40
        }, {
            y: '2017',
            a: 75,
            b: 65
        }, {
            y: '2018',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
