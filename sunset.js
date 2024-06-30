// 1. timeout 500ms

// 2. ask permission for locatin - and get coordinates

// 3. ask for sunset of day

// 4. caculate every second the distance from now to sunset
/*
waitFor500ms(function () {
    askForLocation(function (lat, lng) {
        getSunset(lat, lng, function (sunset) {
            doEverySecond(function () {
                let now = Date.now();
                let diifInSeconds = (sunset - now) / 1000;
                let diifInMinutes = diifInSeconds / 60;
                let hours = Math.floor(diifInMinutes / 60);
                let minutes = Math.floor(diifInMinutes % 60);
                let seconds = Math.floor(diifInSeconds % 60);
                setSunsetText(`${hours}:${minutes}:${seconds}`)
            })
        })

    })

})
*/


async function getAndSetSunset() {
    await waitFor500msP();

    let { latitude, longitude } = await askForLocationP();

    let sunset = await getSunsetP(latitude, longitude);

    doEverySecond(function () {
        let now = Date.now();
        let diifInSeconds = (sunset - now) / 1000;
        let diifInMinutes = diifInSeconds / 60;
        let hours = Math.floor(diifInMinutes / 60);
        let minutes = Math.floor(diifInMinutes % 60);
        let seconds = Math.floor(diifInSeconds % 60);
        setSunsetText(`${hours}:${minutes}:${seconds}`)
    })
}
getAndSetSunset();
/*
waitFor500msP()
    .then(() => {
        return askForLocationP();
    })
    .then(function ({ latitude, longitude }) {
        return getSunsetP(latitude, longitude);

    })
    .then(sunset => {
        doEverySecond(function () {
            let now = Date.now();
            let diifInSeconds = (sunset - now) / 1000;
            let diifInMinutes = diifInSeconds / 60;
            let hours = Math.floor(diifInMinutes / 60);
            let minutes = Math.floor(diifInMinutes % 60);
            let seconds = Math.floor(diifInSeconds % 60);
            setSunsetText(`${hours}:${minutes}:${seconds}`)
        })
    })
    .catch(err => {
        console.log('Somthing bad happened' + err)
    })
    


/*waitFor500ms(function () {
    askForLocation(function (lat, lng) {
        getSunset(lat, lng, function (sunset) {
            doEverySecond(function () {
                let now = Date.now();
                let diifInSeconds = (sunset - now) / 1000;
                let diifInMinutes = diifInSeconds / 60;
                let hours = Math.floor(diifInMinutes / 60);
                let minutes = Math.floor(diifInMinutes % 60);
                let seconds = Math.floor(diifInSeconds % 60);
                setSunsetText(`${hours}:${minutes}:${seconds}`)
            })
        })

    })

})
*/


