// 



import React from 'react';
import jsVectorMap from 'jsvectormap'; // Install the 'jsvectormap' package

const MyWorldMap1 = () => {
  const mapOptions = {
    selector: '#bsb-map-1',
    map: 'world_merc',
    markers: [
      { name: 'Australia', coords: [-25.274399, 133.775131] },
      { name: 'Brazil', coords: [-14.235004, -51.925282] },
      { name: 'Russia', coords: [61.52401, 105.318756] },
      { name: 'United States', coords: [37.09024, -95.712891] },
    ],
    series: {
      markers: [
        {
          attribute: 'fill',
          scale: {
            Australia: 'rgb(25, 135, 84)',
            Brazil: 'rgb(220, 53, 69)',
            Russia: 'rgb(255, 193, 7)',
            USA: 'rgb(13, 110, 253)',
          },
          values: { 0: 'Australia', 1: 'Brazil', 2: 'Russia', 3: 'USA' },
        },
      ],
      regions: [
        {
          attribute: 'fill',
          legend: { title: 'Sales' },
          scale: {
            Australia: 'rgb(25, 135, 84)',
            Brazil: 'rgb(220, 53, 69)',
            Russia: 'rgb(255, 193, 7)',
            USA: 'rgb(13, 110, 253)',
          },
          values: { AU: 'Australia', BR: 'Brazil', RU: 'Russia', US: 'USA' },
        },
      ],
    },
  };

  return <div id="bsb-map-1"></div>;
};

export default MyWorldMap1;
