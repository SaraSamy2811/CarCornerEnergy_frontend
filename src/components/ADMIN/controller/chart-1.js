import React from 'react';
import ApexCharts from 'react-apexcharts';

const MyChart1 = () => {
  const chartOptions = {
    series: [
      {
        name: 'Visitors',
        data: [
          { x: 'Jan', y: 1200 },
          { x: 'Feb', y: 1500 },
          { x: 'Mar', y: 1700 },
          { x: 'Apr', y: 1800 },
          { x: 'May', y: 1600 },
          { x: 'Jun', y: 1900 },
          { x: 'Jul', y: 2000 },
          { x: 'Aug', y: 2200 },
          { x: 'Sep', y: 2100 },
          { x: 'Oct', y: 2300 },
          { x: 'Nov', y: 2400 },
          { x: 'Dec', y: 2500 },
        ],
      },
    ],
    chart: {
      type: 'area',
      toolbar: {
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    dataLabels: { enabled: false },
    grid: { borderColor: 'transparent' },
    colors: ['var(--bs-primary)'],
    markers: { size: 0 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.12,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          colors: Array(12).fill('#a1aab2'),
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: Array(10).fill('#a1aab2'),
        },
      },
    },
  };

  return (
    <div>
      <ApexCharts options={chartOptions} series={chartOptions.series} type="area" height={300} />
    </div>
  );
};

export default MyChart1;
