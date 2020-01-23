//custom variable
let pointX;
let mouseDist;

function setup() {
  //create the canvas element
  createCanvas(900, 500);
  pointX = 600;
  rectMode(CENTER);
  print(pointX)
}


function draw() {
  background(168, 50, 153)
  mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
  print(mouseDist);
  smooth();
    //line style and point style
    strokeWeight(50);
    point(pointX, 300);
    strokeWeight(mouseDist);
    //line expects two x, y coordinates
    //then connects the coordinates
    line(mouseX, mouseY, pmouseX, pmouseY);

    //ellipse style
    noStroke();
    fill(190, 55, 12, 50);
    stroke(random(255), random(225), random(225));
    //ellipse exoects an x, y coordinates
    //and width height
    ellipse(width/2, height/2, 200, 100);
    4

    //rect style
    strokeWeight(mouseDist);
    fill(30, 120, 45);
    rect(width/3, height/3, mouseX, 100)

    //triangle style
    noFill();
    strokeWeight(30);
    stroke(120, 150, 150);
    //three sets of x,y
    triangle(800, 12, 850, 200, 700, 300);

    if(mouseIsPressed){
      //if mouse if pressed reset to 200
      pointX = 200;
    } else {
      //if mouse release set to 600
      pointX = 600;
    }

}
