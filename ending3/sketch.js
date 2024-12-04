let snowflakes = []; 
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(20, 50, 100); 

    for (let i = snowflakes.length - 1; i >= 0; i--) {
        snowflakes[i].update();
        snowflakes[i].display();

        if (snowflakes[i].y > height) {
            snowflakes.splice(i, 1);
        }
    }

    if (frameCount % 5 === 0) {
        snowflakes.push(new Snowflake());
    }

    
    drawSnowman(width / 2, height - 200);

    fill(255); 
    textSize(32);
    textAlign(CENTER, TOP); 
    text("You are a chill person!", width / 2, 20); 
}

function drawSnowman(x, y) {
    noStroke();

   
    fill(255);
    ellipse(x, y, 150, 150); 
    ellipse(x, y - 100, 100, 100); 
    ellipse(x, y - 170, 70, 70); 

    fill(0);
    ellipse(x - 15, y - 180, 10, 10);
    ellipse(x + 15, y - 180, 10, 10);

    fill(255, 165, 0);
    triangle(x, y - 170, x + 30, y - 175, x, y - 165);

    fill(0);
    for (let i = -15; i <= 15; i += 10) {
        ellipse(x + i, y - 150, 5, 5);
    }

    
    fill(0);
    rect(x - 35, y - 200, 70, 10); 
    rect(x - 20, y - 240, 40, 40); 

    fill(200, 0, 0);
    rect(x - 40, y - 145, 80, 10); 
    rect(x - 10, y - 140, 10, 40); 

    stroke(139, 69, 19); 
    strokeWeight(5);
    line(x - 50, y - 120, x - 100, y - 150); 
    line(x + 50, y - 120, x + 100, y - 150); 
}

class Snowflake {
    constructor() {
        this.x = random(width);
        this.y = random(-50, -10);
        this.size = random(5, 10);
        this.speed = random(1, 3);
    }

    update() {
        this.y += this.speed;
    }

    display() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
