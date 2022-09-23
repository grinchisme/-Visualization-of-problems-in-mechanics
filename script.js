const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width =800;
canvas.height =600;

const rm = 100;
const Rb = 1.5 * rm;
const h = 0.5 * rm;

//Построим статичную картинку

// Большая окружность
// context.beginPath();
// context.arc(canvas.width / 2, canvas.height / 2, Rb, 0, Math.PI * 2);
// context.stroke();

// //O O1
// context.beginPath();
// context.moveTo(canvas.width / 2, canvas.height / 2);
// context.lineTo(canvas.width / 2 + Rb - rm, canvas.height / 2);
// context.stroke();

// //Малая окружность
// context.beginPath();
// context.arc(canvas.width / 2 + Rb - rm, canvas.height / 2, rm, 0, Math.PI * 2);
// context.stroke();

// //O1 M
// context.beginPath();
// context.moveTo(canvas.width / 2 + Rb - rm, canvas.height / 2);
// context.lineTo(canvas.width / 2 + Rb- rm, canvas.height / 2 - h);
// context.stroke();

// Приступим к ее анимированию
requestAnimationFrame(tick);
let pTimestamp = 0;
let angle = 0;
let angle2 = 0;

function tick(timestamp){
    requestAnimationFrame(tick);
    
    const diff = timestamp - pTimestamp;
    pTimestamp = timestamp;

    angle += Math.PI * 0.01;
    angle2 += Math.PI * 0.02;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "black";
    
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, Rb, 0, Math.PI * 2);
    context.stroke();

    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 2, 0, Math.PI * 2);
    context.stroke();

    context.beginPath();
    context.arc(
        (canvas.width / 2 ) + (Rb-rm) * Math.cos(angle), 
        (canvas.height / 2) + (Rb-rm) * Math.sin(angle), 
        rm,
        0,
        Math.PI * 2
    );
    context.stroke();

    context.beginPath();
    context.arc(
        (canvas.width / 2 ) + (Rb-rm) * Math.cos(angle), 
        (canvas.height / 2) + (Rb-rm) * Math.sin(angle), 
        2,
        0,
        Math.PI * 2
    );
    context.stroke();

    context.beginPath();
    context.moveTo(canvas.width / 2, canvas.height / 2);
    context.lineTo(
        (canvas.width / 2 ) + (Rb-rm) * Math.cos(angle), 
        (canvas.height / 2) + (Rb-rm) * Math.sin(angle),
    );
    context.stroke();

    context.beginPath();
    context.moveTo(
        (canvas.width / 2 ) + (Rb-rm) * Math.cos(angle), 
        (canvas.height / 2) + (Rb-rm) * Math.sin(angle),
    );
    context.lineTo(
        (canvas.width / 2 ) + (Rb-rm) * Math.cos(angle) + h* Math.cos(angle2),
        (canvas.height / 2) + (Rb-rm) * Math.sin(angle) + h* Math.sin(angle2)
    );
    context.stroke();

    context.strokeStyle = "green";

    context.beginPath();
    context.arc(
        (canvas.width / 2 ) + (Rb-rm) * Math.cos(angle) + h* Math.cos(angle2),
        (canvas.height / 2) + (Rb-rm) * Math.sin(angle) + h* Math.sin(angle2),
        2,
        0,
        Math.PI * 2
    );
    context.stroke();
}

