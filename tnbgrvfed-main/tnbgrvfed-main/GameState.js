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
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  playState(){
    form.hide()
    Player.getPlayerInfo();
    if(allPlayers !== undefined){ 
    background(rgb(198,135,103))
    text("[insert game explanation]",displayWidth/2, displayHeight/2)
    var button = createButton('Move On')
    button.position(displayWidth/2, displayHeight/2+200)
    button.mousePressed(()=>{
      gameState = 2
    })
  }
  }
  if(gameState === 2){
    background(114, 33, 46)
    pasta = createSprite(displayWidth/4, displayHeight/2)
    tacos = createSprite(displayWidth/3, displayHeight/2)
    soup = createSprite(displayWidth/2, displayHeight/2)
    pizza = createSprite(displayWidth/2+150, displayHeight/2)
    drawSprites()
  }
}