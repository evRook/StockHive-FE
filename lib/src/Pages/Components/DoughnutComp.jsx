import React, { useState, useEffect } from 'react';
import './DoughnutComp.css'
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'

export default function DoughnutComp(props) {
    const [riskColor, setRiskColor] = useState(['#00000000', '#00000000'])

    const data = {
        labels: ['Overall Risk'],
        datasets: [
          {
            data: [props.risk, 4],
            backgroundColor: ['#fe9320', '#00000000'],
          },
        ],
      };

    const options = {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        rotation: -90,
        circumference: 180,
        cutout: "75%",
        maintainAspectRatio: false,
        responsive: true,
        borderRadius: 50,
        borderColor: '#c05300'
      }


    return ( 
        <div className="doughtnut--container">
            <Doughnut 
                data={data}
                options={options}
                height={200}
                width={900}
            />
        </div>
     );
}