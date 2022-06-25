fetch('http://api.openweathermap.org/data/2.5/weather?q=Baku&APPID=fe7cf4ee8c45887512f56fdea9f93d1a')
    .then((resp)=> {return resp.json()})
    .then((data) => {
        document.querySelector('.weather').innerHTML = 
        `<marquee direction="right" scrollamount="10"> 
        ${data.name}, Azerbaijan Today: &emsp;
        Temperature: ${(data.main.temp - 273).toFixed()}&deg;C &emsp;     
        Feel like: ${(data.main.feels_like - 273).toFixed()}&deg;C &emsp;   
        Humidity: ${data.main.humidity}% &emsp; 
        Wind: ${data.wind.speed} km/h &emsp; 
        Pressure: ${data.main.pressure}
        </marquee>`
    }); 