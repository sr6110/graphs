import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface ChildProps {
    barChartDataX: Array<any>,
    barChartDataY: Array<any>
}


const BarChart: React.FC<ChildProps> = ({ barChartDataX, barChartDataY }) => {
    const option = {
        title:{
            show: true,
            text: 'Bar chart',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: barChartDataX,
            name: 'Alcohol',
            nameLocation: 'center',
            nameGap: 21,

        },
        yAxis: {
            type: 'value',
            name: 'Magnesium',
            nameLocation: 'center',
            nameGap: 21
        },
        series: [{
            data: barChartDataY,
            type: 'bar'
        }]
    };
    return (
        <ReactEcharts option={option} />
    )
}

export default BarChart