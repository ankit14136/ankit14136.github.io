const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// unit
const box = 32;

//load images
const ground = new Image();
ground.src = "ground.png";
const foodpic = new Image();
foodpic.src = "food.png";

// create snake
let snake = [];
snake[0] = {
	x: 9*box,
	y: 10*box
}

let food = {
	x : Math.floor(Math.random()*17+1) * box,
	y : Math.floor(Math.random()*15+3) * box
}

let score = 0;
let D;

// snake controls

document.addEventListener("keydown",direction);
function direction (e) {
	if(e.keyCode == 37 && D!="RIGHT") {
			D = "LEFT";
	} else if(e.keyCode == 38 && D!="DOWN") {
			D = "UP";
	} else if(e.keyCode == 39 && D!="LEFT") {
			D = "RIGHT";
	} else if(e.keyCode == 40 && D!="UP") {
			D = "DOWN";
	}
}

var collision = (head,array) => {
	for(let i=0;i< array.length; i++) {
		if(head.x == array[i].x && head.y ==array[i].y)
		{
			return true;
		}
	}
	return false;
}




// now draw everything to canvas

var draw = () => {
	c.drawImage(ground,0,0);

	for( let i=0;i< snake.length ;i++)
	{
		c.fillStyle = ( i==0) ? "green" : "white";
		c.fillRect(snake[i].x,snake[i].y,box,box);

		c.strokeStyle = "red";
		c.strokeRect(snake[i].x,snake[i].y,box,box);
	}
	c.drawImage(foodpic, food.x,food.y);

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	

	if(D == "LEFT") snakeX -= box;
	if(D == "UP") snakeY -= box;
	if(D == "RIGHT") snakeX += box;
	if(D == "DOWN") snakeY += box;

	if(snakeX == food.x && snakeY == food.y)
	{
		score++;
		food = {
					x : Math.floor(Math.random()*17+1) * box,
					y : Math.floor(Math.random()*15+3) * box
				}
	} else {
		snake.pop();
	}

	// game over

	

	let newHead = {
		x : snakeX,
		y : snakeY
	}

	if(snakeX < box || snakeX > 17*box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
		clearInterval(game);
	}

	snake.unshift(newHead);

	c.fillStyle = "white";
	c.font = "45px Changa one";
	c.fillText(score,2*box,1.6*box);
}

let game = setInterval(draw,100);


