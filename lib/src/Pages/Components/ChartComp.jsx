import React from 'react';
import './ChartComp.css'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2'


export default function ChartComp(props) {
    
    const data = {
        labels: [],
        datasets: [
            {
                label: props.symbol,
                data: props.close,
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            y: {
                beginAtZero: true
            }
        }
    }

    const generateDatesInRange = (startDate, dataLength) => {
        const dates = [];
        const currentDate = new Date();
        console.log(currentDate)
    
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
                height={400}
                width={600}
                options={options}
            ></Line>
        </div>
     );
}
