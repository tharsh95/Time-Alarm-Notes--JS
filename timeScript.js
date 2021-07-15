setInterval(() => {
    d = new Date()
    hh = d.getHours()
    mm = d.getMinutes()
    ss = d.getSeconds()
    hr = 30 * hh + mm / 2
    mr = 6 * mm
    sr = 6 * ss
    hour.style.transform = `rotate(${hr}deg)`
    minute.style.transform = `rotate(${mr}deg)`
    second.style.transform = `rotate(${sr}deg)`
}, 1000);
let nd = new Date()
let date = document.getElementById("date")
date.innerHTML = `${nd.getDate()}/0${nd.getMonth()+1}/${nd.getFullYear()}`
// let time = document.getElementById("time")
// time.innerHTML = `0${nd.getHours()}:0${nd.getMinutes()}:${nd.getSeconds()}`
function updateClock() {
    let currentTime = new Date()  
    let currentHour = currentTime.getHours()
    let currentMinute = currentTime.getMinutes()
    let currentSec = currentTime.getSeconds()
    let timeOfDay = (currentHour < 12 ? "AM" : "PM")
    // console.log(currentHour, currentMinute, currentSec, timeOfDay)
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute
    currentSec = (currentSec < 10 ? "0" : "") + currentSec
    currentHour = (currentHour > 12 ? currentHour % 12 : currentHour)
    currentHour = (currentHour < 10 ? "0" : "") + currentHour
    let time = document.getElementById("time")
    let currentTimeStr = `${currentHour}:${currentMinute}:${currentSec} ${timeOfDay}`
    time.innerHTML = currentTimeStr
}
updateClock()

// let stopBtn = document.getElementById("stopBtn")
// stopBtn.addEventListener("click", function () {
//     stopBtn.remove()
// }, {once: true})
let clckCon = document.getElementById("clockContainer")
let time = document.getElementById("time")
clckCon.addEventListener("dblclick", function () {
    clckCon.style.display = "none"
    time.style.display = "block"
    time.style.display = "flex"
})
time.addEventListener("dblclick", function () {
    time.style.display = "none"
    clckCon.style.display = "block"
    clckCon.style.display = "flex"
})