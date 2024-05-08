// !function(){var e={460:function(){!function(){const e={init(){new ApexCharts(document.querySelector("#bsb-chart-2"),{series:[42,22,16,12,8],labels:["Chrome","Firefox","Safari","Edge","Others"],legend:{position:"bottom"},theme:{palette:"palette1"},chart:{type:"donut"}}).render()}};function t(){e.init()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t(),window.addEventListener("load",(function(){}),!1)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(460)}()}();


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
