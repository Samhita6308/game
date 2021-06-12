var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var pasta
var tacos
var soup
var pizza

var form, player, game;

function setup(){
  canvas = createCanvas(displayWidth, displayHeight)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(247, 202, 196)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState===1){
    clear()
    game.playState()
  }
 
}