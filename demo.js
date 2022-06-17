function renderIcons() {

    if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                stroke: '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }
    this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
            (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
    );

    if (!this.series[1].icon) {
        this.series[1].icon = this.renderer.path(
            ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                'M', 8, -8, 'L', 16, 0, 8, 8]
        )
            .attr({
                stroke: '#ffffff',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }
    this.series[1].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
            (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
    );

    if (!this.series[2].icon) {
        this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                stroke: '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }

    this.series[2].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
            (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
    );
}

Highcharts.chart('container', {

    chart: {
        type: 'solidgauge',
        height: '110%',
        events: {
            render: renderIcons
        }
    },

    title: {
        text: '한국 통산 타율, 출루, 장타, OPS',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{
            outerRadius: '37%',
            innerRadius: '13%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, {
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, {
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, {
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[3])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: '타율',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '37%',
            innerRadius: '13%',
            y: 30.2
        }]
    }, {
        name: '출루율',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '62%',
            innerRadius: '38%',
            y: 38.9
        }]
    }, {
        name: '장타율',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '87%',
            innerRadius: '63%',
            y: 73.3
        }]
    }, {
        name: 'OPS',
        data: [{
            color: Highcharts.getOptions().colors[3],
            radius: '112%',
            innerRadius: '88%',
            y: 119
        }]
    }]
});

Highcharts.chart('container1', {

    chart: {
        type: 'solidgauge',
        height: '110%',
        events: {
            render: renderIcons
        }
    },

    title: {
        text: '일본 통산 타율, 출루, 장타, OPS',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{
            outerRadius: '37%',
            innerRadius: '13%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, {
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, {
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, {
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[3])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: '타율',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '37%',
            innerRadius: '13%',
            y: 25.7
        }]
    }, {
        name: '출루율',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '62%',
            innerRadius: '38%',
            y: 32.4
        }]
    }, {
        name: '장타율',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '87%',
            innerRadius: '63%',
            y: 49.4
        }]
    }, {
        name: 'OPS',
        data: [{
            color: Highcharts.getOptions().colors[3],
            radius: '112%',
            innerRadius: '88%',
            y: 81.8
        }]
    }]
});

Highcharts.chart('container2', {

    title: {
        text: '한일 통산 안타, 홈런, 볼넷, 삼진'
    },

    yAxis: {
        title: {
            text: '갯수(개)'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 1995 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1995
        }
    },

    series: [{
        name: '안타',
        data: [104, 139, 170, 146, 157, 133, 128, 165, 144, 80, 106, 169, 148, 38, 51, 15, 79, 150, 112, 156, 156, 164, 132]
    }, {
        name: '홈런',
        data: [13, 9, 32, 38, 54, 36, 39, 47, 56, 14, 30, 41, 30, 8, 16, 5, 15, 21, 13, 32, 26, 27, 24]
    }, {
        name: '볼넷',
        data: [33, 34, 49, 78, 112, 80, 96, 89, 101, 42, 33, 56, 38, 11, 28, 12, 32, 59, 30, 40, 40, 65, 47]
    }, {
        name: '삼진',
        data: [54, 42, 79, 97, 114, 113, 130, 109, 89, 88, 79, 126, 119, 37, 65, 26, 121, 101, 94, 77, 71, 89, 85]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container3', {

    title: {
        text: '한일 통산 타점, 득점'
    },

    yAxis: {
        title: {
            text: '득점(점)'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 1995 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1995
        }
    },

    series: [{
        name: '타점',
        data: [73, 76, 114, 102, 123, 95, 95, 126, 144, 50, 82, 108, 74, 27, 36, 11, 51, 85, 69, 101, 90, 118, 87]
    }, {
        name: '득점',
        data: [55, 57, 96, 100, 128, 108, 101, 123, 115, 50, 64, 101, 84, 21, 33, 13, 28, 84, 62, 83, 87, 91, 65]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container4', {

    chart: {
        type: 'solidgauge',
        height: '110%',
        events: {
            render: renderIcons
        }
    },

    title: {
        text: '한일 BABIP, WAR',
        style: {
            fontSize: '24px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{
            outerRadius: '37%',
            innerRadius: '13%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, {
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'BABIP',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '37%',
            innerRadius: '13%',
            y: 30.5
        }]
    }, {
        name: 'WAR',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '62%',
            innerRadius: '38%',
            y: 87.56
        }]
    }]
});