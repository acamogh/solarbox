$(document).ready(function() {
    var chargeState = document.getElementById("StateOfCharge").getContext('2d');
    var myChart = new Chart(chargeState, {
        type: 'doughnut',
        data: {
            labels: [
                "Charge Remaining",
                "Charge Used",
            ],
            datasets: [{
                data: [60, 40],
                backgroundColor: [
                    "#FFCE56",
                    "#a7b1c2"
                ],
                hoverBackgroundColor: [
                    "#FFCE56",
                    "#a7b1c2"
                ]
            }]
        },
        options: {
            responsive: true,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
                    display: false,
                }
        }
    });

    // line Chart
    var lineChart1 = document.getElementById("lineChart1").getContext('2d');
    var myChart = new Chart(lineChart1, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132,1)'
                },
                {
                    label: '# of Points',
                    data: [7, 11, 5, 8, 3, 7],
                    borderWidth: 1,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true, // minimum value will be 0.
                        suggestedMax: 10
                    },
                    pointLabels: {
                        fontFamily: "myriad_light"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: "myriad_light",
                    }
                }],
            }
        }
    })

    // line Chart2
    var lineChart2 = document.getElementById("lineChart2").getContext('2d');
    var myChart = new Chart(lineChart2, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132,1)'
                },
                {
                    label: '# of Points',
                    data: [7, 11, 5, 8, 3, 7],
                    borderWidth: 1,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        reverse: false
                    }
                }]
            }
        }
    })


})