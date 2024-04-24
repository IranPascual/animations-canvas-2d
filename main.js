const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//Obtienen las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//El canvas tiene las mismas dimenciones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

//Crea un fondo para el canvas
canvas.style.background = '#ff8';

//Crea una clase
class Circle {
    constructor(x, y, radius, color, text, speed) {
        //Propiedades
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;
        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    //Metodos   
    draw(Context) {
        //Dibuja un circulo

        Context.beginPath();

        Context.strokeStyle = this.color;
        Context.textAlign = "Center";
        Context.textBaseline = "middle";
        Context.fillTextFont = "20Px Arial";

        Context.lineWidth = "5";
        Context.fillText(this.text, this.posX, this.posY);
        Context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        Context.stroke();
        Context.closePath();

    }
    update(context) {
        //context.clearRect(0, 0, window_width, window_height);

        this.draw(context);

        //Si el circulo supera el margen derecho, entonces se mueve a la izquierda
        if ((this.posX + this.radius) > window_width) {

            this.dx = -this.dx;

        }
        //Si el circulo supera el margen izquierdo, entonces se mueve a la derecha
        if ((this.posX - this.radius) < 0) {

            this.dx = -this.dx;

        }
        //Si el circulo supera el margen superios, entonces se mueve hacia abajo
        if ((this.posY - this.radius) < 0) {

            this.dy = -this.dy;

        }
        //Si el circulo supera el margen inferior, entonces se mueve hacia arriba
        if ((this.posY + this.radius) > window_height) {

            this.dy = -this.dy;

        }
        this.posX += this.dx;
        this.posY += this.dy;
    }

}
//Instancia de la clase
/*let arrayCircle = [];

for (let i=0; i<10; i++){
    let randomX = Math.random()*window_width;
    let randomY = Math.random()*window_height;
    let randomRadius = Math.floor(Math.random()*100 + 30);

    let miCirculo = new Circle(randomX,randomY,randomRadius,'blue',i);
    //agrega el objeto al array
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);

} 
*/

let randomX = Math.random() * window_width;
let randomY = Math.random() * window_height;
let randomRadius = Math.floor(Math.random() * 100 + 30);

let randomX2 = Math.random() * window_width;
let randomY2 = Math.random() * window_height;
let randomRadius2 = Math.floor(Math.random() * 100 + 30);

let randomX3 = Math.random() * window_width;
let randomY3 = Math.random() * window_height;
let randomRadius3 = Math.floor(Math.random() * 100 + 30);

let randomX4 = Math.random() * window_width;
let randomY4 = Math.random() * window_height;
let randomRadius4 = Math.floor(Math.random() * 100 + 30);

let randomX5 = Math.random() * window_width;
let randomY5 = Math.random() * window_height;
let randomRadius5 = Math.floor(Math.random() * 100 + 30);




let miCirculo = new Circle(randomX, randomY, randomRadius, "Blue", 'TEC1', 5);
miCirculo.draw(ctx);
let miCirculo2 = new Circle(randomX2, randomY2, randomRadius2, "Green", 'TEC2', 5);
miCirculo2.draw(ctx);
let miCirculo3 = new Circle(randomX3, randomY3, randomRadius3, "Orange", 'TEC3', 5);
miCirculo3.draw(ctx);
let miCirculo4 = new Circle(randomX4, randomY4, randomRadius4, "Black", 'TEC4', 5);
miCirculo3.draw(ctx);
let miCirculo5 = new Circle(randomX5, randomY5, randomRadius5, "Purple", 'TEC5', 5);
miCirculo3.draw(ctx);

let updateCircle = function () {
    requestAnimationFrame(updateCircle);
    ctx.clearRect(0, 0, window_width, window_height);
    miCirculo.update(ctx);
    miCirculo2.update(ctx);
    miCirculo3.update(ctx); 
    miCirculo4.update(ctx);
    miCirculo5.update(ctx); // Actualiza el segundo círculo
};

updateCircle();




/*
let miCirculo2 = new Circle(270,270,50,"Black",'TEC');
*/

/*miCirculo2.draw(ctx);*/
