import axios from "axios";

class WeatherAPI {
    constructor() {
        this.apiKey = "25b04344cf0a6cf9401cc21903911f82";
        this.baseUrl = "https://api.openweathermap.org";
    }

    getWeatherByCityName = async (cityName, units = "metric") => {
        const response = await axios.get(`${this.baseUrl}/data/2.5/weather?q=${cityName}\
                                                    &units=${units}&APPID=${this.apiKey}`);
        // console.log(response);
        return response;
    };
}

export default WeatherAPI;