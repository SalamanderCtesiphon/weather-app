

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
  weatherIcon.innerHTML = '';
  weatherIcon.src = weatherObj.current.condition.icon;
  pageView.appendChild(weatherIcon);
}

function clearPage() {
  const pageView = document.querySelector('.pageView');
  pageView.innerHTML = '';
}