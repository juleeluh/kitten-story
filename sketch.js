let branch;
let books;
let bird;
let art;
let prowl;
let dog;
let awake;

let zzz;
let thinking;
let bookspng;
let birdiepink;
let birdie;
let flowerbook;
let sunbook;
let moonbook;
let starbook;
let scaredpng;

let backgroundMusic;
let dogyip;
let alarm;
let strange;
let creepy;

let state = 0;
let input, button, annotation;

function preload() {
  // images
  branch = loadImage("0_branch.png");
  books = loadImage("1_books.png");
  bird = loadImage("2_bird.jpg");
  art = loadImage("3_art.jpg");
  prowl = loadImage("4_butterfly.jpg");
  dog = loadImage("5_dog.jpg");
  awake = loadImage("6_awake.png");

  // pngs
  zzz = loadImage("zzzzz.png");
  thinking = loadImage("thinking.png");
  bookspng = loadImage("books.png");
  birdiepink = loadImage("birdiepink.png");
  birdie = loadImage("birdie.png");
  flowerbook = loadImage("flowertitle.png");
  sunbook = loadImage("suntitle.png");
  moonbook = loadImage("moontitle.png");
  starbook = loadImage("startitle.png");
  scaredpng = loadImage("scaredcat.png");

  // sounds
  backgroundMusic = loadSound("backgroundMusic.mp3");
  dogyip = loadSound("dogyip.wav");
  alarm = loadSound("alarmsound.wav");
  strange = loadSound("strangelullaby.wav");
  creepy = loadSound("creepy.mp3");
}

function setup() {
  createCanvas(800, 900);
  textFont("Comfortaa");
  textSize(15);
  textAlign(LEFT);

  // playmodes
  backgroundMusic.playMode("untilDone");
  dogyip.playMode("untilDone");
  alarm.playMode("untilDone");
  strange.playMode("untilDone");
  creepy.playMode("untilDone");

  // userinput
  input = createInput();
  input.position(50,700);
  input.changed(inputText);

  button = createButton("click");
  button.position(110,730);
  button.mousePressed(inputText);
  annotation = createElement("annotation", "what do you think?");
  annotation.position(65, 670);
}

