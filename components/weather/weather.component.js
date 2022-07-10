class WeatherComponent{

    constructor(){

        window.addEventListener("load", (e) => {

            const apiKey = "fe7cf4ee8c45887512f56fdea9f93d1a";
            const cityName = 'Baku';
            new WeatherRender(apiKey, cityName);
        })
    }
}