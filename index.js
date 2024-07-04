let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10); // Atualiza a cada 10 milissegundos
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    // Salva o tempo decorrido até agora
    elapsedTime = Date.now() - startTime;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay();
}

function updateTimer() {
    const now = Date.now();
    elapsedTime = now - startTime;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000).toString().padStart(2, '0');
    const milliseconds = Math.floor((elapsedTime % 1000)).toString().padStart(3, '0');
    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
