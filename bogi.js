class Bogi {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction:0.4,
          restituition:0.4
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("images/coach.png")
      this.width = width;
      this.height = height;
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };