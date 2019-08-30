import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headline from './components/Headline/Headline';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import data from './assets/data.js';


const options = {
  chart: {
    type: 'column',
    plotBackgroundColor: '#e4e9ed',
  },
  time: {
    timezone: 'Europe/London'
  },
  plotOptions: {
    series: {
      groupPadding: 0,
      pointPadding: 0.03,
      borderWidth: 0
    }
  },
  xAxis: [{
    grid: { // default setting
      enabled: true 
    },
    gridLineWidth: 1,
    gridLineColor: '#cbcbcb',
    scrollbar: {
        enabled: true
    },
    type: 'datetime',
    dateTimeLabelFormats: {
        day: '%H:%M'  // https://api.highcharts.com/highstock/xAxis.dateTimeLabelFormats
    }
  }],
  yAxis: [{
    alternateGridColor: '#ececec',
    grid: { // default setting
      enabled: true 
    },
    gridLineWidth: 1,
    gridLineColor: '#cbcbcb',
  }],
  series: [{
    data: data,
    color: '#80b4cc',
    pointStart: Date.UTC(2010, 0, 1),
    pointInterval: 900 * 500  // one day
  }]
}

function App() {
  const greating = 'Hello Highcharts!';

  return (
    <div className="App">
      <Headline value={greating} />

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default App;
