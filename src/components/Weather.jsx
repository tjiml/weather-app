import React, { useState } from "react";

export default function Weather() {

    let api_key = "4328cbe960089bdb5911f383a2006c87";

    const [weatherIcon, setWeatherIcon] = useState('');
    const [details, setDetails] = useState();

    const search = async () => {
        const element = document.getElementsByClassName('location-input');

        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humid = document.getElementsByClassName('humid-percentage');
        const wind = document.getElementsByClassName('wind-rate');
        const temperature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');
        const min_temp = document.getElementsByClassName('min-temp');
        const max_temp = document.getElementsByClassName('max-temp');
        const feels_like_temp = document.getElementsByClassName('feels-like-temp');

        humid[0].innerHTML = "Humidity: " + data.main.humidity + "%";
        wind[0].innerHTML = "Wind: " + data.wind.speed + " km/hr";
        temperature[0].innerHTML = Math.floor(((data.main.temp * 9/5) + 32)) + " °";
        feels_like_temp[0].innerHTML = "Feels like: " + Math.floor(((data.main.feels_like * 9/5) + 32)) + " °";
        location[0].innerHTML = data.name;
        min_temp[0].innerHTML = "L: " + Math.floor(((data.main.temp_min * 9/5) + 32)) + " °";
        max_temp[0].innerHTML = "H: " + Math.floor(((data.main.temp_max * 9/5) + 32)) + " °";

        if (data.weather[0].icon === "01d") {
            setWeatherIcon(<i className="bi bi-brightness-high"></i>);
            setDetails('clear sky');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://auroralabsnorway.com/blog/wp-content/uploads/2020/05/sun-3588618_1920-1200x800.jpg")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "01n") {
            setWeatherIcon(<i className="bi bi-moon-stars"></i>);
            setDetails('clear sky');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1608356349386-74c5e961fd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "02d"|| data.weather[0].icon === "02n") {
            setWeatherIcon(<i className="bi bi-clouds"></i>);
            setDetails('few clouds');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1612505890061-5235f9f9e3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWeatherIcon(<i className="bi bi-clouds"></i>);
            setDetails('scattered clouds');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1610736702440-9dfab24cd7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWeatherIcon(<i className="bi bi-clouds"></i>);
            setDetails('broken clouds');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWeatherIcon(<i className="bi bi-cloud-drizzle"></i>);
            setDetails('shower rain');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1567688993206-43c34131b21f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2492&q=80")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWeatherIcon(<i className="bi bi-cloud-rain-heavy"></i>);
            setDetails('rain');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2448&q=80")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
            setWeatherIcon(<i className="bi bi-cloud-lightning-rain"></i>);
            setDetails('thunderstorm');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1691438929124-ad2ea67dd190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWeatherIcon(<i className="bi bi-snow"></i>);
            setDetails('snow');
            document.querySelector('.weather-container').style.backgroundImage = 'url("https://images.unsplash.com/photo-1513257124392-0befc579a922?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
            document.querySelector('.weather-container').style.backgroundSize = 'cover';
        } else {
            setWeatherIcon(<i className="bi bi-brightness-high"></i>);
            setDetails('clear sky');
        }
 
    }

    return (
        <>
        <div className="weather-container">

            <div className="search-bar">
                <input type="text" className="location-input" placeholder="Search"/>
                <button onClick={() => {search()}}><i className="bi bi-search"></i></button>
            </div>

            <div className="weather-image">
                <h1>{weatherIcon}</h1>
            </div>

            <div className="weather-location-title">
                <h1 className="weather-location">LOCATION</h1>
            </div>

            <div className="weather-temp-display">
                <h1 className="weather-temp"></h1>
                <p>{details}</p>
            </div>

            <div className="min-max">
                <p className="min-temp">low</p>
                <p className="max-temp">high</p>
            </div>

            <div className="element-container">
                <i className="icon bi bi-thermometer-half"></i>

                <div className="data">
                    <p className="feels-like-temp">feels like</p>
                </div>
            </div>

            <div className="element-container">
                <i className="icon bi bi-cloud-haze2"></i>

                <div className="data">
                    <p className="humid-percentage">humidity</p>
                </div>
            </div>

            <div className="element-container">
                <i className="icon bi bi-wind"></i>

                <div className="data">
                    <p className="wind-rate">wind rate</p>
                </div>
            </div>

            <div className="source-container">
                <p>Weather Source: Open Weather Map</p>
            </div>
        </div>
        </>
    )
}