function draw() {
  background(255);
  textSize(20);

  // 0 branch
  if (state == 0) {
    image(branch, 0, 0);
    fill(73, 56, 11);
    noStroke();
    text("sweet kitty sleeping on a branch, should we tell them a story?",340,600,300,300);
    if (mouseX >= 590 && mouseX <= 710 && mouseY >= 320 && mouseY <= 420) {
      image(thinking, 180, -10, 400, 400);
    }
    if (mouseX >= 590 && mouseX <= 710 && mouseY >= 320 && mouseY <= 420 && mouseIsPressed) {
      fill(156, 165, 92);
      image(bookspng, 295, 35, 150, 150);
      textSize(25);
      text("storytime!", 315, 200);
    }
    if (mouseX >= 230 && mouseX <= 460 && mouseY >= 340 && mouseY <= 520) {
      image(zzz, 170, 50, 300, 300);
    }
    if (mouseY >= 730) {
      image(thinking, 180, -10, 400, 400);
    }
    if (mouseY >= 730 && mouseIsPressed) {
      image(birdiepink, 295, 50, 150, 150);
    }
    if (mouseX >= 80 && mouseX <= 215 && mouseY >= 50 && mouseY <= 190){
      noFill();
      stroke(224,176,85,100);
      strokeWeight(5);
      ellipse(147,120,140);
    }
      if (mouseX >= 80 && mouseX <= 215 && mouseY >= 50 && mouseY <= 190 && mouseIsPressed) {
      for (let i = 200; i <= height*2; i += 50){
        noFill();
        stroke(224,176,85,100);
        strokeWeight(5);
        circle(145,120, i);
      }
    }
    dogyip.stop();
    alarm.stop();
    strange.stop();
    backgroundMusic.play(0,1.25,0.05,0,57);
  } 
  // 1 books
  else if (state == 1) {
    image(books,0,-80);
    fill(73, 56, 11);
    noStroke();
    text("we have four stories to choose from, which one shall we pick?",50,450,400,200);
    if (mouseX >= 140 && mouseX <= 380 && mouseY >= 535 && mouseY <= height && mouseIsPressed) {
      image(flowerbook, 100, 150);
    }
    if (mouseX >= 380 && mouseX <= 450 && mouseY >= 578 && mouseY <= height && mouseIsPressed) {
      image(sunbook, 100, 150);
    }
    if (mouseX >= 450 && mouseX <= 530 && mouseY >= 610 && mouseY <= height && mouseIsPressed) {
      image(moonbook, 100, 150);
    }
    if (mouseX >= 530 && mouseX <= 630 && mouseY >= 558 && mouseY <= height && mouseIsPressed) {
      image(starbook, 100, 150);
    }
    dogyip.stop();
    alarm.stop();
    strange.stop();
    backgroundMusic.play(0,1.5,0.05,0,57);
  }

  // 2 bird
  else if (state == 2) {
    image(bird, 0, 0);
    if (mouseX >= 280 && mouseX <= 400 && mouseY >= 365 && mouseY <= 475) {
      noFill();
      stroke(229, 125, 156);
      strokeWeight(5);
      circle(340, 420, 200);
      stroke(233, 179, 154, 100);
      circle(530, 820, 120);
      circle(120, 150, 100);
      circle(600, 300, 150);
      ellipse(130,700, 300,150)
    }
    if (mouseX >= 280 && mouseX <= 400 && mouseY >= 365 && mouseY <= 475 && mouseIsPressed) {
      for (let i = 200; i <= height; i += 50){
        noFill();
        stroke(229, 125, 156);
        strokeWeight(5);
        circle(340, 420, i);
      }
    }
    fill(73, 56, 11);
    noStroke();
    text("what a pretty little bird, I wonder if the kitty will try to catch it?",220,215,250,200);
    dogyip.stop();
    alarm.stop();
    strange.stop();
    backgroundMusic.play(0,1.75,0.05,0,57);
  }
  // 3 art
  else if (state == 3) {
    image(art, 0,-100);
    if (mouseY >= 375 && mouseY <= 650) {
      for (let y = 10; y <= height; y += 10) {
        stroke(229,125,156,150);
        strokeWeight(3);
        line(0,y,width,y);
      }
    }
    fill(73, 56, 11);
    noStroke();
    text("ummm... I feel like we shouldn't be here.",205,200);
    if (mouseIsPressed && mouseY >= 375 && mouseY <= 650) {
      creepy.play(0,1,0.05,0,3);
    }
    backgroundMusic.stop();
    alarm.stop();
    dogyip.stop();
    strange.play(0,1,0.05,0,15);
  } 
  
  // 4 prowl
  else if (state == 4) {
    image(prowl, 0, 0);
    fill(233, 179, 154);
    noStroke();
    text("the kitty seems to be on the prowl... I wonder what they've got their eyes on?",50,100,370,200);
    if (mouseX >= 220 && mouseX <= 365 && mouseY >= 485 && mouseY <= 635) {
      image(thinking, 320, -10, 500, 500);
    }
    if (mouseX >= 220 && mouseX <= 365 && mouseY >= 485 && mouseY <= 635 && mouseIsPressed) {
      image(birdiepink, 450, 30, 250, 250);
    }
    dogyip.stop();
    alarm.stop();
    strange.stop();
    backgroundMusic.play(0,1.75,0.05,0,57);
  } 
  
  // 5 dog
  else if (state == 5) {
    image(dog, 0, 0);
    image(scaredpng, -200, -400, 1000, 1200);
    noStroke();
    fill(73, 56, 11);
    text("oh no... who let the dog out?!", 30, 350);
    backgroundMusic.stop();
    alarm.stop();
    strange.stop(0);
    dogyip.play(0, 1, 2, 0, 5);
    if (mouseX >= 235 && mouseX <= 560 && mouseY >= 50 && mouseY <= 200) {
      image(thinking, -100, 350, 400, 400);
    }
    if (mouseIsPressed) {
      fill(229,125,156);
      circle(110,490,150);
      circle(700,650,150);
      circle(250,850,100);
      circle(125,50,100);
      circle(600,300,50);
      let x = random(width);
      let y = random(height);
      let r = random(100,200);
      let g = random(100,150);
      let b = random(100,150);
      let dia = random(100,300);
      let alph = random(0,150);
      noStroke();
      fill(r, g, b, alph);
      ellipse(x, y, dia);
    }
    if (mouseX >= 235 && mouseX <= 560 && mouseY >= 50 && mouseY <= 200) {
      image(thinking,-100,350,400,400);
    }
    if (mouseIsPressed) {
      textSize(30);
      fill(229,125,156);
      text("run? hide? play?",80,430,100,500);
    }
  } 
  
  // 6 awake
  else if (state == 6) {
    image(awake,0,0);
    noStroke();
    fill(73,56,11);
    text("you woke up the kitty! how can we help them go back to sleep?",100,230,300,200);
    let x = random(width);
    let y = random(height);
    let s = random(10,50);
    fill(224,176,85);
    textSize(s);
    text("meooowwww",x,y);
    if (mouseX >= 590 && mouseX <= 710 && mouseY >= 320 && mouseY <= 420) {
      image(thinking,250,-10,400, 400);
    }
    if (mouseX >= 590 && mouseX <= 710 && mouseY >= 320 && mouseY <= 420 && mouseIsPressed) {
      fill(156,165,92);
      image(bookspng,380,35,150,150);
      textSize(25);
      text("storytime!",380,200);
    }
    if (mouseX >= 80 && mouseX <= 215 && mouseY >= 50 && mouseY <= 190 && mouseIsPressed) {
      textSize(40);
      fill(233,179,154);
      text("sweet dreams",300,620);
    }
    if (mouseY >= 730) {
      image(birdie, 450,300,150,150);
    }
    backgroundMusic.stop();
    dogyip.stop();
    strange.stop();
    alarm.play(0,1,0.05,0,2);
  }
  // answer bubble
  stroke(233,179,154);
  strokeWeight(3);
  fill(224,176,85,200);
  ellipse(144,700, 250,150)
  
//   // mouse coords
//   textSize(20);
//   fill(0);
//   noStroke();
//   text(mouseX + "," + mouseY, mouseX, mouseY);

  }

