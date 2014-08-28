/*
JBcompanyrules.inc®
single player commands
This mod was made by hasharaha A.K.A
Jacob Bondley
this mod is subject to our terms
visit our website :
http://jbcompanyrules.blogspot.com
send mod ideas for next update
hasharahha@gmail.com
*/
var Server ="http://jbcompanyrules.blogspot.com/robots.txt"
var homeX=[]
var homeY=[]
var homeZ=[]
var Line = []
var version =["V0.6"]
var M =false;
var memory =500;
var split = [(" ")]
var chat = [(ChatColor.GREEN+"[SPC-V0.6]")]
clientMessage([chat]+split+ChatColor.WHITE+"Mod made by hasharahha")
function procCmd(command){
var SPC = command.split(" ");
if(SPC[0]=="give"){
addItemInventory(parseInt(SPC[1]),parseInt(SPC[2]),parseInt(SPC[3]))
clientMessage([chat]+split+ChatColor.WHITE+"Spawned"+split+parseInt(SPC[2])+split+"of"+split+(SPC[1]))
}
if(SPC[0]=="gamemode"){
Level.setGameMode(parseInt(SPC[1]))
clientMessage([chat]+split+ChatColor.WHITE+"Gamemode  set to "+parseInt(SPC[1]))
}
//explode
if(SPC[0]=="explode"){
explode(getPlayerX(),getPlayerY(),getPlayerZ(),parseInt(SPC[1]))
Player.setHealth(25)
}
if(SPC[0]=="settime"){
Level.setTime(parseInt(SPC[1]))
clientMessage([chat]+split+ChatColor.WHITE+"time set to"+split+parseInt(SPC[1]))
}
//setItem
if(SPC[0]=="setItem"){
Entity.setCarriedItem(getPlayerEnt(),parseInt(SPC[1]),1,0)
clientMessage([chat]+split+parseInt(SPC[1])+split+"set")
}
//help command
if(SPC=="help"){
clientMessage([chat]+ChatColor.WHITE+" type /help 1 or /help 2")
}
if(SPC[0]=="help"&&SPC[1]=="1"){
clientMessage(" ")
clientMessage([chat]+split+ChatColor.WHITE+"help list 1 of 2 !!!!!!!!!!!!!!!!")
clientMessage(ChatColor.YELLOW+"/gamemode"+split+ChatColor.WHITE+"<gamemodeID>")
clientMessage(ChatColor.YELLOW+"/settime"+split+ChatColor.WHITE+"<time>")
clientMessage(ChatColor.YELLOW+"/give"+split+ChatColor.WHITE+"<itemId>"+split+"<amount>"+split+"<Damage>")
clientMessage(ChatColor.YELLOW+"/tp"+split+ChatColor.WHITE+"<x>"+" <y>"+" <z>")
clientMessage(ChatColor.YELLOW+"/coords"+split+ChatColor.WHITE+"GIVES player their cords")
clientMessage(ChatColor.YELLOW+"/sethealth "+ChatColor.WHITE+"<hearts set to>")
clientMessage(ChatColor.YELLOW+"/effect"+ChatColor.WHITE+" <effectId> <speed>")
clientMessage(ChatColor.YELLOW+"/explode"+ChatColor.WHITE+" <radius>")
clientMessage(ChatColor.YELLOW+"/bounce"+ChatColor.WHITE+" <bounce value>")
clientMessage(ChatColor.YELLOW+"/clone"+ChatColor.WHITE+" <clones Name>  <heath>")
clientMessage(ChatColor.YELLOW+"/sethome"+ChatColor.WHITE+" sets players home")
clientMessage(ChatColor.YELLOW+"/reset"+ChatColor.WHITE+" RESET MOD")

}
if(SPC[0]=="help"&&SPC[1]=="2"){
clientMessage(" ")
clientMessage([chat]+split+ChatColor.WHITE+"help list 2 of 2!!!!!!!!!!!!!!!")
clientMessage(ChatColor.YELLOW+"/home"+ChatColor.WHITE+" tps player to their house")
clientMessage(ChatColor.YELLOW+"/SPC"+ChatColor.WHITE+" info about updates and more..")
clientMessage(ChatColor.YELLOW+"/kill"+ChatColor.WHITE+" kills players")
clientMessage(ChatColor.YELLOW+"/setspeed"+ChatColor.WHITE+" <speed ID>")
clientMessage(ChatColor.YELLOW+"/setItem"+ChatColor.WHITE+" <Item >")
clientMessage(ChatColor.YELLOW+"/config"+ChatColor.WHITE+" edit single player commands")
}
//add
if(SPC[0]=="add"){
Player.addItemCreativeInv(parseInt(SPC[1]),parseInt(SPC[2]),parseInt(SPC[3]))
print("Item:"+(SPC[1])+" "+"added")
}
//script
if(SPC=="config"){
clientMessage([chat]+"access denied")
}
if(SPC[0]=="config"&&SPC[1]=="op"){
try{
print((SPC[2]))
}catch(e){
print(" error"+e)
}
chat = [ChatColor.YELLOW+"[M+]"+ChatColor.DARK_BLUE+(SPC[2])]
version =["error,modified,restart mod"]
M=true;
}
//reset setup
if(SPC=="reset"){
ModPE.resetFov();
ModPE.setGameSpeed(17)
homeX=[]
homeY=[]
homeZ=[]
}
//game speed
if(SPC[0]=="setspeed"){
ModPE.setGameSpeed(parseInt(SPC[1]))
}
//tp configure
if(SPC[0]=="tp"){
setPosition(getPlayerEnt(),parseInt(SPC[1]),parseInt(SPC[2]),parseInt(SPC[3]))
print("tp used")
}
if(SPC[0]=="effect"){
ModPE.setFov(parseInt(SPC[1]))
ModPE.setGameSpeed(parseInt(SPC[2]))
}
if(SPC=="coords"){
clientMessage([chat]+split+ChatColor.WHITE+"coords:"+split+"x:"+Math.round(getPlayerX())+" y:"+Math.round(getPlayerY())+" z:"+Math.round(getPlayerZ()))
}
if(SPC[0]=="sethealth"){
Player.setHealth(parseInt(SPC[1]))
clientMessage([chat]+split+ChatColor.WHITE+"health set to:"+parseInt(SPC[1]))
}
if(SPC[0]=="bounce"){
setVelY(getPlayerEnt(),parseInt(SPC[1]))
}
if(SPC[0]=="clone"){
clone = Level.spawnMob(getPlayerX(),getPlayerY(),getPlayerZ(),11,"mob/char.png")
Entity.setRenderType(clone,3)
Entity.setNameTag(clone,(SPC[1]));
Entity.setHealth(clone,parseInt(SPC[2]))
Entity.setCarriedItem(clone,264,1,0)
}
if(SPC[0]=="spawn"&&SPC[1]=="m"){
Mob = Level.spawnMob(getPlayerX(),getPlayerY(),getPlayerZ(),38,"mob/char.png")
Entity.setRenderType(Mob,3);
Entity.setNameTag(Mob,(SPC[2]));
Entity.setHealth(Mob,parseInt(SPC[3]));
}
//end
if(SPC=="info"&&M==true){
clientMessage([chat]+ChatColor.WHITE+"World dir:"+Level.getWorldDir())
clientMessage([chat]+ChatColor.WHITE+" TIME:"+Level.getTime())
clientMessage([chat]+ChatColor.WHITE+"GAMEMODE:"+Level.getGameMode())
clientMessage([chat]+ChatColor.WHITE+"Name of world:"+Level.getWorldName())
}
if(SPC=="sethome"){
homeX= getPlayerX()
homeY=getPlayerY()+2
homeZ=getPlayerZ()
clientMessage([chat]+ChatColor.WHITE+" Home set To:"+" x:"+Math.round(getPlayerX())+" y;"+Math.round(getPlayerY())+" z:"+Math.round(getPlayerZ())+" ")
}
if(SPC=="home"){
setPosition(getPlayerEnt(),homeX,homeY,homeZ)
clientMessage([chat]+ChatColor.WHITE+" player tp to Home")
}
if(SPC[0]=="save"){
Line =[(SPC[1])+" "+(SPC[2])+" "+(SPC[3])]
}
if(SPC=="read"){
clientMessage([chat]+"data:"+ChatColor.WHITE+[Line])
}
if(SPC[0]=="SPC"){
clientMessage([chat]+ChatColor.DARK_RED+" information")
clientMessage(" "+ChatColor.WHITE+"Mod made by Jacob Bondley.")
clientMessage("This mod was made possible by")
clientMessage("JBcompanyrules.inc")
clientMessage("Special shout out to arjay07 for showing")
clientMessage("me how to make mods")
clientMessage("And I Will be adding more features soon!")
clientMessage("version:"+" "+version)
clientMessage(ChatColor.YELLOW+"NEXT UPDATE:")
clientMessage(ChatColor.RED+"unknown"+" "+" testing..")
}
if(SPC=="erase"&&M==true){
memory=0;
}
if(SPC=="kill"){
Player.setHealth(0)
}
if(SPC=="update"&&M==true){
clientMessage(ChatColor.YELLOW+"No updates available")
print("updating...")
}else if(SPC==undefined){
clientMessage([chat]+" "+ChatColor.WHITE+"error unknown command:/"+(SPC[0])+(SPC[1]))
}
}

function newLevel()
{
print(" generating terrain")
clientMessage([chat]+split+ChatColor.WHITE+" Type /help for list of commands")
Stone=1;


}
function modTick()
{
var X = Math.round(getPlayerX())
var Y = Math.round(getPlayerY())
var Z = Math.round(getPlayerZ())
var DAT = Math.floor((Math.random()*4)+1);
if(DAT=="1"){
ModPE.showTipMessage("X:"+X+" Y:"+Y+" Z:"+Z)
}
if(DAT=="2"){
ModPE.showTipMessage("X:"+X+" Y:"+Y+" Z:"+Z)
} 
if(DAT=="3"){
ModPE.showTipMessage("X:"+X+" Y:"+Y+" Z:"+Z)
 }
if(DAT=="4"){
}
}
//Made by HASHARAHHA14





