Highcharts.chart('container', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산안타'
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
            text: '안타(갯수)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
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
                pointFormat: '{point.x} year, {point.y} H'
            }
        }
    },
    series: [{
        name: '한국',
        color: 'red',
        data: [[1995, 104], [1996, 139], [1997, 170], [1998, 146], [1999, 157],
            [2000, 133], [2001, 128], [2002, 165], [2003, 144], [2012, 150],
            [2013, 112], [2014, 156], [2015, 156], [2016, 164], [2017, 132]
           ]

    }, {
        name: '일본',
        color: 'blue',
        data: [[2004, 80], [2005, 106], [2006, 169], [2007, 148], [2008, 38],
            [2009, 51], [2010, 15], [2011, 79]]
    }]
});

Highcharts.chart('container1', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산홈런'
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
            text: '홈런(갯수)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
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
                pointFormat: '{point.x} year, {point.y} HR'
            }
        }
    },
    series: [{
        name: '한국',
        color: 'red',
        data: [[1995, 13], [1996, 9], [1997, 32], [1998, 38], [1999, 54],
            [2000, 36], [2001, 39], [2002, 47], [2003, 56], [2012, 21],
            [2013, 13], [2014, 32], [2015, 26], [2016, 27], [2017, 24]
           ]

    }, {
        name: '일본',
        color: 'blue',
        data: [[2004, 14], [2005, 30], [2006, 41], [2007, 30], [2008, 8],
            [2009, 16], [2010, 5], [2011, 15]]
    }]
});

Highcharts.chart('container2', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산타점'
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
            text: '타점'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
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
        name: '한국',
        color: 'red',
        data: [[1995, 73], [1996, 76], [1997, 114], [1998, 102], [1999, 123],
            [2000, 95], [2001, 95], [2002, 126], [2003, 144], [2012, 85],
            [2013, 69], [2014, 101], [2015, 90], [2016, 118], [2017, 87]
           ]

    }, {
        name: '일본',
        color: 'blue',
        data: [[2004, 50], [2005, 82], [2006, 108], [2007, 74], [2008, 27],
            [2009, 36], [2010, 11], [2011, 51]]
    }]
});

Highcharts.chart('container3', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산득점'
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
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
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
                pointFormat: '{point.x} year, {point.y} R'
            }
        }
    },
    series: [{
        name: '한국',
        color: 'red',
        data: [[1995, 55], [1996, 57], [1997, 96], [1998, 100], [1999, 128],
            [2000, 108], [2001, 101], [2002, 123], [2003, 115], [2012, 84],
            [2013, 62], [2014, 83], [2015, 87], [2016, 91], [2017, 65]
           ]

    }, {
        name: '일본',
        color: 'blue',
        data: [[2004, 50], [2005, 64], [2006, 101], [2007, 84], [2008, 21],
            [2009, 33], [2010, 13], [2011, 28]]
    }]
});

Highcharts.chart('container4', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산타율'
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
            text: '타율'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
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
                pointFormat: '{point.x} year, {point.y} AVG'
            }
        }
    },
    series: [{
        name: '한국',
        color: 'red',
        data: [[1995, 0.285], [1996, 0.303], [1997, 0.329], [1998, 0.306], [1999, 0.323],
            [2000, 0.293], [2001, 0.276], [2002, 0.323], [2003, 0.301], [2012, 0.307],
            [2013, 0.253], [2014, 0.308], [2015, 0.332], [2016, 0.303], [2017, 0.280]
           ]

    }, {
        name: '일본',
        color: 'blue',
        data: [[2004, 0.240], [2005, 0.260], [2006, 0.323], [2007, 0.274], [2008, 0.248],
            [2009, 0.229], [2010, 0.163], [2011, 0.201]]
    }]
});

Highcharts.chart('container5', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산출루율'
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
            text: '출루율'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
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
                pointFormat: '{point.x} year, {point.y} OBP'
            }
        }
    },
    series: [{
        name: '한국',
        color: 'red',
        data: [[1995, 0.345], [1996, 0.354], [1997, 0.391], [1998, 0.404], [1999, 0.458],
            [2000, 0.404], [2001, 0.412], [2002, 0.436], [2003, 0.428], [2012, 0.384],
            [2013, 0.298], [2014, 0.358], [2015, 0.387], [2016, 0.380], [2017, 0.347]
           ]

    }, {
        name: '일본',
        color: 'blue',
        data: [[2004, 0.328], [2005, 0.315], [2006, 0.389], [2007, 0.322], [2008, 0.324],
            [2009, 0.327], [2010, 0.280], [2011, 0.257]]
    }]
});

Highcharts.chart('container6', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: '통산장타율'
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
            text: '장타율'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
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
                pointFormat: '{point.x} year, {point.y} OBP'
            }
        }
    },
    series: [{
        name: '한국',
        color: 'red',
        data: [[1995, 0.477], [1996, 0.458], [1997, 0.598], [1998, 0.621], [1999, 0.733],
            [2000, 0.604], [2001, 0.605], [2002, 0.689], [2003, 0.699], [2012, 0.502],
            [2013, 0.395], [2014, 0.557], [2015, 0.562], [2016, 0.518], [2017, 0.517]
           ]

    }, {
        name: '일본',
        color: 'blue',
        data: [[2004, 0.450], [2005, 0.551], [2006, 0.615], [2007, 0.501], [2008, 0.431],
            [2009, 0.484], [2010, 0.337], [2011, 0.365]]
    }]
});