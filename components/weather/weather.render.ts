
import WeatherModel from "./weather.model";

export default class WeatherRender {

    apiKey: string;
    cityName: string;

    constructor(apiKey: string, cityName: string) {
        this.apiKey = apiKey;
        this.cityName = cityName;

        const weather = new WeatherModel(this.apiKey, this.cityName);

        weather.getWeather().then((data) => {
            document.querySelector('.weather').innerHTML = 
            `<marquee direction="right" scrollamount="5"> 
            ${data.name}, today: &emsp;
            Temperature: ${(data.main.temp).toFixed()}&deg;C &emsp;     
            Feel like: ${(data.main.feels_like).toFixed()}&deg;C &emsp;   
            Humidity: ${data.main.humidity}% &emsp; 
            Wind: ${data.wind.speed} km/h &emsp; 
            Pressure: ${data.main.pressure}
            </marquee>`
        }).catch((err) => {
            console.log(err.meassge);
        })
    }
}

