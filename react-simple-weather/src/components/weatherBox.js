import React from 'react';
import './weatherBox.css';

import LocationInput from './locationInput';
import WeatherOutput from './weatherOutput';


export default function weatherBox(props) {
  return (
    <div>
      <LocationInput />
      <WeatherOutput />
    </div>
  ); 
}
