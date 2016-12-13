var bubbles = [];

function setup() {
  createCanvas (600,400);
  for (var i = 0; i <15; i++){
    bubbles [i] = new Bubble();
    }
  }
  


function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
} 
 
  
  function Bubble () {
  this.x = random(2,width);
  this.y = random(2, height);
  
  this.display = function() {
        stroke(245);
        noFill(22);
        ellipse(this.x,this.y, 24, 24);
      }
      this.move = function () {
        this.x =this.x + random(-7,7);
        this.y = this.y + random(-7,7);
      }
  }

