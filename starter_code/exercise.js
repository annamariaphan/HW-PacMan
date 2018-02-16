window.onload = function () {
    timer();
};

var exercise = {};

exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or - 

exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
};

var x = 0;
var dx = 20;
var counter = 0;

function timer(){
    updatePosition();
    chooseImage();
    checkWallCollision();
    counter++;
    if(counter < 20){
        setTimeout(timer, 1000);
        console.log("timer went off");
    }
};

exercise.updatePosition = function updatePosition(){
    exercise.pos.x += exercise.increment;
    // += means x=x+20 but in shorthand
    exercise.img1.style.left = x + 'px';
    // px is pixels
    // this is css style property
    // change this to left = excercise.pos.x + 'px';
};

exercise.checkWallCollision = function checkWallCollision() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width
    if ((x > 600) || (x < 0)) {
        dx = -dx;
        exercise.increment *= -1;
        // *= means multiply by -1
    }
        x += dx;
        // += means x=x+20 but in shorthand
    /*if (x < 0) {
        dx = -dx;
        exercise.increment = 20;
    }
        x += dx;
    */
};

exercise.chooseImage = function chooseImage(){
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            // this means his mouth is shut but it needs to be open
            // == comparison
            // === it's safer to do this when comparing
            // 1 = mouth shut
            // 0 = mouth open
            exercise.img1.src = 'PacMan1.png';
            // mouth is open
            exercise.flag = 0;
            // we need a binary value (open or shut)
        } else {
            exercise.img1.src = 'PacMan2.png';
            // mouth is shut
            exercise.flag = 1;
        }
    }
    if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = 'PacMan3.png';
            // mouth is open
            exercise.flag = 0;
        } else {
            exercise.img1.src = 'PacMan4.png';
            // mouth is shut
            exercise.flag = 1;
        }
    }
};


