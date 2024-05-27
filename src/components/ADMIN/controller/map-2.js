import React from 'react';
import  '../../../../node_modules/jsvectormap'; // Install the 'jsvectormap' package

const MyWorldMap2 = () => {
  const mapOptions = {
    selector: '#bsb-map-2',
    map: 'world_merc',
    selectedRegions: ['AU', 'BR', 'RU', 'US'],
    markers: [
      { name: 'Australia', coords: [-25.274399, 133.775131], style: { fill: 'rgb(25, 135, 84)' } },
      { name: 'Brazil', coords: [-14.235004, -51.925282], style: { fill: 'rgb(255, 193, 7)' } },
      { name: 'Russia', coords: [61.52401, 105.318756], style: { fill: 'rgb(220, 53, 69)' } },
      { name: 'United States', coords: [37.09024, -95.712891], style: { fill: 'rgb(13, 110, 253)' } },
    ],
  };

  return <div id="bsb-map-2"></div>;
};

export default MyWorldMap2;
