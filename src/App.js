import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './App.scss';
import Headers from './components/headers/headers';
import Home from './containers/home/home.container';
import WeatherAPI from './services/weather-api';
import AddCityContainer from './containers/add-city/add-city.container';
import About from './containers/about/about.container';
import Spinner from './components/spinner/spinner';


const CITY_LIST = [
  "London,uk",
  "New Delhi,in",
  "Pune,in"
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weatherCards: [], cityList: CITY_LIST, isLoding: false };
    this.weatherAPI = new WeatherAPI();
  }

  addWeatherCard(weather) {
    const weatherCards = [...this.state.weatherCards];
    weatherCards.push(weather);
    this.setState({ weatherCards });
  }


  getCityListWeather() {
    this.setState({ isLoding: true });
    this.state.cityList.forEach(city => {
      this.weatherAPI.getWeatherByCityName(city)
        .then(res => {
          setTimeout(() => {
            this.addWeatherCard(res.data);
            this.setState({ isLoding: false });
          }, 2000);

        })
        .catch(err => {
          console.log(err);
          this.setState({ isLoding: false });

        }
        );
    });
  }

  componentDidMount() {
    this.getCityListWeather();
  }

  spinner = (
    <div className="App__spinner">
      <Spinner />
      <h2>Loading</h2>
    </div>
  );

  render() {
    return (
      <div className="App">
        <div className="App__headers">
          <Headers />
        </div>

        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" render={() => this.state.isLoding ? this.spinner : <Home cards={this.state.weatherCards} />} />
          <Route path="/add-city" render={() => <AddCityContainer />} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }

}

export default App;
