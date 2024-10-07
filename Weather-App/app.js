let cityName = document.getElementById('city')
let temp = document.getElementById('temp')
let humidity = document.getElementById('humidity')
let windSpeed = document.getElementById('speed')
let searchIcon = document.getElementById('searchIcon')
let searchIput = document.getElementById('searchIput')
let detail = document.getElementById('detail')
let body = document.getElementById('body')

// console.log(temp);

async function checkWeather(city){
    let api_Key =`f0740661325a3a1276bf855cd59a8e96`
    // (jb tk call na ho jb tk api fetch load na ho jaye)
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`)
    let data= await response.json()
    console.log(data);
    
    cityName.innerHTML=data.name;
    temp.innerHTML=Math.floor(data.main.temp) + "°C";
    humidity.innerHTML=data.main.humidity+"%"
    speed.innerHTML=data.wind.speed+"km/h"


    body.style.display='flex';
    detail.style.display='flex';
}
checkWeather()

searchIcon.addEventListener('click' , ()=>{
    checkWeather(searchIput.value)
})