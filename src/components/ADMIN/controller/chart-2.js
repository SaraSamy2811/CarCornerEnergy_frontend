import React from 'react';
import ApexCharts from 'react-apexcharts'; // Install the 'react-apexcharts' package

const MyDonutChart2 = () => {
  const chartOptions = {
    series: [42, 22, 16, 12, 8],
    labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Others'],
    legend: { position: 'bottom' },
    theme: { palette: 'palette1' },
    chart: { type: 'donut' },
  };

  return (
    <ApexCharts options={chartOptions} series={chartOptions.series} type="donut" height={300} />
  );
};

export default MyDonutChart2;
