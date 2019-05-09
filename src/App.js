import React from 'react';
import WeatherPanel from './components/WeatherPanel';
import SearchForm from './components/SearchForm';
import './App.css';

const Api_Key = '54360e056cc0866724607dadfbe71bc2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    if (city && country) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
        .then(res => {
          if (res.status !== 200) {
            throw Error(res.json());
          }
          return res.json();
        })
        .then((response) => {
          this.setState({
            temperature: response.main.temp,
            city: response.name,
            country: response.sys.country,
            humidity: response.main.humidity,
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
          Hivemind Weather
        </header>
        <div className="wrapper">
          <div className="main">
            <SearchForm loadWeather={this.getWeather} />
            <WeatherPanel
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>);
  }
}
export default App;