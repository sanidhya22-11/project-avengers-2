var canvas= new fabric.Canvas('my_avengers_canvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";

function upload_groot()
{
fabric.Image.fromURL("player.png",function(Img){
player_object = Img; player_object.scaleToWidth(150); player_object.scaleToHeight(140);
player_object.set({ top:player_y, left:player_x });
canvas.add(player_object)
});
}
function new_image(get_image) { fabric.Image.fromURL(get_image, function(Img) { draw_image_object = Img; draw_image_object.scaleToWidth(draw_image_width);
draw_image_object.scaleToHeight(draw_image_height);
draw_image_object.set({ top:player_y, left:player_x });
canvas.add(draw_image_object);
}); }

if(keyPressed == '38') { up(); console.log("up"); }
if(keyPressed == '40') { down(); console.log("down"); }
if(keyPressed == '37') { left(); console.log("left"); }
if(keyPressed == '39') { right(); console.log("right"); }
if(keyPressed == '66') {  new_image('spiderman_body.png');  console.log("b"); }
if(keyPressed == '71') {  new_image('spiderman_face.png'); console.log("f"); }
if(keyPressed == '76') {  new_image('spiderman_left_hand.png'); console.log("l"); }
if(keyPressed == '84') {  new_image('spiderman_right_hand.png'); console.log("r"); }
if(keyPressed == '71') {  new_image('spiderman_legs.png'); console.log("h"); }
if(keyPressed == '82') {  new_image('thor_face.png'); console.log("p"); }
if(keyPressed == '89') {  new_image('thor_left_hand.png'); console.log("y"); }
if(keyPressed == '68') {  new_image('thor_right_hand.png'); console.log("d"); }
if(keyPressed == '85') {  new_image('ironman_body_image'); console.log("u"); }
if(keyPressed == '78') {  new_image('ironman_face.png'); console.log("n"); }
if(keyPressed == '67') {  new_image('ironman_left_hand.png'); console.log("c"); }
if(keyPressed == '66') {  new_image('ironman_legs.png');  console.log("b"); }
if(keyPressed == '71') {  new_image('iromman_right_hand.png'); console.log("j"); }
if(keyPressed == '85') {  new_image('hulk_face.png'); console.log("u"); }
if(keyPressed == '78') {  new_image('hulk_left_hand.png'); console.log("n"); }
if(keyPressed == '67') {  new_image('hulk_right_hand.png'); console.log("c"); }
if(keyPressed == '66') {  new_image('hulkd_body.png');  console.log("b"); }
if(keyPressed == '71') {  new_image('captain_america_left_hand.png'); console.log("l"); }

function down()
{
    if (player_y <= 500)
    {
    player_y= player_y+block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("When down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}


    function right()
    {
        if (player_y <= 850)
        {
        player_x= player_x+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
        }
    }

        function left()
        {
            if (player_y >= 0)
            {
            player_x= player_x-block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
            }
        }

