

    
async function getWeather() {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b37330c70fce4bd19ce153856232703&q=midland,texas&aqi=no`, {mode: 'cors'});
  const weatherData = await response.text(); 
  const weatherObj = JSON.parse(weatherData);
  console.log(weatherObj.current.temp_f);  
}
getWeather();  

