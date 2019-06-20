import React from 'react';
import WeatherResult from './WeatherResult';
import SearchForm from './SearchForm';
import { fetchWeather } from '../actions/weatherActions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined
    };
  }

  getWeather(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    if (city && country) {
      // fire the request via redux action
      // this.props.loadWeather(city, country);

      fetchWeather(city, country)
        .then((response) => {
          this.setState({
            temperature: response.main.temp,
            city: response.name,
            country: response.sys.country,
            description: response.weather[0].description,
            error: ''
          });
        })
        .catch(e => {
          this.setState({
            error: `Can't find ${city}, ${country}`,
          })
        });
    } else {
      this.setState({
        error: 'Please input search values...'
      })
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          Weather
        </header>
        <div className="wrapper">
          <div className="main">
            <SearchForm loadWeather={this.getWeather} error={this.state.error} />
            <WeatherResult
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
            />
          </div>
        </div>
      </div>);
  }
}
export default App;