import React from 'react';
import ApexCharts from 'react-apexcharts';

const MyChart1 = () => {
  const chartOptions = {
    series: [
      {
        name: 'Sales ($)',
        data: [
          { x: 'Jan', y: 1965 },
          { x: 'Feb', y: 1895 },
          { x: 'Mar', y: 2187 },
          // ... add other data points
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
          colors: [
            '#a1aab2',
            '#a1aab2',
            // ... add other label colors
          ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            '#a1aab2',
            '#a1aab2',
            // ... add other label colors
          ],
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
