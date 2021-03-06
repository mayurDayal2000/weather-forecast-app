const box = document.querySelector(".box");
const details = document.querySelector(".details");

const ui = (data) => {
    const city = data.cityDetail;
    const weather = data.weather;

    // update html template
    details.innerHTML = `
        <h5>${city.EnglishName}</h5>

        <div style="margin: 1rem 0;">${weather.WeatherText}</div>

        <div class="detail">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // show the day or night image
    const day = document.querySelector("img.time");

    let time = null;
    if (weather.IsDayTime) {
        time = "img/day.jpg";
    } else {
        time = "img/night.jpg";
    }

    day.setAttribute("src", time);

    // show the weather icon
    const icon = document.querySelector(".icon img");
    const wIcon = `img/icons/${weather.WeatherIcon}.svg`;

    icon.setAttribute("src", wIcon);

    // show the box
    if (box.classList.contains("hide")) {
        box.classList.remove("hide");
    }
};