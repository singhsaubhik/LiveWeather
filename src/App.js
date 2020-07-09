import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Headers from './components/headers/headers';
import Home from './containers/home/home.container';
import WeatherAPI from './services/weather-api';
import AddCityContainer from './containers/add-city/add-city.container';
import About from './containers/about/about.container';


const CITY_LIST = [
  "London,uk",
  "New Delhi,in",
  "Pune,in"
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weatherCards: [], cityList: CITY_LIST };
    this.weatherAPI = new WeatherAPI();
  }

  addWeatherCard(weather) {
    const weatherCards = [...this.state.weatherCards];
    weatherCards.push(weather);
    this.setState({ weatherCards });
  }


  getCityListWeather() {
    this.state.cityList.forEach(city => {
      this.weatherAPI.getWeatherByCityName(city)
        .then(res => this.addWeatherCard(res.data))
        .catch(err => console.log(err)
        );
    });
  }

  componentDidMount() {
    this.getCityListWeather()
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
