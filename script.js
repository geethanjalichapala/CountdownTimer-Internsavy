const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');
const disp = document.getElementById('disp');

var interval = null;
var total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}


Timer = ()=>{
    totalValue();
    total--;

    if(total >= 1){
       var hr = Math.floor(total/3600);
       var mt = Math.floor((total/60) - (hr*60));
       var sc = total - ((hr*3600) + (mt*60));
       
       hour.value = hr.toLocaleString('en-us', {minimumIntegerDigits : 2, useGrouping: false});
       minute.value = mt.toLocaleString('en-us', {minimumIntegerDigits : 2, useGrouping: false});
       second.value = sc.toLocaleString('en-us', {minimumIntegerDigits : 2, useGrouping: false});

    }
    else{
        second.value = 0;
        disp.innerText = "Time Over. Set New Timer "
        TimeOver();
    }
}

TimeOver = () => {
    clearInterval(interval);

    hour.value = null;
    minute.value = null;
    second.value = null;
}

start.addEventListener('click', ()=>{
    if(second.value < 1 && minute.value < 1 && hour.value < 1){
        TimeOver();
        disp.innerText = "Time Over. Set New Timer "
    } else {
        clearInterval(interval);
        interval = setInterval(Timer , 1000);
        disp.innerText ="Timer Started";
    }
});

reset.addEventListener('click', ()=>{
    TimeOver();
    disp.innerText = "Set Timer";
})