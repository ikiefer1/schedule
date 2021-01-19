var weekday = new Array(7)
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var Jan_19 = {
    dow: "Tuesday"
}
var Tuesday = [
    {
        startTime: ["1557","1545"],
        duration: [2,4],
        interval: [5,10],
        day: 19,
        month: 0,
        resources: [["https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"]
        ,["https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"]],
     },
     {
        startTime: ["1000","1130"],
        endTime:["1030","1100"],
        Interval: [5,10],
        Day: 26,
        Month: 0,
        Resources: [["https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"]
        ,["https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"]],
     }
]

function startDay(){
    var d = new Date;
    console.log()
    var dom = d.getDate();
    var month = d.getMonth();
    var dow = d.getDay().toString();
    newDay(Tuesday,dom,month);
    var tmp = new Date(d.getFullYear(),d.getMonth(),d.getDate()+1,5);
    var delay = tmp.getTime() - d.getTime()
    
    setTimeout(startDay,delay);
}
function newDay(Tuesday,dom,month){
     //dow = weekday[dow];
        console.log(Tuesday)
     findCurrentDOM(Tuesday,dom,month);
}
function findCurrentDOM(dayTry,dom,month){
    var k= 0;
    console.log("dayTry "+dayTry[0].day)
    console.log("dom "+dom)
    console.log("month "+dayTry[0].month)
    console.log("month "+month)
    for(var i = 0; i<dayTry.length; i++){//may need to be asyncrhonous
        if(dayTry[i].day==dom&&dayTry[i].month==month){
            loadCurrentDOW(dayTry,dom,i,k);
            console.log("in")
        }
        else if(dayTry[i].day==null)
        {
            //loadCurrentDOW(dow,dom,i,k);
        }
    }
    console.log("Out")
}
function loadCurrentDOW(dow,dom,i,k){
    var d = new Date();
    console.log("HOUR"+d.getHours())
    var schedHour;
    var schedMin = dow[i].startTime[k].substring(2);
    schedMin = parseInt(schedMin);
    if(dow[i].startTime[k].substring(0,1)=="0")
    {
        schedHour = dow[i].startTime[k].substring(1,2);
        schedHour = parseInt(schedHour)
        
    }
    else{
        schedHour = dow[i].startTime[k].substring(0,2);
        schedHour = parseInt(schedHour)
        console.log("schedHour"+schedHour)
    }
    console.log("getHours "+d.getHours())
    console.log("schedMin"+schedMin)
    console.log("d.getMinues"+d.getMinutes())
    if (schedHour==d.getHours()&&schedMin==d.getMinutes())
    {
        var j = 0;
        var base=0;
        console.log("runMediaNext")
        runMedia(dow,dom,i,k,j,base)
        k++;
        loadCurrentDOW(dow,dom,i,k);
    }
    else if (k<dow[i].startTime.length){
        var tmpD = new Date(d.getFullYear(),d.getMonth(),d.getDate(),schedHour,schedMin)
        var delay=d.getTime()-tmpD.getTime();
        
        var loadTimeout=setTimeout(loadCurrentDOW,delay,dow,dom,i,k);
    }
    else{
        clearTimeout(loadTimeout);
    }
}
function runMedia(dow,dom,i,k,j,base){
    /*var url= dow[i].resources[k][j]
    var ext = url.substring(url.length-3)
    if(ext=='jpg'||ext=='png'||ext=='gif'||ext=='peg)
    {
        document.pic.src = dow[i].resources[k][j]
        document.pic.style.display ='block'
        document.vid.style.display ='none'
    }
    else{
        var vid =document.getElementbyId("autoplay");
        vid.src = dow[i].resources[k][j]
        vid.style.display = 'block'
        document.pic.style.display = 'none'
        document.getElementbyId("autoplay")
    }*/
    document.pic.src = dow[i].resources[k][j];
    document.pic.style.display = 'block';
    var duration=(dow[i].duration[k]*60)/dow[i].interval[k];
    
    if(j<dow[i].resources[k].length-1)
    {
        j++;
    }
    else{
        j=0;
    }
    if(base==duration)
    {
        clearTimeout(mediaTimeout);
        document.pic.style.display = 'none';
    }
    else{
    base++;
    var mediaTimeout =setTimeout(runMedia,dow[i].interval[k]*1000,dow,dom,i,k,j,base)
    }
}

startDay();
function getImages(){
    document.pic.src = images[i];
    document.pic.style.display = 'block'
    
    if(i<=images.length -1)
    {
        i++;
    }
    else{
        i=-1;
       // i=0;
        document.pic.style.display = 'none';
        clearInterval(intervalFirst);
        getPdf2();
        //intervalSecond =setInterval(getPdf,2000);
    }
}