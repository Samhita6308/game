function isTouching(movingRectangle, fixedRectangle){
    if (movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2
        && fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2
        &&fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2
        && movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
        return true
        }
        else{
            return false
        }
}
function bounceOff(movingRectangle, fixedRectangle){
    if (movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2
        && fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2){
           movingRectangle.velocityX=movingRectangle.velocityX*(-1)
           fixedRectangle.velocityX=fixedRectangle.velocityX*(-1)
        }
        if ( fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2
            && movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
            movingRectangle.velocityY=movingRectangle.velocityY*(-1)
                fixedRectangle.velocityY=fixedRectangle.velocityY*(-1)}
}