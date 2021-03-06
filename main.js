const API_KEY = 'b659c1d5e38c8ee65ddda54ba9fa942e'
const defaultCity = 'Tokyo';

//現在の天気を取得
function getCurrentWeather() {
    $.ajax({
        url: '//api.openweathermap.org/data/2.5/weather?q=' + defaultCity + ',jp&units=metric&appid=' + API_KEY,
        dataType: 'json',
        type: 'GET'
    })
    .done(function (data) {
        console.log(data)
        insertCurrentWeather(data);
        domWeatherWrite();
    })
    .fail(function (data) {
        console.log('現在の天気を取得出来ませんでした。')
    });
}

let city = {
    name: '',
    date: '',
    time: '',
    weather: '',
    description: '',
    temp: '',
    tempMin: '',
    tempMax: '',
    feelsLike: '',
    pressure: '',
    humidity: '',
    windSpeed: '',
    WindSpeedUnit: '',
    windDeg: '',
    cloudsAll: '',
    sunriseDate: '',
    sunriseTime: '',
    sunsetDate: '',
    sunsetTime: '',
}

let current = {
    day: '',
    month: '',
    date: '',
    hours: '',
    minitutes: '',
    time: '',
    timeText: '',
}

function insertCurrentWeather(data) {
    city.name = data.name.toUpperCase();
    city.temp = Math.round(data.main.temp);
}

const UNIT = {
    TEMP: '°',
    PRESSURE: 'hPa',
    HUMIDITY: '%',
    WINDSPEED: 'm/s',
    MIDDLE_DOT: ':'
}

let date

//DOM要素に描写
function domWeatherWrite() {
    $('#city-name').html(city.name);
    $('#weather-temp').html('NOW ' + city.temp + UNIT.TEMP);
    $('#tempMin').html('MIN ' + city.tempMin + UNIT.TEMP);
    $('#tempMax').html('MAX' + city.tempMax + UNIT.TEMP);
    $('#feelsLike').html(city.feelsLike + UNIT.TEMP);
    $('#humidity').html(city.humidity + UNIT.HUMIDITY);
    $('#sunrise').html(city.sunriseTime);
    $('#sunset').html(city.sunsetTime);
    $('#windSpeedUnit').html(city.windSpeed + UNIT.WINDSPEED);
    $('#pressure').html(city.pressure + UNIT.PRESSURE);
    $('#weather-date').html(current.timeText);
    $('.detail-list').css('display', 'flex');
}


document.getElementById("show_time").innerHTML = getNow()

function getNow(){
    let now = new Date();
    let year = now.getFullYear();
    let mon = now.getMonth()+1;
    let day = now.getDate();
    let hour = now.getHours();
    let min = now.getMinutes();

    let s = 'accessed at ' + year + '/' + mon + '/' + day + ' ' + hour + ':' + min;
    return s;
}







getCurrentWeather();
