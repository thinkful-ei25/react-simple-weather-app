import React from 'react';
import './weatherBox.css';

import LocationInput from './locationInput';
import WeatherOutput from './weatherOutput';

export default class WeatherBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 10201 
    };
  }

  render() {
    const localWeather = this.props.currentWeather.filter(
      place => place.zip === this.state.zipcode
    );

    return (
      <div>
        <h1>Your Local Weather</h1>
        <LocationInput onSubmit={zipcode => this.setState({ zipcode })} />
        <WeatherOutput localWeather={localWeather} />
      </div>
    );
  }
}
