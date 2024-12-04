let ballY; 
let ballRadius = 50; 
let waterHeight; 

function setup() {
    createCanvas(800, 800);
    ballY = height + ballRadius; 
    waterHeight = height / 4; 
}

function draw() {
  
    background(135, 206, 250); 

    fill(255, 204, 0); 
    noStroke();
    ellipse(width - 100, 100, 80, 80);

    
    fill(30, 144, 255); 
    rect(0, height - waterHeight, width, waterHeight);

 
    fill(210, 195, 145); 
    rect(0, height - waterHeight - 50, width, 50);

    
    drawBeachBall(width / 2, ballY, ballRadius);

 
    fill(255); 
    textSize(32);
    textAlign(CENTER, CENTER);
    text("You are an Outgoing person!", width / 2, ballY - ballRadius - 50);

    if (ballY > height / 2) {
        ballY -= 2; 
    }
}

function drawBeachBall(x, y, radius) {
    noStroke();

    fill(255, 0, 0); 
    arc(x, y, radius * 2, radius * 2, -PI / 3, PI / 3); 
    fill(255); 
    arc(x, y, radius * 2, radius * 2, PI / 3, 2 * PI / 3); 
    fill(0, 0, 255); 
    arc(x, y, radius * 2, radius * 2, 2 * PI / 3, 4 * PI / 3); 
    fill(255, 255, 0); 
    arc(x, y, radius * 2, radius * 2, 4 * PI / 3, -PI / 3); 

  
    fill(255); 
    ellipse(x, y, radius / 3, radius / 3); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
