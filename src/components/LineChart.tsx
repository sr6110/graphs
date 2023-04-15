import React from 'react';
import ReactEcharts from 'echarts-for-react';

interface ChildProps {
    lineChartDataX: Array<any>,
    lineChartDataY: Array<any>
  }

const  LineChart: React.FC<ChildProps> = ({lineChartDataX, lineChartDataY}) => {
    const option = {
        title:{
            show: true,
            text: 'Line chart',
            left: 'center'
        },
        xAxis: {
          type: 'category',
          data: lineChartDataX,
          name: 'Flavanoids',
          nameLocation: 'center',
          nameGap: 25
        },
        yAxis: {
          type: 'value',
          name: 'Ash',
          nameLocation: 'center',
          nameGap: 20
        },
        series: [{
        data: lineChartDataY, 
          type: 'line'
        }]
      };
  return (
    <ReactEcharts option={option}/>
  )
}

export default LineChart