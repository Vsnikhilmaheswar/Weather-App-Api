getWeatherData = (city) =>{
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    return url
}



const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ac8bb0b40cmsh88b996c0dc37bcfp12afa7jsnf89b095f7430',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};
url=getWeatherData("landon")
console.log(url,)
fetch(url, options)
.then(response =>response.json())
.then(data =>console.log(data))
