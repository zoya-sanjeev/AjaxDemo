function showTime(){
    const date = new Date();
    return date.getHours()+"Hrs: " + date.getMinutes() + "Mins: " + date.getSeconds() + "Secs";
}