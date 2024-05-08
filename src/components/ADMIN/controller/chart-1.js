// !function(){var a={533:function(){!function(){const a={init(){new ApexCharts(document.querySelector("#bsb-chart-1"),{series:[{name:"Sales ($)",data:[{x:"Jan",y:1965},{x:"Feb",y:1895},{x:"Mar",y:2187},{x:"Apr",y:2365},{x:"May",y:1943},{x:"Jun",y:2265},{x:"Jul",y:2489},{x:"Aug",y:2561},{x:"Sep",y:3587},{x:"Oct",y:3354},{x:"Nov",y:3865},{x:"Dec",y:4321}]}],xaxis:{type:"category"},chart:{type:"area",toolbar:{tools:{download:!0,selection:!1,zoom:!1,zoomin:!1,zoomout:!1,pan:!1,reset:!1}}},dataLabels:{enabled:!1},grid:{borderColor:"transparent"},colors:["var(--bs-primary)"],markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.12,opacityTo:0,stops:[0,90,100]}},xaxis:{labels:{style:{colors:["#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2"]}}},yaxis:{labels:{style:{colors:["#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2","#a1aab2"]}}}}).render()}};function e(){a.init()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e(),window.addEventListener("load",(function(){}),!1)}()}},e={};function t(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return a[o](r,r.exports,t),r.exports}t.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(e,{a:e}),e},t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})},t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},function(){"use strict";t(533)}()}();


import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts'; // Install the 'react-apexcharts' package

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
    xaxis: { type: 'category' },
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