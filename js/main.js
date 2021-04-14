class Car extends HTMLElement {
    constructor() {
        super();
        this.speed = 0;
        this.x = -9000;
        this.y = Math.random() * window.innerHeight - 100;
        this.speed = Math.random() * 7 + 3
        this.randomColor();
    }
    connectedCallback() {
    }
    disconnectedCallback() {
    }
    update() {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
        }
        if(this.x>1200){
                alert("GAME OVER, VUELVE A INTENTARLO")
            }
        let player = document.getElementById("player");
        if (Util.checkCollision(this, player)) {
            document.body.appendChild(new Crash(this));
            this.remove();
        }
        this.draw();
    }
    draw() {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`;
        
    }
    randomColor() {
        let color = Math.random() * 360;
        this.style.filter = "hue-rotate(" + color + "deg)";
    }
}
window.customElements.define("car-component", Car);
class Crash extends HTMLElement {
    constructor(c) {
        super();
        this.style.transform = c.style.transform;
        this.style.filter = c.style.filter;    
            puntos=puntos+1;
            document.getElementById("score").innerHTML='Score: '+puntos;
        }       
    }   

    let puntos = 0;
    for(var i=0; i<0;i++){
        puntos++;
    }

window.customElements.define("crash-component", Crash);
class Player extends HTMLElement {
    constructor() {
        super();
        this.id = "player";
        this.x = window.innerWidth / 2- 50;
        this.y = window.innerHeight - 100;
        this.callback = (e) => this.onKeyDown(e);
        window.addEventListener("keydown", this.callback);
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case 37: // se pulsa sobre la flecha izquierda
            this.x -= 50;    break;
            case 38: // se pulsa sobre flecha hacia arriba
            this.y -= 50;     break;
            case 39: // se pulsa sobre la flecha derecha
            this.x += 50;    break;
            case 40: // se pulsa sobre la flecha hacia abajo
            this.y += 50;
        }
        this.draw();
    }
    draw() {
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
window.customElements.define("player-component", Player);
class Game {
    constructor() {
        this.counter = 0;
        document.body.appendChild(new Player());
        requestAnimationFrame(() => this.gameLoop());
    }
    gameLoop() {
        this.counter++;
        if (this.counter % 100 == 0) {
            document.body.appendChild(new Car());
        }
        let cars = document.getElementsByTagName("car-component");
        for (let c of cars) {
            c.update();
        }
        requestAnimationFrame(() => this.gameLoop());
        }
    }

window.addEventListener("load", function () {
    new Game();
});
class Util {
    static checkCollision(c, p) {
        let car = c.getBoundingClientRect();
        let player = p.getBoundingClientRect();
        return (car.left < player.right &&
            car.right > player.left &&
            car.top < player.bottom &&
            car.bottom > player.top);            
        }       
    }

//script para que carga el modal
		 
	 $(document).ready(function()
	 {
		$("#Modal").modal("show");
	 });




