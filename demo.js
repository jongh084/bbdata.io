Highcharts.chart('container', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산 안타, 홈런, 볼넷, 삼진'
    },
    xAxis: {
        title: {
            enabled: true,
            text: '연도'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: '갯수(개)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        x: 170,
        y: -10,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} year, {point.y}'
            }
        }
    },
    series: [{
        name: '한국 안타',
        color: 'red',
        data: [[1995, 104], [1996, 139], [1997, 170], [1998, 146], [1999, 157],
            [2000, 133], [2001, 128], [2002, 165], [2003, 144], [2012, 150],
            [2013, 112], [2014, 156], [2015, 156], [2016, 164], [2017, 132]]

    } ,{
        name: '한국 홈런',
        color: 'red',
        data: [[1995, 13], [1996, 9], [1997, 32], [1998, 38], [1999, 54],
        [2000, 36], [2001, 39], [2002, 47], [2003, 56], [2012, 21],
        [2013, 13], [2014, 32], [2015, 26], [2016, 27], [2017, 24]]

    }, {
        name: '한국 볼넷',
        color: 'red',
        data: [[1995, 33], [1996, 34], [1997, 49], [1998, 78], [1999, 112],
            [2000, 80], [2001, 96], [2002, 89], [2003, 101], [2012, 59],
            [2013, 30], [2014, 40], [2015, 40], [2016, 65], [2017, 47]]

    }, {
        name: '한국 삼진',
        color: 'red',
        data: [[1995, 54], [1996, 42], [1997, 79], [1998, 97], [1999, 114],
            [2000, 113], [2001, 130], [2002, 109], [2003, 89], [2012, 101],
            [2013, 94], [2014, 77], [2015, 71], [2016, 89], [2017, 85]]

    }, {
        name: '일본 안타',
        color: 'blue',
        data: [[2004, 80], [2005, 106], [2006, 169], [2007, 148], [2008, 38],
            [2009, 51], [2010, 15], [2011, 79]]

    }, {
        name: '일본 홈런',
        color: 'blue',
        data: [[2004, 14], [2005, 30], [2006, 41], [2007, 30], [2008, 8],
            [2009, 16], [2010, 5], [2011, 15]]

    },  {
        name: '일본 볼넷',
        color: 'blue',
        data: [[2004, 42], [2005, 33], [2006, 56], [2007, 38], [2008, 11],
            [2009, 28], [2010, 12], [2011, 32]]

    },  {
        name: '일본 삼진',
        color: 'blue',
        data: [[2004, 88], [2005, 79], [2006, 126], [2007, 119], [2008, 37],
            [2009, 65], [2010, 26], [2011, 121]]

    }]
});

Highcharts.chart('container1', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산 타점, 득점'
    },
    xAxis: {
        title: {
            enabled: true,
            text: '연도'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: '득점(점)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        x: 170,
        y: -10,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} year, {point.y}'
            }
        }
    },
    series: [{
        name: '한국 타점',
        color: 'red',
        data: [[1995, 73], [1996, 76], [1997, 114], [1998, 102], [1999, 123],
            [2000, 95], [2001, 95], [2002, 126], [2003, 144], [2012, 85],
            [2013, 69], [2014, 101], [2015, 90], [2016, 118], [2017, 87]]

    }, {
        name: '한국 득점',
        color: 'red',
        data: [[1995, 55], [1996, 57], [1997, 96], [1998, 100], [1999, 128],
        [2000, 108], [2001, 101], [2002, 123], [2003, 115], [2012, 84],
        [2013, 62], [2014, 83], [2015, 87], [2016, 91], [2017, 65]]

    }, {
        name: '일본 타점',
        color: 'blue',
        data: [[2004, 50], [2005, 82], [2006, 108], [2007, 74], [2008, 27],
            [2009, 36], [2010, 11], [2011, 51]]
    }, {
        name: '일본 득점',
        color: 'blue',
        data: [[2004, 50], [2005, 64], [2006, 101], [2007, 84], [2008, 21],
            [2009, 33], [2010, 13], [2011, 28]]
    }]
});