// state shortcuts
function keyTyped() {
  if (key == "0") {
    state = 0;
  } else if (key == "1") {
    state = 1;
  } else if (key == "2") {
    state = 2;
  } else if (key == "3") {
    state = 3;
  } else if (key == "4") {
    state = 4;
  } else if (key == "5") {
    state = 5;
  } else if (key == "6") {
    state = 6;
  }
}

// user input to states
function inputText() {
  let text = input.value();

// universal text to states
// to state 0
  if (text == "goodnight" || text == "go to sleep" || text == "sweet dreams") {
    state = 0;
    input.value("");
  }
// to state 1
  if (text == "read" || text == "tell a story" || text == "books" || text == "bookshelf" || text == "storytime" || text == "storytime!") {
    state = 1;
    input.value("");
  }

  // state 0
  else if (state == 0 && text == "yes") {
    state = 1;
    input.value("");
  } else if (state == 0 && text == "no") {
    state = 6;
    input.value("");
  }
  // state 1
  else if (
    (state == 1 && text == "flower") || text == "flowers" || text == "first") {
    state = 2;
    input.value("");
  } else if ((state == 1 && text == "sun") || text == "second") {
    state = 3;
    input.value("");
  } else if ((state == 1 && text == "moon") || text == "third") {
    state = 4;
    input.value("");
  } else if (
    (state == 1 && text == "star") || text == "fourth" || text == "last" ) {
    state = 5;
    input.value("");
  }
  // state 2
  else if (
    (state == 2 && text == "catch") || text == "eat" || text == "chase" ) {
    state = 6;
    input.value("");
  } else if (
    (state == 2 && text == "back") || text == "go back" || text == "stories" || text == "books" || text == "no") {
    state = 1;
    input.value("");
  }
  // state 3
  else if (state == 3 && text == "go") {
    state = 2;
    input.value("");
  } else if (state == 3 && text == "stay") {
    state = 6;
    input.value("");
  }
  // state 4
  else if (
    (state == 4 && text == "bird") || text == "look" || text == "prowl") {
    state = 2;
    input.value("");
  } else if (
    (state == 4 && text == "catch") || text == "go" || text == "back" || text == "stories") {
    state = 6;
    input.value("");
  }
  // state 5
  else if (state == 5 && text == "run") {
    state = 1;
    input.value("");
  } else if (state == 5 && text == "hide") {
    state = 2;
    input.value("");
  } else if ((state == 5 && text == "stay") || text == "play") {
    state = 6;
    input.value("");
  }

  // state 6 uses universal text

  // music
  // backgroundMusic.play(0, 1, 0.05, 1, 57);
}
