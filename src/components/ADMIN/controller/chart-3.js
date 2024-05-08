// !function(){var t={859:function(){!function(){const t={init(){const t={series:[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]},{name:"Free Cash Flow",data:[35,41,36,26,45,48]}],legend:{position:"bottom"},theme:{palette:"palette1"},chart:{type:"bar"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Jun","Jul","Aug","Sep","Oct","Nov"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter(t){return"$ "+t+" thousands"}}}};new ApexCharts(document.querySelector("#bsb-chart-3"),t).render()}};function e(){t.init()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e(),window.addEventListener("load",(function(){}),!1)}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";n(859)}()}();



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
