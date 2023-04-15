import React, { useEffect, useState } from 'react';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import wineData from './wineData.json';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const lineChartDataX = data.map(obj => obj['Flavanoids']);
  const lineChartDataY = data.map(obj => obj['Ash']);
  const barChartDataX = Array.from(new Set(data.map(obj => obj['Alcohol'])));
  const barChartDataY = Object.values(data.reduce((acc, curr, i) => {
    if (acc[curr.Alcohol]) {
      if (curr.Magnesium < acc[curr.Alcohol]) {
        acc[curr.Alcohol] = curr.Magnesium;
      }
    } else {
      acc[curr.Alcohol] = curr.Magnesium;
    }
    return acc;
  }, {}));

  useEffect(() => {
    setData(wineData);
  }, [])
  
  return (
    <div className="App">
      <LineChart lineChartDataX={lineChartDataX} lineChartDataY={lineChartDataY} />
      <BarChart barChartDataX={barChartDataX} barChartDataY={barChartDataY} />
    </div>
  );
}

export default App;
