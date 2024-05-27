import React from 'react';
import ApexCharts from 'react-apexcharts'; // Install the 'react-apexcharts' package

const MyBarChart3 = () => {
  const chartOptions = {
    series: [
      { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58] },
      { name: 'Revenue', data: [76, 85, 101, 98, 87, 105] },
      { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48] },
    ],
    legend: { position: 'bottom' },
    theme: { palette: 'palette1' },
    chart: { type: 'bar' },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: { categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'] },
    yaxis: { title: { text: '$ (thousands)' } },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (value) => `$ ${value} thousands`,
      },
    },
  };

  return (
    <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={300} />
  );
};

export default MyBarChart3;
