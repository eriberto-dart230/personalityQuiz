let sunY;       
let sunRadius;  
let groundHeight; 

function setup() {
    createCanvas(500, 500);
    sunY = height; 
    sunRadius = 100; 
    groundHeight = height / 4; 
}

function draw() {

  let skyColor = lerpColor(color(0, 0, 128), color(135, 206, 250), sunY / height);
    background(skyColor);

    noStroke();
    fill(34, 139, 34);
    rect(0, height - groundHeight, width, groundHeight);

    fill(255, 204, 0); 
    ellipse(width / 2, sunY, sunRadius * 2);

    fill(1); 
    textSize(32); 
    textAlign(CENTER, CENTER); 
    text("You are a Sunny Person!", width / 2, sunY - sunRadius - 50);

  
    if (sunY > height / 2) {
        sunY -= 3; 
    }

 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

