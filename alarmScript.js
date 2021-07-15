console.log("Welcome to Alarm")
let alert = document.getElementById("alert")
let audio = new Audio(`alarm.mp3`)
let setBtn = document.getElementById('setBtn')
setBtn.addEventListener("click", function () {
    let alarmDate = document.getElementById("alarmDate")
    // console.log(alarmDate.value)
    let alarmTime = document.getElementById("alarmTime")
    // console.log(alarmTime.value)
    let d = new Date(`${alarmDate.value},${alarmTime.value}`)
    // console.log(d)
    let date = new Date()
    // console.log(d - date)


    if (d - date > 0) {
        alert.innerHTML = `<div class="fixed-top alert alert-success alert-dismissible fade show" role="alert">
  <strong>Hooray!</strong> Alarm set successfully
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
        setTimeout(() => {
            audio.play()

        }, d - date);



        setTimeout(() => {
            alert.innerHTML = ""

        }, 5000);
    }
    else {
        alert.innerHTML = `<div class="fixed-top alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Error!</strong> Time cannnot  be set backwards
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
        setTimeout(() => {
            alert.innerHTML = ""

        }, 5000);
    }

})
function stopAlarm() {
    audio.pause()
    alert.innerHTML = `<div class="fixed-top alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Wakey Wakey!</strong> Alarm stopped
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
    setTimeout(() => {
        alert.innerHTML = ""

    }, 5000);
}