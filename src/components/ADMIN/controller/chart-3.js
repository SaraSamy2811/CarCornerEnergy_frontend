import React from 'react';
import ApexCharts from 'react-apexcharts'; // Ensure 'react-apexcharts' is installed

const MyDeviceStatsBarChart = () => {
  const chartOptions = {
    series: [
      { name: 'Mobile', data: [120, 130, 150, 170, 180, 190] },
      { name: 'Tablet', data: [60, 70, 80, 90, 100, 110] },
      { name: 'Desktop', data: [200, 210, 230, 250, 260, 270] },
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
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yaxis: { title: { text: 'Usage (thousands)' } },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (value) => `${value} thousands`,
      },
    },
  };

  return (
    <ApexCharts options={chartOptions} series={chartOptions.series} type="bar" height={300} />
  );
};

export default MyDeviceStatsBarChart;
