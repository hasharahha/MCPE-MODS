var active = false;
var Present = [];
clientMessage("Mod made by HASHARAHHA14")
function newLevel(){
print("ore Rain Ready")
Present =true;
}
function leaveGame()
{
Present =false;

}
function modTick(){

if(active==true&&Present==true){
Level.dropItem(getPlayerX(),getPlayerY()+3,getPlayerZ(),8,264,15)
Level.dropItem(getPlayerX(),getPlayerY()+3,getPlayerZ(),9,266,8)
Level.dropItem(getPlayerX(),getPlayerY()+8,getPlayerZ(),10,265,12)
 }


}
function procCmd(command){
var JAB = command.split(" ");
if(JAB[0]=="start"){
clientMessage("Diamond rain active ")
clientMessage("Leave world to apply")
active =true;
}
}
