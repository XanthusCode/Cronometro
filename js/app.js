const time = document.getElementById('time');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let timer;
let horas  = 0;
let minutos = 0;
let segundos = 0;

function cronometro(){
    segundos++;
    if (segundos === 60){
        segundos = 0;
        minutos++;
        if (minutos === 60){
            minutos = 0;
            horas++;
        }
    }
    time.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

play.addEventListener('click', () => {
    timer = setInterval(cronometro,100);
});

pause.addEventListener('click', () => {
    clearInterval(timer);
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    horas  = 0;
    minutos = 0;
    segundos = 0;
    time.textContent = '00:00:00';
});
