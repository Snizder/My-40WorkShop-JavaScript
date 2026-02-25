let city ="";
const apiKey="0797dd867c8e6aff736dca2542b6564b"

const search = document.getElementById("search");
const form = document.getElementById("form");



function setData(){
    showWeather();
}

async function showWeather(){
    try{
        const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        showDataToUI(data);
    }
    catch(error){
        console.log(error);
    }
}

function showDataToUI(data){
    const city =document.getElementById("city");
    const state = document.getElementById("state");
    const weather = document.getElementById("weather");
    const status = document.getElementById("status");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    city.innerText = data.name;
    state.innerText = data.sys.country;

    weather.children[0].innerHTML = calculateTemp(parseInt(data.main.temp))+" C&deg";
    weather.children[1].innerHTML = "Max : "+ calculateTemp(parseInt(data.main.temp_max))+" C&deg "+" Min : "+calculateTemp(parseInt(data.main.temp_min))+" C&deg";

    status.innerText = data.weather[0].description;
    humidity.innerText ="Humidity: "+ data.main.humidity;
    wind.innerText = "Wind Speed: "+ data.wind.speed+" km/h";
}
function calculateTemp(k){
    return k-273;
}

function callDataApi(e){
    e.preventDefault();
    city = search.value;
    showWeather();
}

form.addEventListener("submit",callDataApi);




setData();