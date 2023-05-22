import React from 'react';
import './RadarComp.css'
import { Chart } from 'chart.js'
import { Radar } from 'react-chartjs-2'


export default function RadarComp(props) {
    // console.log([props.audit, props.board, props.compensation, props.sh])
    
    const data = {
        labels: [
            'Audit',
            'Compensation',
            'Board',
            'Share Holder'
        ],
        datasets: [{
            label: 'Risk',
            data: [props.audit, props.compensation, props.board, props.sh],
            fill: true,
            backgroundColor: '#eb821a20',
            borderColor: '#eb821aef',
            borderWidth: 1,
        }],
    }

    const options = {
        scales: {
            r: {
                min: 0,
                max: 10,
                grid: {
                    color: '#c0530030', // Set the desired color for the scale grid
                },
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
      };
    


    return ( 
        <div className="chart--container">
            <Radar data={data} options={options} />
        </div>
     );
}