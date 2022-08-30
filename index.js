const hourEL = document.getElementById("hour")
const minuteEL = document.getElementById ("minute")
const secondEL = document.getElementById ("second")
const ampmEL = document.getElementById ("ampm")

function updateClock(){
   let h= new Date().getHours()
   let m = new Date().getMinutes()
   let s = new Date().getSeconds()
   let ampm = 'AM'

    if(h > 12){
    h = h-12
    ampm =  "PM"
    }

    if (h < 10){
       h=  "0" + h
    }

    if (m < 10){
        m=  "0" + m
    }

     if (s < 10){
        s=  "0" + s
    }


   hourEL.innerHTML = h;
   minuteEL.innerHTML = m;
   secondEL.innerHTML = s;
   ampmEL.innerHTML = ampm;

   setTimeout(
    () => {
        updateClock()
    },1000
   )
}

updateClock();
