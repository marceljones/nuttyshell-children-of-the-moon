// import { useWeather, getWeather } from "./WeatherProvider.js"
// import { weatherHTML } from "./Weather.js"

// const contentTarget = document.querySelector('.weatherArea');

// export const weatherDays = () => {
//     getWeather() 
//     // getWeather initiates the api call
//     .then(render(useWeather()))
// }

// const render = (aDayTacoArray) => {
//     let HTMLArray = aDayTacoArray.map(singleTacoDay => {
//         return weatherHTML(singleTacoDay);
//     })
//     // contentTarget.innerHTML = ""
//     contentTarget.innerHTML = HTMLArray.join("");
//     // adds to dom without the joining comma
