import React from 'react';
import ApexCharts from 'react-apexcharts'; // Install the 'react-apexcharts' package

const MyDonutChart4 = () => {
  const chartOptions = {
    series: [21, 23, 19, 14, 6],
    labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
    legend: { position: 'bottom' },
    theme: { palette: 'palette1' },
    chart: { type: 'donut' },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: { fontSize: '22px', fontWeight: 600 },
            value: { fontSize: '16px', fontWeight: 400, formatter: (value) => `$ ${value} thousands` },
          },
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$ ${value} thousands`,
      },
    },
  };

  return (
    <ApexCharts options={chartOptions} series={chartOptions.series} type="donut" height={300} />
  );
};

export default MyDonutChart4;
