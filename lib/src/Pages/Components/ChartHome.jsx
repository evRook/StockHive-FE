import React from 'react';
import './ChartHome.css'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2'


export default function ChartHome(props) {

    const data = {
        labels: [],
        datasets: [
            {
                label: props.chartData[0][0].symbol,
                data: props.chartData[0][0].Close,
                fill: false,
                borderWidth: 1,
                borderColor: '#FFFFFFef',
                backgroundColor: '#FFFFFF50',
                fontColor: '#feeddb',
            },
            {
                label: props.chartData[1][0].symbol,
                data: props.chartData[1][0].Close,
                fill: false,
                borderWidth: 1,
                borderColor: '#3e903cef',
                backgroundColor: '#3e903c50',
                fontColor: '#feeddb',
            },
            {
                label: props.chartData[2][0].symbol,
                data: props.chartData[2][0].Close,
                fill: false,
                borderWidth: 1,
                borderColor: '#b34848ef',
                backgroundColor: '#b3484850',
                fontColor: '#feeddb',
            },
            {
                label: props.chartData[3][0].symbol,
                data: props.chartData[3][0].Close,
                fill: false,
                borderWidth: 1,
                borderColor: '#686df9ef',
                backgroundColor: '#686df950',
                fontColor: '#feeddb',
            },
            {
                label: props.chartData[4][0].symbol,
                data: props.chartData[4][0].Close,
                fill: false,
                borderWidth: 1,
                borderColor: '#eb821aef',
                backgroundColor: '#eb821a50',
                fontColor: '#feeddb',
            },
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    display: true,
                    color: '#feeddb10',
                    lineWidth: 1,
                }, 
                ticks: {
                    font: {
                        size: 20,
                      },
                      color: '#feeddb',
                }
            },
            x: {
                grid: {
                    display: true,
                    color: '#feeddb10',
                    lineWidth: 1,
                }, 
                ticks: {
                    font: {
                        size: 15,
                      },
                      color: '#feeddb',
                }
            }
        }
    }

    const generateDatesInRange = (startDate, dataLength) => {
        const dates = [];
        const currentDate = new Date();
    
        for (let i = dataLength - 1; i >= 0; i--) {
          dates.push(currentDate.toDateString())
          currentDate.setDate(currentDate.getDate() - 1);
        }
    
        return dates;
      }

      data.labels = generateDatesInRange(new Date(), data.datasets[0].data.length).reverse()


    return ( 
        <div className="chart--container">
            <Line
                data={data}
                options={options}
            ></Line>
        </div>
     );
}
