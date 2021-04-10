function game(){
    gameLoop();
}
var loops = 0;
function gameLoop() {
    alert("Game Over Bitch!");
    setTimeout(gameLoop, 3000);
}
