const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");

canvas.width =800;
canvas.height =600;

canvas2.width =800;
canvas2.height =600;

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
let angle = 0;
let angle2 = 0;

animation({
    clear () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    },

    update () {
        angle -= Math.PI * 0.01;
        angle2 -= Math.PI * 0.02;
    },

    render () {
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
    
        //Строим систему координат
        context.beginPath();
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2, 600);
        context.stroke();
        
        context.font = "15px sans-serif";
        context.fillText("y", canvas.width / 2 - 20, 15)
    
        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        context.lineTo(800, canvas.height / 2);
        context.stroke();
    
        context.fillText("x", 800 -20 , canvas.height / 2 + 20)
    
        context.beginPath();
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2 + 5, 10);
        context.stroke();
    
        context.beginPath();
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2 - 5, 10);
        context.stroke();
    
        context.beginPath();
        context.moveTo(800, canvas.height / 2);
        context.lineTo(800 - 10, canvas.height / 2 - 5);
        context.stroke();
    
        context.beginPath();
        context.moveTo(800, canvas.height / 2);
        context.lineTo(800 -10, canvas.height / 2 + 5);
        context.stroke();
    
        //Строим точку М
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

        context2.strokeStyle = "green";

        context2.beginPath();
        context2.arc(
            (canvas.width / 2 ) + (Rb-rm) * Math.cos(angle) + h* Math.cos(angle2),
            (canvas.height / 2) + (Rb-rm) * Math.sin(angle) + h* Math.sin(angle2),
            1,
            0,
            Math.PI * 2
        );
        context2.stroke();
    }
})

function animation(obj){
    const {clear, update, render} = obj;
    let pTimestamp = 0;

    requestAnimationFrame(tick);

    function tick(timestamp){
        requestAnimationFrame(tick);
        
        const diff = timestamp - pTimestamp;
        pTimestamp = timestamp;
        const fps = 1000 / diff;
        const secondPart = diff / 1000;

        const params = {
            timestamp,
            pTimestamp,
            diff,
            fps,
            secondPart
        }

        update(params);
        clear();
        render(params);
    }
}