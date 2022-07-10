class WeatherModel {
    
    constructor(apiKey, cityName) {
        this.apiKey = apiKey;
        this.cityName = cityName;
    }

    async getWeather() {

        const path = `http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=${this.apiKey}&units=metric`

        const res = await fetch(path);
        const json = await res.json();
        
        return json
    }
}