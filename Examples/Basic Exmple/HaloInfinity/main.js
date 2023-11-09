const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameArea = document.getElementById("game-container");

const playerWidth = player.offsetWidth;
const playerHight = player.offsetHeight;
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;

let playerX = 0;
let playerY = 75;
let enemyX = Math.random() * (gameWidth - playerWidth);
let enemyY = Math.random() * (gameHeight - playerHight);

let gameOver = false;
let keys = {};

function gameLoop(){
    handlePlayerMovement();
    moveEnemyTowardsPlayer();
    updatePlayerPosition();
    updateEnemyPosition();
    checkCollisions();

    if(!gameOver) {
        requestAnimationFrame(gameLoop);
    } else {
        endGame();
    }
}

function endGame(){
    alert("Game Over");
    resetGame();
}

function resetGame(){
    playerX = 0;
    playerY = 75;
    enemyX = Math.random() * (gameWidth - playerWidth);
    enemyY = Math.random() * (gameHeight - playerHight);

    keys = {};
    player.style.opacity = 1;
    gameOver = false;
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);