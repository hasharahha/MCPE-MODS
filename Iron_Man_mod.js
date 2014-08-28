//made by HASHARAHHA14 A.k.A Jacob Bondley
//version 2.0
var active =false;
ModPE.setItem(499,"ghast_tear",0,"circuits");
Item.addShapedRecipe(499,64,0,["   "," b "," s "],["b",266,0,"s",280,0])
ModPE.setItem(500,"record_11",0,"Mask");
Item.addShapedRecipe(500,1,0,["aaa","a a","   "],["a",499,0])
ModPE.setItem(501,"record_13",0,"Chest Plate");
Item.addShapedRecipe(501,1,0,["a a","aaa","aaa"],["a",499,0])
ModPE.setItem(502,"record_strad",0,"iron ,man leggings")
Item.addShapedRecipe(502,1,0,["aaa","a a","a a"],["a",499,0])
ModPE.setItem(503,"record_ward",0," rocket boots");
Item.addShapedRecipe(503,1,0,["   ","a a","a a"],["a",499,0])
ModPE.setItem(504,"boat",0," activate  rocket boots");
Item.addShapedRecipe(504,1,0,[" a ","a a","   "],["a",499,0])
ModPE.setItem(505,"lead",0,"Circuit sword");
Item.addShapedRecipe(505,1,0,[" a "," a "," s "],["a",499,0,"s",280,0])
ModPE.setItem(506,"fireworks",0,"Blaster");
Item.addShapedRecipe(506,1,0,[" c ","cdc"," c "],["c",499,0,"d",264,0])
clientMessage(ChatColor.BLUE+"MOD MADE BY HASHARAHHA14")

function useItem(x,y,z,itemId,blocId,side){
if(itemId=="506"&&active==true){
explode(x ,y ,z ,5)
}
if(itemId=="500"){
Player.setArmorSlot(0,500,1)
Player.addItemInventory(500,-1,0)
}
if(itemId=="501"){
Player.setArmorSlot(1,501,1)
Player.addItemInventory(501,-1,0)
}
if(itemId=="502"){
Player.setArmorSlot(2,502,1)
Player.addItemInventory(502,-1,0)
}
if(itemId=="503"){
Player.setArmorSlot(3,503,1)
Player.addItemInventory(503,-1,0)
}

}
function attackHook(attacker, victim)
{
if(Player.getCarriedItem()==0&&active==true){
Entity.setFireTicks(victim,7)
}
if(Player.getCarriedItem()==505&&active==true){
Entity.setHealth(victim,1)
Entity.setFireTicks(victim,25)
Entity.setHealth(2)

}
 }
function modTick()
{
if(Player.getArmorSlot(0)+Player.getArmorSlot(1)+Player.getArmorSlot(2)+Player.getArmorSlot(3)=="2006"){
Entity.setMobSkin(Player.getEntity(),"armor/iron_man.png")
active = true;
} else if (Player.getArmorSlot(0)+Player.getArmorSlot(1)+Player.getArmorSlot(2)+Player.getArmorSlot(3)==null){
Entity.setMobSkin(Player.getEntity(),"mob/char.png")
active =fasle;
}
else if(Player.getArmorSlot(0)+Player.getArmorSlot(1)+Player.getArmorSlot(2)+Player.getArmorSlot(3)==0){
Entity.setMobSkin(Player.getEntity(),"mob/char.png")
active =false;
}
if(Player.getCarriedItem()==504&&active==true){
setVelY(getPlayerEnt(),0.05)
}
if(active==true){
Player.setHealth(35)
}
}



