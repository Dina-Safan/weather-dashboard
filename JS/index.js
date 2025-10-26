//^ Html Elements
const toggleInput=document.querySelector("#toggle-input");
const htmlElement=document.documentElement;
const cardElement=document.querySelectorAll(".card");
const cardContainer=document.querySelector(".card-container")
console.log(cardContainer);


//& Varaiables
const Savedtheme=localStorage.getItem("theme") || "light";
        htmlElement.setAttribute("data-bs-theme", Savedtheme);
        if( Savedtheme =="dark") toggleInput.checked=true;
const apiKey="69b5dc7d551c4eba835123154252610";
const baseURL="http://api.weatherapi.com/v1/forecast.json"




//~ Functions 
async function getWeather() {
    const response= await fetch(`${baseURL}?key=${apiKey}&q=london&days=7`);
    const data= await response.json();
console.log(data.forecast.forecastday);

    displayCards(data);
    
}

getWeather();

function displayCards(day){
    let card='';
    for(let i=0 ;i<day.forecast.forecastday.length;i++){
            card=` <div class=" card ${i==0?"active":""}">
                        <div class="card-title">
                            <div class="day">Friday</div>
                            <div class="time">${day.forecast.forecastday[i].hour[i].time} pm</div>
                        </div>
                        <div class="card-body">
                            <div class="main-info">
                                <div class="temp">${day.current.temp_c}c°</div>
                                <img src="https:${day.current.condition.icon}" alt="">
                            </div>

                            <div class="todays-heighlight">
                                <ul >
                                    <li>realfeal: <span>${day.current.feelslike_c}°</span></li>
                                    <li>Wind: <span>${day.current.wind_kph}km/h</span></li>
                                    <li>Pressure: <span>${day.current.pressure_mb}MB</span></li>
                                    <li>Humidity: <span>${day.current.humidity}%</span></li>
                              
                                </ul>

                                <ul>
                                       <li>Sunrise: <span>${day.forecast.forecastday[i].astro.sunrise} </span></li>
                                       <li>Sunset: <span>${day.forecast.forecastday[i].astro.sunset} </span></li>
                                </ul>
                            </div>

                        </div>

                    </div>`
        cardContainer.innerHTML+=card;

    }


}


//TODO Events 
toggleInput.addEventListener("change",function(){
  const theme =toggleInput.checked ?'dark':'light';
  htmlElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme",theme);

})

for(let i=0;i<cardElement.length;i++){
   cardElement[i].addEventListener("click",function(e){
     const activeCard=document.querySelector(".active");
     activeCard.classList.remove('active');
     const clickedCard=e.currentTarget;
    clickedCard.classList.add("active");
   })
}



