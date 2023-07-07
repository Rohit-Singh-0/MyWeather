const input_city = document.getElementById("input_city");
const search_btn = document.getElementById("search_button");
const temp = document.getElementById("temperature");
const type = document.getElementById("type");
const locat = document.getElementById("location");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feels_like = document.getElementById("feels_like");
const cloudy = document.getElementById("cloudy");
const weather_img = document.getElementById("weather_png");
const bg_img = document.querySelector(".bg-img");
const content_bg = document.querySelector(".content-bg");

fetch("https://ipapi.co/json/")
  .then(function (response) {
    response.json().then((jsonData) => {
      console.log(jsonData);
      let city = jsonData["city"];
      check_weather(city);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

async function check_weather(city) {
  const api_key = "229a885c63fed0ce55b298e8bbc53760";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  console.log(weather_data);
  temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}&degC`;
  type.innerHTML = `${weather_data.weather[0].main}`;
  locat.innerHTML = `${weather_data.name}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind.innerHTML = `${Math.round(weather_data.wind.speed)}Km/h`;
  feels_like.innerHTML = `${Math.round(
    weather_data.main.feels_like - 273.15
  )}&degC`;
  cloudy.innerHTML = `${weather_data.clouds.all}%`;
  weather_img.src = `${
    "https://openweathermap.org/img/wn/" +
    weather_data.weather[0].icon +
    "@2x.png"
  }`;
  console.log(weather_data.weather[0].icon);

  const query = `${weather_data.weather[0].main}`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      bg_img.src = "assets/cloud-img.jpg";
      content_bg.src = "assets/cloud-img.jpg";
      break;
    case "Clear":
      bg_img.src = "assets/clear-img.jpg";
      content_bg.src = "assets/clear-img.jpg";
      break;
    case "Mist":
      bg_img.src = "assets/mist-img.jpg";
      content_bg.src = "assets/mist-img.jpg";
      break;
    case "Haze":
      bg_img.src = "assets/mist-img.jpg";
      content_bg.src = "assets/mist-img.jpg";
      break;
    case "Rain":
      bg_img.src = "assets/rain-img.jpg";
      content_bg.src = "assets/rain-img.jpg";
      break;
    case "Drizzle":
      bg_img.src = "assets/rain-img.jpg";
      content_bg.src = "assets/rain-img.jpg";
      break;
    case "Snow":
      bg_img.src = "assets/snow-img.jpg";
      content_bg.src = "assets/snow-img.jpg";
      break;
  }
}

function inpu_clear() {
  input_city.value = "";
}

input_city.addEventListener("change", () => {
  check_weather(input_city.value);
  inpu_clear();
});

search_btn.addEventListener("click", () => {
  check_weather(input_city.value);
});
