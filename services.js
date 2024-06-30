/*
// function to wait for 500 ms
function waitFor500ms(cb) {
    setTimeout(cb, 500);
}
//function to do every second
function doEverySecond(cb) {
    setInterval(cb, 1000)
}
// function to ask permission for locatin - and get the coordinates

function askForLocation(cb) {
    navigator.geolocation.getCurrentPosition((position) => {
        cb(position.coords.latitude, position.coords.longitude);
    });
}
// function to ask for sunset of day

function getSunset(lat, lng, cb) {
    //creating our 
    let xhr = new XMLHttpRequest();

    //connection
    let url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`
    xhr.open("GET", url, true);

    //execute
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.responseText);
            let results = res.results;
            cb(Number(new Date(results.date + ' ' + results.sunset)));
        }
    }
    xhr.send();
}
function setSunsetText(sunsetTime) {
    let sunsetEl = document.getElementById('timeToSunset');
    sunsetEl.innerText = sunsetTime;
}
*/

// function to wait for 500 ms
function waitFor500ms(cb) {
    setTimeout(cb, 500);
}

function waitFor500msP() {
    return new Promise((res, rej) => {
        setTimeout(res, 500);
    })
}
//function to do every second
function doEverySecond(cb) {
    setInterval(cb, 1000)
}
// function to ask permission for locatin - and get the coordinates

function askForLocation(cb) {
    navigator.geolocation.getCurrentPosition((position) => {
        cb(position.coords.latitude, position.coords.longitude);
    });
}

function askForLocationP() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition((position) => {
            res(position.coords);
        })
    })
}
// function to ask for sunset of day

function getSunsetP(lat, lng, cb) {
    return new Promise((resolve, rej) => {
        //creating our 
        let xhr = new XMLHttpRequest();

        //connection
        let url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`
        xhr.open("GET", url, true);

        //execute
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let res = JSON.parse(this.responseText);
                let results = res.results;
                resolve(Number(new Date(results.date + ' ' + results.sunset)));
            }
        }
        xhr.send();
    })
}
function setSunsetText(sunsetTime) {
    let sunsetEl = document.getElementById('timeToSunset');
    sunsetEl.innerText = sunsetTime;
}



