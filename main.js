 let countDown = document.querySelector(".countDown");

 let launchDate = new Date ('October 1, 2030 12:00:00').getTime();

 let timer = setInterval(tick, 1000);

 function tick (){
     let now = new Date().getTime();

     let cDown = launchDate - now;

     if (cDown > 0){

    // ALigorithm that calculates date........

        let day = Math.floor(cDown / (1000 * 60 * 60 * 24));
        if (day < 10){
            day = "0" + day; 
        }

        // Aligorithm that calcs hours
        let hour = Math.floor((cDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hour < 10){
            hour = "0" + hour; 
        }

        // Aligorithm that calcs minutes

        let min = Math.floor (( cDown % (1000 * 60 * 60 )) / (1000 * 60 ));
        if (min < 10){
            min = "0" + min; 
        }

        // Aligorithm that calcs Seconds

        let sec = Math.floor ((cDown % (1000 * 60)) / (1000));
        if (sec < 10){
            sec = "0" + sec; 
        }

let time = `${day} : ${hour} : ${min} : ${sec}`;

countDown.innerText = time;


     }
 }