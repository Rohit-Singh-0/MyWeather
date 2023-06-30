const input_city = document.getElementById("input_city")
const search_btn = document.getElementById("search_button")
const temp = document.getElementById("temperature")
const type = document.getElementById("type")
const locat = document.getElementById("location")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const feels_like = document.getElementById("feels_like")
const cloudy = document.getElementById("cloudy")







async function check_weather(city){
    const api_key = "229a885c63fed0ce55b298e8bbc53760";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data =await fetch(`${url}`).then(response => response.json());
    console.log(weather_data)
    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}&degC`;
    type.innerHTML = `${weather_data.weather[0].main}`;
    locat.innerHTML = `${weather_data.name}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind.innerHTML = `${Math.round(weather_data.wind.speed)}Km/h`
    feels_like.innerHTML = `${Math.round(weather_data.main.feels_like-273.15)}&degC`
    cloudy.innerHTML = `${weather_data.clouds.all}%`

}



search_btn.addEventListener('click', ()=>{
    check_weather(input_city.value)
});