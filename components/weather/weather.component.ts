import WeatherRender from "./weather.render";

export default class WeatherComponent {
  constructor() {
    const apiKey: string = "fe7cf4ee8c45887512f56fdea9f93d1a";
    const cityName: string = "Baku";
    new WeatherRender(apiKey, cityName);
  }
}
