function formatTime(hours, minutes, seconds) {
    return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
    };
}

// Функція для оновлення таймера
function updateTimer() {
    // Парсимо рядок часу
    let hours = parseInt(document.getElementById('hours').textContent);
    let minutes = parseInt(document.getElementById('minutes').textContent);
    let seconds = parseInt(document.getElementById('seconds').textContent);
    let hoursfixed = parseInt(document.getElementById('hours-fixed').textContent);
    let minutesfixed = parseInt(document.getElementById('minutes-fixed').textContent);
    let secondsfixed = parseInt(document.getElementById('seconds-fixed').textContent);

    // Зменшуємо час на одну секунду
    if (seconds > 0) {
        seconds--;
        secondsfixed--;
    } else {
        if (minutes > 0) {
            minutes--;
            minutesfixed--;
            secondsfixed = 59;
            secondsfixed = 59;
        } else {
            if (hours > 0) {
                hours--;
                hoursfixed--;
                minutes = 59;
                minutesfixed = 59;
                seconds = 59;
                secondsfixed = 59;
            } else {
                // Таймер завершено
                clearInterval(timerInterval);
                // alert('Час вийшов!');
                return;
            }
        }
    }

    // Оновлюємо вміст таймера
    const formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById('hours').textContent = formattedTime.hours;
    document.getElementById('minutes').textContent = formattedTime.minutes;
    document.getElementById('seconds').textContent = formattedTime.seconds;
    document.getElementById('hours-fixed').textContent = formattedTime.hours;
    document.getElementById('minutes-fixed').textContent = formattedTime.minutes;
    document.getElementById('seconds-fixed').textContent = formattedTime.seconds;
}

// Оновлюємо таймер кожну секунду
let timerInterval = setInterval(updateTimer, 1000);