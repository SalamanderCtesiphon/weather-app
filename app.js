

let userLocation = "79701";

const submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const searchItem = document.getElementById('search').value;
  userLocation = searchItem;
  clearPage();
  getWeather();
}
 
async function getWeather() {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b37330c70fce4bd19ce153856232703&q=${userLocation}&aqi=no`, {mode: 'cors'});
  const weatherData = await response.text(); 
  const weatherObj = JSON.parse(weatherData);
  console.log(weatherObj); 
  displayIcon(weatherObj); 
} 

function displayIcon(weatherObj) {
  const pageView = document.querySelector('.pageView');
  const weatherIcon = document.createElement('img');
  const selectedCity = document.createElement('p');
  const temperature = document.createElement('p');
  const feelsLike = document.createElement('p');
  const wind = document.createElement('p');
  const windDirection = document.createElement('p');
  weatherIcon.src = weatherObj.current.condition.icon;
  selectedCity.innerHTML = `${weatherObj.location.name}, ${weatherObj.location.region}`
  temperature.innerHTML = `Current Temperature: ${weatherObj.current.temp_f}&deg;F`;
  feelsLike.innerHTML = `Feels Like: ${weatherObj.current.feelslike_f}&deg;F`;
  wind.innerHTML = `Wind Speed: ${weatherObj.current.wind_mph} mph`
  windDirection.innerHTML = `Wind Direction: ${weatherObj.current.wind_dir}`
  pageView.appendChild(weatherIcon);
  pageView.appendChild(selectedCity);
  pageView.appendChild(temperature);
  pageView.appendChild(feelsLike);
  pageView.appendChild(wind);
  pageView.appendChild(windDirection);
}

function clearPage() {
  const pageView = document.querySelector('.pageView');
  pageView.innerHTML = '';
}

document.getElementById("currentYear").innerHTML = new Date().getFullYear();