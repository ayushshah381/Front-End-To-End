// given the time in some format, update the remaining time to that day's time in human readable format
// and it must update the remaining time every second in the timer object  


const timer = { hours: 0, minutes: 0, seconds: 0 };

function getTimer(targetTimeStr, timerObj) {
    const targetDate = new Date(targetTimeStr);

    function updateTime() {
        const now = new Date();
        let diff = targetDate - now;

        if (diff <= 0) {
            timerObj.hours = 0;
            timerObj.minutes = 0;
            timerObj.seconds = 0;
            clearInterval(intervalId);
            console.log('Countdown finished!');
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerObj.hours = hours;
        timerObj.minutes = minutes;
        timerObj.seconds = seconds;

        console.log(`Remaining Time: ${hours}h ${minutes}m ${seconds}s`);
    }

    updateTime(); // Run immediately to update once
    const intervalId = setInterval(updateTime, 1000);

    return timerObj;
}

// Sample test case
getTimer('2026-06-02T00:00:00.000-07:00', timer);
