export default class WeatherModel {

    apiKey: string;
    cityName: string;
    
    constructor(apiKey: string, cityName: string) {
        this.apiKey = apiKey;
        this.cityName = cityName;
    }

    async getWeather() {
        const path: string = `http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=${this.apiKey}&units=metric`
        const res = await fetch(path);
        const json = await res.json();
        return json
    }
}