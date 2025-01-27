const endDate = new Date("24 Jan, 2025 16:48:00").getTime();
const startDate = new Date().getTime();

// setinterval : used to do a task in an interval
let x = setInterval(function(){

    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // Calculate days,hrs,mins,secs
    // 1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecInMillis = (1000);

    const days = Math.floor((distancePending)/(oneDayInMillis));
    const hrs = Math.floor((distancePending)%(oneDayInMillis)/(oneHourInMillis));
    const mins = Math.floor((distancePending)%(oneHourInMillis)/(oneMinInMillis));
    const secs = Math.floor((distancePending)%(oneMinInMillis)/(oneSecInMillis));

    // show these values in website
    document.getElementById("days").innerHTML = days +  "\n" + " Days";
    document.getElementById("hrs").innerHTML = hrs + "\n" + " Hours";
    document.getElementById("mins").innerHTML = mins + "\n" + " Mins";
    document.getElementById("secs").innerHTML = secs + "\n" + " Secs";


    // progress bar
    const totalDistance = endDate - startDate;
    const prercentageDistance = (distanceCovered/totalDistance) * 100;

    document.getElementById("progBar").style.width = prercentageDistance + "%";


    // condition to check if the time goes neagtive
    if(distancePending<0){
        clearInterval(x);
        document.getElementById("wrapper").innerHTML = "Expired";
    }

},1000);