var ball;

function setup(){
    db=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //ref function is used to refer to the location of database value
    hball=db.ref('Ball/position');
    hball.on("value",read1,showerror1);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if (keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }
    drawSprites();
}

//Val function is used to read x and y value of database
function read1(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;

}




function showerror1(){

console.log("Not able to read the given value");


}

function writePosition(x,y){
    db.ref('Ball/position').set(    
        {
            'x':position.x+x,
            'y':position.y+y,

        }


    )

}
