import React from 'react';

export default function WeatherOutput(props) {
let weather = props.localWeather[0];
let name = '';
let tempF = '';
let description = '';
let main = '';

if(props.localWeather[0]) {
  name = weather.name;
  tempF = weather.tempF;
  description = weather.description;
  main = weather.main;
  };
  return (
    <div>
      <p>The Current Weather in {name}:</p>
      <ul>
        <li>Temperature: {tempF} </li>
        <li>Conditions: {main}: {description}</li>
      </ul>
    </div>
  );
}