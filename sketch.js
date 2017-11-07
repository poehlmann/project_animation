// let circle = {
//   x:0,
//   y:100,
//   diameter:50
// };
// let col = 0;
// let tope = false;
let bubbles =[];

function setup() {
  createCanvas(600,400);
  for(let i=0;i<5;i++) {
      let x = random(width);
      let y = random(height);
      let r = random(10, 50);
      let b = new Bubble(x, y, r);
      bubbles.push(b);
  }
}

function mousePressed(){
  for(let i=0;i<bubbles.length;i++) {
      bubbles[i].clicked(mouseX,mouseY);
  }
}

class Bubble{
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness=0;
  }

  clicked(px,py){
    let d = dist(px,py,this.x,this.y);
    if(d < this.r) {
        //console.log("click");
        this.brightness=255;
    }
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show(){
    stroke(255);
    strokeWeight(4);
    fill(this.brightness,125);
    ellipse(this.x,this.y,this.r *2);
  }
}

function draw() {
  // col = map(circle.x , 0 , 600 , 0 , 255);
  // background(col);
  // fill(250,200,200);
  //   ellipse(circle.x,circle.y,circle.diameter,circle.diameter);
  //   if (circle.x===600)
  //     tope=true;
  //   else if (circle.x===0)
  //     tope=false;
  //   if(tope)
  //       circle.x = circle.x - 1;
  //   else
  //       circle.x = circle.x +1;
    background(0);
    // bubbles.move();
    // bubbles.show();
    for(let i=0;i<bubbles.length;i++){
      bubbles[i].move();
      bubbles[i].show();
    }
}