import React from 'react';
import PropTypes from 'prop-types';
import toCelsius from '../utils/toCelsius';

export default function Weather({ country, city, temperature, description, error }) {
  return (
    <div className="weather-info">
      {
        city &&
        <div className="weather-stat">
          <span className="weather-key">Location:&nbsp;</span>
          <span className="weather-value">{city}, {country}</span>
        </div>
      }
      {
        temperature &&
        <div className="weather-stat">
          <span className="weather-key">Temperature:&nbsp;</span>
          <span className="weather-value">{toCelsius(temperature)}&deg;C</span>
        </div>
      }
      {
        description &&
        <div className="weather-stat">
          <span className="weather-key">Conditions:&nbsp;</span>
          <span className="weather-value">{description}</span>
        </div>
      }
      {
        error &&
        <div className="weather-stat">
          <span className="weather-error">{error}</span>
        </div>
      }
    </div>
  );
}

Weather.propTypes = {
  country: PropTypes.string,
  city: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
};