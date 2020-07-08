import React from 'react';
import "./card.scss";

import { ReactComponent as Sunny } from "../../assets/sunny.svg";
import { ReactComponent as Rainy } from "../../assets/rainy.svg";
import { ReactComponent as Cloudy } from "../../assets/cloudy.svg";
import { ReactComponent as Thunderstorm } from "../../assets/thunderstorm.svg";
import { ReactComponent as Haze } from "../../assets/haze.svg";

const Card = ({ card }) => {
    const temp = Math.floor(card.main.temp);

    const getWeatherLogo = (weather) => {
        switch (weather) {
            case "Sunny":
            case "Clear":
                return <Sunny className="card__weather" />;

            case "Clouds":
                return <Cloudy className="card__weather" />;

            case "Rain":
            case "Drizzle":
            case "Mist":
                return <Rainy className="card__weather" />;

            case "Haze":
            case "Fog":
                return <Haze className="card__weather" />;

            case "Thunderstorm":
            case "Storm":
                return <Thunderstorm className="card__weather" />;

            default:
                return <Sunny className="card__weather" />;
        }
    };

    return (
        <div className="card">
            <h2 className="card__cityname">{card.name}</h2>
            {getWeatherLogo(card.weather[0].main)}
            <h1 className="card__temp">{temp}<span>&#8451;</span></h1>
            <h1 className="card__weather-name">{card.weather[0].main}</h1>
        </div>
    );
};

export default Card;