var x="hide";
var c,b,pg;
var textbox,bu;
var ty=100;

function setup() {
  createCanvas(800,400);
  

   c=createElement("h1");
   c.position(900,50);
   c.html("cows");
   b=createElement("h1");
   b.position(1000,50);
   b.html("bulls");
   pg=createElement("h1");
   pg.position(700,50);
   pg.html("Player guess");

  textbox=createInput("");
  textbox.position(400,200);

  bu=createButton("Submit");
  bu.position(400,250);

  bu.mousePressed(enter);
}



function enter(){

  var cn=0,bn=0,f=textbox.value();
  if(f.charAt(0)==x.charAt(0)){
    bn++;
  }
  if(f.charAt(1)==x.charAt(1)){
    bn++;
  }
  if(f.charAt(2)==x.charAt(2)){
    bn++;
  }
  if(f.charAt(3)==x.charAt(3)){
    bn++;
  }

    if(f.charAt(0)==x.charAt(1)||f.charAt(0)==x.charAt(2)||f.charAt(0)==x.charAt(3)){
      cn++;
    }
    if(f.charAt(1)==x.charAt(0)||f.charAt(1)==x.charAt(2)||f.charAt(1)==x.charAt(3)){
      cn++;
    }
    if(f.charAt(2)==x.charAt(1)||f.charAt(2)==x.charAt(0)||f.charAt(2)==x.charAt(3)){
      cn++;
    }
    if(f.charAt(3)==x.charAt(1)||f.charAt(3)==x.charAt(2)||f.charAt(3)==x.charAt(0)){
      cn++;
    }
    
    z=createElement("pre");
    z.html(f+"                        "+cn+"                    "+bn);
    z.position(700,ty);

    ty=ty+50;
}