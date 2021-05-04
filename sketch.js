var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var cars;
var car1;
var car2;
var car3;
var car4;


function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount === 4) {
  game.update(1);

  }
  if (gameState === 1) {
  game.play();
  }
}
