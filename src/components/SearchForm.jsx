import React from 'react';

export default function Form({ loadWeather }) {
  return (
    <form onSubmit={loadWeather} style={{ alignSelf: 'center', width: '60%' }}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button type="submit">Get Weather</button>
    </form>
  );
}