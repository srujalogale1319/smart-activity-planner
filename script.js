document.getElementById('city').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') getWeather();
});

async function getWeather(){

    const city = document.getElementById("city").value;
    if(!city) return;

    try{

        const response = await fetch("/weather",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({city})
        });

        const data = await response.json();

        if(data.error){
            alert(data.error);
            return;
        }

        document.getElementById("temp-display").innerText = `${data.temp}°C`;

        document.getElementById("condition-text").innerText =
        `${data.condition} in ${data.city} (Feels ${data.feels_like}°C)`;

        document.getElementById("humidity-val").innerText = `${data.humidity}%`;
        document.getElementById("wind-val").innerText = `${data.wind} km/h`;

        document.getElementById("activity-display").innerText = data.recommended;

        document.getElementById("activity-cat").innerText =
        `Perfect for ${data.category} conditions`;

        loadActivityAnimation(data.recommended);

        const container = document.getElementById("hourly-container");
        container.innerHTML = "";

        data.hourly.forEach(h=>{
            const div=document.createElement("div");

            div.className="hour-item flex flex-col items-center gap-2";

            div.innerHTML=`
            <span class="text-[10px] text-white/40 font-bold">${h.time}</span>
            <img src="http://openweathermap.org/img/wn/${h.icon}.png" class="w-10 h-10">
            <span class="text-white font-medium">${h.temp}°</span>
            `;

            container.appendChild(div);
        });

        updateBackground(data.condition);

    }
    catch(err){
        console.error("Weather Error:",err);
    }
}


function loadActivityAnimation(activity){

    const container = document.getElementById("activity-animation");

    let icon="🏃";

    if(activity==="Swimming") icon="🏊";
    else if(activity==="Outdoor Cycling") icon="🚴";
    else if(activity==="Movie Night") icon="🎬";
    else if(activity==="Running") icon="🏃";
    else if(activity==="Yoga") icon="🧘";

    container.innerHTML = `
        <div style="font-size:90px;animation:floatAnim 3s ease-in-out infinite;">
            ${icon}
        </div>
    `;
}


function updateBackground(condition){

    const video = document.getElementById("weather-video");
    const source = document.getElementById("video-source");

    const c = condition.toLowerCase();

    let file = "default.mp4";

    if (c.includes("clear")) {
        file = "sunny.mp4";
    }
    else if (c.includes("cloud")) {
        file = "cloudy.mp4";
    }
    else if (c.includes("rain") || c.includes("drizzle")) {
        file = "rainy.mp4";
    }
    else if (c.includes("snow")) {
        file = "snowy.mp4";
    }
    else if (c.includes("thunder")) {
        file = "thunderstorm.mp4";
    }

    source.src = `/static/videos/${file}`;

    video.load();
}