import React from 'react';

export default function WeatherOutput(props) {
  return (
    <div>
      <p>Your Current Weather:</p>
      <ul>
        <li>City:</li>
        <li>Temperature:</li>
        <li>Conditions:</li>
      </ul>
    </div>
  );
}