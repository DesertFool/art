function setup() {
    createCanvas(1500, 950);
    background(0, 0, 0);
    noStroke();
    
 }

 function draw(){
    ellipse(mouseX, mouseY, 20, 20);
 }

 function mouseClicked(){
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    fill(r, g, b);
 }
