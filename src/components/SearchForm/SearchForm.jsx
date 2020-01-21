import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ loadWeather, error }) {
  return (
    <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', paddingBottom: 14 }}>
      <form onSubmit={loadWeather} >
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button type="submit">Get Weather</button>
      </form>
      <span className="weather-error">{error}</span>
    </div>
  );
}

SearchForm.propTypes = {
  loadWeather: PropTypes.func.isRequired,
  error: PropTypes.string,
};

SearchForm.defaultProps = {
  error: null,
};
