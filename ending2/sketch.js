let pumpkinX; 
let pumpkinY; 
let pumpkinRadius; 

function setup() {
    createCanvas(500, 500);
    pumpkinX = width / 2; 
    pumpkinY = height / 2; 
    pumpkinRadius = 150; 
    glowAlpha = 100; 
    glowDirection = 1; 
}

function draw() {
    background(1); 
fill(255); 
    textSize(32); 
    textAlign(CENTER, CENTER); 
    text("You are a Spooky Person!", width / 2, pumpkinY - pumpkinRadius - 50);
    
    let glowColor = color(255, 140, 0, glowAlpha); 
    noStroke();
    fill(glowColor);
    ellipse(pumpkinX, pumpkinY, pumpkinRadius * 2.5, pumpkinRadius * 2.5);

    fill(255, 140, 0); 
    ellipse(pumpkinX, pumpkinY, pumpkinRadius * 2, pumpkinRadius * 1.8);

    fill(0); 
    let eyeSize = pumpkinRadius / 4;
    let eyeOffsetX = pumpkinRadius / 3;
    let eyeOffsetY = pumpkinRadius / 6;

  
    triangle(
        pumpkinX - eyeOffsetX, pumpkinY - eyeOffsetY, 
        pumpkinX - eyeOffsetX - eyeSize / 2, pumpkinY - eyeOffsetY + eyeSize,
        pumpkinX - eyeOffsetX + eyeSize / 2, pumpkinY - eyeOffsetY + eyeSize
    );
    triangle(
        pumpkinX + eyeOffsetX, pumpkinY - eyeOffsetY,
        pumpkinX + eyeOffsetX - eyeSize / 2, pumpkinY - eyeOffsetY + eyeSize,
        pumpkinX + eyeOffsetX + eyeSize / 2, pumpkinY - eyeOffsetY + eyeSize
    );

    
    beginShape();
    vertex(pumpkinX - pumpkinRadius / 2, pumpkinY + pumpkinRadius / 6);
    vertex(pumpkinX - pumpkinRadius / 4, pumpkinY + pumpkinRadius / 3);
    vertex(pumpkinX, pumpkinY + pumpkinRadius / 4);
    vertex(pumpkinX + pumpkinRadius / 4, pumpkinY + pumpkinRadius / 3);
    vertex(pumpkinX + pumpkinRadius / 2, pumpkinY + pumpkinRadius / 6);
    vertex(pumpkinX + pumpkinRadius / 4, pumpkinY + pumpkinRadius / 4);
    vertex(pumpkinX, pumpkinY + pumpkinRadius / 3);
    vertex(pumpkinX - pumpkinRadius / 4, pumpkinY + pumpkinRadius / 4);
    endShape(CLOSE);

    glowAlpha += glowDirection * 2;
    if (glowAlpha > 150 || glowAlpha < 50) {
        glowDirection *= -1; 
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
