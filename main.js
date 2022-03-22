let BGImage, rainstick, craneRotate, craneRaise, vibrating, flubber, shoe, hands, fan, weaving;

function preload(){
    BGImage = loadImage('assets/220322.png'); 

    rainstick = createVideo(['assets/duchampWheel.mov']);
    rainstick.hide();
    craneRotate = createVideo(['assets/crane_rotate.mov']);
    craneRotate.hide();
    craneRaise = createVideo(['assets/crane_Raise.mov']);
    craneRaise.hide();
    vibrating = createVideo(['assets/vibrating.mp4']);
    vibrating.hide();
    flubber = createVideo(['assets/flubber.mp4']);
    flubber.hide();
    shoe = createVideo(['assets/shoe.mp4']);
    shoe.hide();
    hands = createVideo(['assets/hands.mp4']);
    hands.hide();
    fan = createVideo(['assets/fan.mp4']);
    fan.hide();
    weaving = createVideo(['assets/weaving.mp4']);
    weaving.hide();
}


function setup(){
    createCanvas(15796/3, 11624/3);
    image(BGImage, 0, 0, 15796/3, 11624/3);
    vidActivate(rainstick, 1150, 875, 270, 175);
    vidActivate(craneRotate, 30, 850, 170, 300);
    vidActivate(craneRaise, 120, 1010, 170, 300);
    vidActivate(vibrating, 2475, 1370, 300, 275);
    vidActivate(flubber, 2977, 324, 300, 300);
    vidActivate(shoe, 2785, 1110, 300, 275);
    vidActivate(hands, 3230, 130, 380, 160);
    vidActivate(fan, 2427, 527, 350, 350);
    vidActivate(weaving, 2310, 10, 300, 350);

} 

function vidActivate(vidName, vidX, vidY, vidWidth, vidHeight){
    vidName.hide();
    vidName.volume(0);
    vidName.position(vidX, vidY);
    vidName.size(vidWidth, vidHeight);
    vidName.loop();
    vidName.show();
}

function draw(){
    print(mouseX, mouseY);
}
