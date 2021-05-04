class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
      car1 = createSprite(120,100,50,70);
      car2 = createSprite(120,100,50,70);
      car3 = createSprite(120,100,50,70);
      car4 = createSprite(120,100,50,70);
      cars=[car1,car2,car3,car4]
    }
  }
  play() {
    form.hide();
    //text ("Game Start", 120,100);
    Player.getPlayerInfo();
    console.log(allPlayers);
    if (allPlayers !== undefined) {
      var index = 0;
      var x=0;
      var y=0;
       var displayPosition = 130;
       for (var plr in allPlayers) {
        index = index + 1 ;
        x = x+50;
        y = displayHeight - allPlayers[plr].distance-50;
        cars[index-1].x = x; 
        cars[index-1].y = y;



       if (plr === "player" + player.index) {
        fill ("red");
       }
       else {
         fill ("black");
       }
       displayPosition += 20;
       text (allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);


    }
       
         
       
       
  }
  if  (keyIsDown(UP_ARROW)&& player.index !== null) {
player.distance += 50;
player.update();

  }
  drawSprites ();
}
}
