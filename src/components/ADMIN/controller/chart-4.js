// !function(){var t={551:function(){!function(){const t={init(){const t={series:[21,23,19,14,6],labels:["Clothing","Food Products","Electronics","Kitchen Utility","Gardening"],legend:{position:"bottom"},theme:{palette:"palette1"},chart:{type:"donut"},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"22px",fontWeight:600},value:{fontSize:"16px",fontWeight:400,formatter(t){return"$ "+t+" thousands"}}}}}},tooltip:{y:{formatter(t){return"$ "+t+" thousands"}}}};new ApexCharts(document.querySelector("#bsb-chart-4"),t).render()}};function e(){t.init()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e(),window.addEventListener("load",(function(){}),!1)}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(551)}()}();


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
