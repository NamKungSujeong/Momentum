const API_KEY = "05367c9aa1824b7db1e4b3d8ad1c189b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}°C ${data.weather[0].main} ,`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

// 현재 위치 불러오기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
