let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime(){
    const date = new Date();
    return date.getHours()+"Hrs: " + date.getMinutes() + "Mins: " + date.getSeconds() + "Secs";
}

function makeAJAXCall(methodType, url, callback, async = true, data= null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(methodType + " State changed Called at:"+showTime()+" Ready State: " + xhr.readyState+" Status: " + xhr.status );
    }
    xhr.open(methodType,url,async);
    xhr.send();
    console.log(methodType+" request sent to server at:"+ showTime());
}

const getURL ="http://127.0.0.1:3000/employees/1";
function getUserDetails(data){
    console.log("Get user data at:"+ showTime() + " data:" + data);
}

makeAJAXCall("GET", getURL, getUserDetails, true);
console.log("Made Get AJAX Call to Server at:"+ showTime());