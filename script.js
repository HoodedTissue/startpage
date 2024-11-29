getTime()

setInterval(getTime, 1000);

function getTime() {
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };
    
    time = new Date();
    hour = time.getHours();
    min = time.getMinutes();

    day = time.toLocaleDateString('ja-JP', options);

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    now = hour + ":" + min;
    document.getElementById("date").innerHTML = day;
    document.getElementById("clock").innerHTML = now;
}

// n = new Date().toLocaleDateString('ja-JP', options)
// console.log(n)
// document.getElementById("date").innerHTML = n;