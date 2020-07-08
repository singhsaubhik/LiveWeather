import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Headers from './components/headers/headers';
import Home from './containers/home/home.container';
import WeatherAPI from './services/weather-api';
import AddCityContainer from './containers/add-city/add-city.container';
import About from './containers/about/about.container';

const DATA = [
  { "coord": { "lon": 73.86, "lat": 18.52 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "base": "stations", "main": { "temp": 28.93, "feels_like": 29.23, "temp_min": 28.93, "temp_max": 28.93, "pressure": 1004, "humidity": 67, "sea_level": 1004, "grnd_level": 943 }, "wind": { "speed": 6.42, "deg": 238 }, "rain": { "1h": 0.38 }, "clouds": { "all": 49 }, "dt": 1594198492, "sys": { "country": "IN", "sunrise": 1594168428, "sunset": 1594215906 }, "timezone": 19800, "id": 1259229, "name": "Pune", "cod": 200 },
  { "coord": { "lon": 73.86, "lat": 18.52 }, "weather": [{ "id": 500, "main": "Storm", "description": "light rain", "icon": "10d" }], "base": "stations", "main": { "temp": 23.93, "feels_like": 29.23, "temp_min": 28.93, "temp_max": 28.93, "pressure": 1004, "humidity": 67, "sea_level": 1004, "grnd_level": 943 }, "wind": { "speed": 6.42, "deg": 238 }, "rain": { "1h": 0.38 }, "clouds": { "all": 49 }, "dt": 1594198492, "sys": { "country": "GB", "sunrise": 1594168428, "sunset": 1594215906 }, "timezone": 19800, "id": 1259229, "name": "London", "cod": 200 },
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weatherCards: DATA };
    this.weatherAPI = new WeatherAPI();
  }

  addWeatherCard(weather) {
    const weatherCards = [...this.state.weatherCards];
    weatherCards.push(weather);
    this.setState({ weatherCards });
  }

  componentDidMount() {
    this.weatherAPI.getWeatherByCityName("Jammu,in")
      .then(res => this.addWeatherCard(res.data))
      .catch(err => console.log(err)
      );
  }

  render() {
    return (
      <div className="App">
        <Headers />
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" render={() => <Home cards={this.state.weatherCards} />} />
          <Route path="/add-city" render={() => <AddCityContainer />} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }

}

export default App;
