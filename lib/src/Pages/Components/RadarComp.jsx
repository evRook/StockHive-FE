import React from 'react';
import './RadarComp.css'
import { Chart } from 'chart.js'
import { Radar } from 'react-chartjs-2'


export default function RadarComp(props) {
    
    const data = {
        labels: [
            'Share Holder Rights',
            'Audit',
            'Compensation',
            'Board',
            
        ],
        datasets: [{
            label: 'Risk',
            data: [props.sh, props.audit, props.compensation, props.board],
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
                    color: '#00000090', 
                },
                angleLines: {
                    color: '#c0530030',
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