Highcharts.chart('container2', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산 타율, 출루, 장타, OPS'
    },
    xAxis: {
        title: {
            enabled: true,
            text: '연도'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: '비율'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        x: 170,
        y: -10,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                pointFormat: '{point.x} year, {point.y}'
            }
        }
    },
    series: [{
        name: '한국 타율',
        color: 'red',
        data: [[1995, 0.285], [1996, 0.303], [1997, 0.329], [1998, 0.306], [1999, 0.323],
            [2000, 0.293], [2001, 0.276], [2002, 0.323], [2003, 0.301], [2012, 0.307],
            [2013, 0.253], [2014, 0.308], [2015, 0.332], [2016, 0.303], [2017, 0.280]]

    }, {
        name: '한국 출루율',
        color: 'red',
        data: [[1995, 0.345], [1996, 0.354], [1997, 0.391], [1998, 0.404], [1999, 0.458],
            [2000, 0.404], [2001, 0.412], [2002, 0.436], [2003, 0.428], [2012, 0.384],
            [2013, 0.298], [2014, 0.358], [2015, 0.387], [2016, 0.380], [2017, 0.347]]

    }, {
        name: '한국 장타율',
        color: 'red',
        data: [[1995, 0.477], [1996, 0.458], [1997, 0.598], [1998, 0.621], [1999, 0.733],
        [2000, 0.604], [2001, 0.605], [2002, 0.689], [2003, 0.699], [2012, 0.502],
        [2013, 0.395], [2014, 0.557], [2015, 0.562], [2016, 0.518], [2017, 0.517]]

    }, {
        name: '한국 OPS',
        color: 'red',
        data: [[1995, 0.822], [1996, 0.811], [1997, 0.988], [1998, 1.024], [1999, 1.190],
        [2000, 1.008], [2001, 1.017], [2002, 1.125], [2003, 1.127], [2012, 0.886],
        [2013, 0.693], [2014, 0.915], [2015, 0.949], [2016, 0.899], [2017, 0.864]]

    }, {
        name: '일본 타율',
        color: 'blue',
        data: [[2004, 0.240], [2005, 0.260], [2006, 0.323], [2007, 0.274], [2008, 0.248],
            [2009, 0.229], [2010, 0.163], [2011, 0.201]]
    }, {
        name: '일본 출루율',
        color: 'blue',
        data: [[2004, 0.328], [2005, 0.315], [2006, 0.389], [2007, 0.322], [2008, 0.324],
        [2009, 0.327], [2010, 0.280], [2011, 0.257]]
    }, {
        name: '일본 장타율',
        color: 'blue',
        data: [[2004, 0.450], [2005, 0.551], [2006, 0.615], [2007, 0.501], [2008, 0.431],
        [2009, 0.484], [2010, 0.337], [2011, 0.365]]
    }, {
        name: '일본 OPS',
        color: 'blue',
        data: [[2004, 0.779], [2005, 0.866], [2006, 1.003], [2007, 0.823], [2008, 0.755],
        [2009, 0.811], [2010, 0.617], [2011, 0.622]]
    }]
});

Highcharts.chart('container3', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산 BABIP, WAR'
    },
    xAxis: {
        title: {
            enabled: true,
            text: '연도'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: '득점(점)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'center',
        verticalAlign: 'top',
        x: 170,
        y: -10,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} year, {point.y} RBI'
            }
        }
    },
    series: [{
        name: '한국 BABIP',
        color: 'red',
        data: [[1995, 0.298], [1996, 0.315], [1997, 0.337], [1998, 0.310], [1999, 0.320],
            [2000, 0.315], [2001, 0.301], [2002, 0.331], [2003, 0.259], [2012, 0.349],
            [2013, 0.288], [2014, 0.311], [2015, 0.343], [2016, 0.316], [2017, 0.291]]

    }, {
        name: '한국 WAR',
        color: 'red',
        data: [[1995, 2.77], [1996, 3.65], [1997, 6.78], [1998, 6.73], [1999, 8.91],
        [2000, 5.18], [2001, 5.52], [2002, 8.96], [2003, 8.39], [2012, 5.47],
        [2013, 0.37], [2014, 2.42], [2015, 3.14], [2016, 2.62], [2017, 1.16]]

    }, {
        name: '일본 BABIP',
        color: 'blue',
        data: [[2004, 0.282], [2005, 0.252], [2006, 0.352], [2007, 0.300], [2008, 0.278],
            [2009, 0.245], [2010, 0.164], [2011, 0.242]]
    }, {
        name: '일본 WAR',
        color: 'blue',
        data: [[2004, 0.6], [2005, 2.4], [2006, 6.8], [2007, 3.3], [2008, 0.7],
            [2009, 1.8], [2010, -0.1], [2011, 0.1]]
    }]
});