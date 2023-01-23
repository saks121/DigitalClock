//variables

let btn =document.getElementById("SetAlarm").value;
let timeIN  =document.getElementById("time1");
let timeIN2 =document.getElementById("time2");
let timeIN3 =document.getElementById("time3");
let timeIN4 =document.getElementById("time4");

let greet =document.getElementById("greetmsg");
let greet2 =document.getElementById("content");

let image =document.getElementById("img");
let cont =document.getElementById("con");
let date =new Date();
let hours =date.getHours();
let hr =date.getHours();
console.log(hours);
let min =date.getMinutes();
let sec =date.getSeconds();


let buttontn =document.getElementById("SetAlarm");
// execute set alarm button
// buttontn.addEventListener("click",setAlarm());





// execute clock();
setInterval(()=>{

    clock();
},2000);






//Methods
// to generate a digital clock
function clock(){

    console.log(hours,min,sec);


    if(hours >=12){
            hours =hours -12;
            let am =document.getElementById("Am");
            am.innerText ="PM";
    }
    else{
            let am =document.getElementById("Am");
            am.innerText ="AM";
    }

    let hour =document.getElementById("hr");
    hour.innerText =hours;

    let mins =document.getElementById("min");
    mins.innerText =min;

    let secs =document.getElementById("sec")
    secs.innerText =sec;



}


//myClickFunc()
function set(){

    // 1. fetches the input time from text box and show them in the time div
    let html="";
    html+=`<p>Wake Up Time:${time1.value}AM-${time.1.value +1}AM</p>
        <p>Lunch Time: ${time2.value}PM-{time2.value +1}PM</p>
        <p>Nap Time: ${time3.value}PM-{time3.value + 1}PM</p>
        <p>Night Time: ${time4.value}PM-${time4.1.value +1}</p>
    `;
    cont.innerHTML =html;
    console.log(timeIN.value,typeof(timeIN.value));

    console.log("input val :",timeIN+" type:",typeof(timeIN4));
    console.log("real time val :",hours+"type:",typeof(hours));

    // 2. Change the properties
       //2.1 change greet msg leftBox
       //2.2 change the greet msg rightBox
       //2.3 change the image

    if(parseInt(timeIN.value) === hr){

        console.log("if 1 executed");
        greet.innerText ="GOOD MORNING!! WAKE UP!!";
        greet2.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        img.style.backgroundImage="url('media/Component 30 – 1.jpg')";
    }

    else if(parseInt(timeIN2.value) === hr){
        console.log("if 2 executed");
        greet.innerText ="GOOD AFTERNOON!! TAKE SOME SLEEP!!";
        greet2.innerText="LET'S HAVE SOME LUNCH!!!";
        img.style.backgroundImage="url('media/Component 31 – 1.jpg')";

    }

    else if(parseInt(timeIN3.value) === hr){
        console.log("If Evening executed!!");
        greet.innerText ="GOOD EVENING!!";
        greet2.innerText="STOP YAWNING, GET SOME TEA..! IT'S JUST EVENING";
        img.style.background="transparent url('media/lunch_image.png') 0% 0% no-repeat padding-box";
    }

    else if(parseInt(timeIN4.value) ===hr){
        console.log("if 4 executed");
        console.log(parseInt(timeIN.value));
        greet.innerText ="GOOD NIGHT!!";
        greet2.innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        img.style.background="transparent url('media/Component 32 – 1.jpg') 0% 0% no-repeat padding-box";
    }

    else{
        pass;
    }


};


