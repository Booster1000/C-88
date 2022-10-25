var Canvas = new fabric.Canvas("MinecraftCanvas");

PlayerX = 30;
PlayerY = 30;

Block_width=30;
Block_height=30;

Player_Object = "";
Block_Object = "";
 
function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        Player_Object = img;
        Player_Object.scaleToHeight(150);
        Player_Object.scaleToWidth(150);

        Player_Object.set({
            top:PlayerY,
            left:PlayerX
        });
        Canvas.add(Player_Object);
    });
}

function block_update(Image1){
    fabric.Image.fromURL(Image1, function(img){
        Block_Object = img;
        Block_Object.scaleToHeight(Block_height);
        Block_Object.scaleToWidth(Block_width);

        Block_Object.set({
            top:PlayerY,
            left:PlayerX
        });
        Canvas.add(Block_Object);
    });
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypressed = e.keyCode;
if(keypressed == "38"){
    up();
}

if(keypressed == "40"){
    down();
}

if(keypressed == "37"){
    left();
}

if(keypressed == "39"){
    right();
}

if(keypressed == "84"){
    block_update("trunk.jpg");
}

if(keypressed == "68"){
    block_update("dark_green.png");
}

if(keypressed == "76"){
    block_update("light_green.png");
}

if(keypressed == "71"){
    block_update("ground.png");
}

if(keypressed == "87"){
    block_update("wall.jpg");
}

if(keypressed == "89"){
    block_update("yellow_wall.png");
}

if(keypressed == "82"){
    block_update("roof.jpg");
}

if(keypressed == "67"){
    block_update("cloud.jpg");
}

if(keypressed == "85"){
    block_update("unique.png");
}

if(e.shiftKey == true && keypressed == 73){
    Block_height = Block_height + 10;
    Block_width = Block_width + 10;

    document.getElementById("height").innerHTML = Block_height;
    document.getElementById("width").innerHTML = Block_width;
}

if(e.shiftKey == true && keypressed == 69){
    Block_height = Block_height - 10;
    Block_width = Block_width - 10;

    document.getElementById("height").innerHTML = Block_height;
    document.getElementById("width").innerHTML = Block_width;
}
}

function up(){
    if(PlayerY >= 0){
        PlayerY = PlayerY - Block_height;
        Canvas.remove(Player_Object);
        player_update();
    }
}
function down(){
    if(PlayerY <= 900){
        PlayerY = PlayerY + Block_height;
        Canvas.remove(Player_Object);
        player_update();
    }
}
function left(){
    if(PlayerX >= 0){
        PlayerX = PlayerX - Block_width;
        Canvas.remove(Player_Object);
        player_update();
    }
}
function right(){
    if(PlayerX <= 1400){
        PlayerX = PlayerX + Block_width;
        Canvas.remove(Player_Object);
        player_update();
    }
}
