getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ac8bb0b40cmsh88b996c0dc37bcfp12afa7jsnf89b095f7430',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
return fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
.then(response =>response.json())
.then(data => data)
.catch(err => console.log(err))
}
const  searchCity = async() => {
  const city = document.getElementById('city-input').value;
  console.log(city)
 const data = await getWeatherData(city)
 console.log(data)
 showWeatherData(data)
}
const showWeatherData = (weatherData) => {
 console.log("ss",weatherData)
  document.getElementById('temp').innerText =weatherData.current.temp_c
  document.getElementById('city-name').innerText =weatherData.location.name
  document.getElementById('weather-type').innerText =weatherData.current.condition.text
  document.getElementById('wind_kph').innerText =weatherData.current.wind_kph
  document.getElementById('Humidity').innerText =weatherData.current.humidity
}

