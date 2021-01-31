var bgI ,bg
var b1,b2 ,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b16
var b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b30,b31,b32,b33,b34,b35
var b36,b37,b38,b39,b40,b41,b42,b43,b45,b46,b47,b48,b49,b50,b51,b52,b53
var player ,playerI
var c1I,c2I,c3I,c1,c2,c3,borderGroup,cGroup;
var food,foodGroup

var toggle;
function preload(){
    bgI=loadImage("images/bg.png")
    playerI=loadImage("images/em.png")
    c1I=loadImage("images/c1.png")
    c2I=loadImage("images/c2.png")
    c3I=loadImage("images/c3.png")


}
function setup(){
    createCanvas(1200,800)
    bg=createSprite(600,400)
    bg.addImage(bgI);
    
    leftWall= createGroup();
    rightWall=createGroup();
    bottomWall= createGroup();
    downWall= createGroup();
    upWall= createGroup();

    toggle=0;
    //walls
    b1=createSprite(600,738,1000,10);;
    rightWall.add(b1);
    b2=createSprite(600,77,1000,10);
    rightWall.add(b2);
    b3=createSprite(120,180,10,200);
    leftWall.add(b3);
    b4=createSprite(1090,180,10,200)
    b5=createSprite(600,100,20,120)
    b6=createSprite(120,600,10,250);
    leftWall.add(b6)
    b7=createSprite(1090,600,20,250)
    b8=createSprite(600,640,20,90)
    b9=createSprite(600,250,20,90)
    b10=createSprite(600,510,20,80)
    b11=createSprite(600,600,250,25)
    b12=createSprite(600,220,250,25)
    b13=createSprite(600,480,250,25)
    b14=createSprite(600,420,250,20)
    b15=createSprite(480,380,20,95)
    b16=createSprite(720,380,20,95)
    b17=createSprite(200,410,200,20)
    b18=createSprite(200,280,200,10);
    rightWall.add(b18)
    b19=createSprite(200,345,200,20)
    b20=createSprite(200,479,200,10)
    rightWall.add(b20)
    b21=createSprite(1000,479,200,20)
    b22=createSprite(1000,350,200,20)
    b23=createSprite(1000,280,200,20)
    b24=createSprite(1000,410,200,20)
    b25=createSprite(350,670,310,10);
    rightWall.add(b25);
    b26=createSprite(850,670,310,20)
    b27=createSprite(390,640,15,83)
    upWall.add(b27)
    b28=createSprite(815,640,15,83)
    b29=createSprite(445,280,135,20)
    b30=createSprite(765,280,135,20)
    b31=createSprite(250,215,115,20)
    b32=createSprite(950,215,110,20)
    b33=createSprite(950,145,115,20)
    b34=createSprite(760,140,125,20)
    b35=createSprite(450,140,130,20)
    b36=createSprite(250,145,115,20)
    b37=createSprite(950,540,100,20)
    b38=createSprite(759,540,140,20)
    b39=createSprite(250,540,100,20)
    b40=createSprite(445,540,140,20)
    b41=createSprite(1050,610,100,20)
    b42=createSprite(150,610,100,20)
    rightWall.add(b42)
    b43=createSprite(920,590,15,60)
    b44=createSprite(285,590,15,60)
    downWall.add(b44)
    b45=createSprite(285,300,15,60)
    b46=createSprite(285,450,15,60)
    b47=createSprite(820,450,15,75)
    b48=createSprite(385,290,15,160)
    b49=createSprite(810,290,15,160)
    b50=createSprite(910,450,15,60)
    b51=createSprite(910,310,15,60)
    b52=createSprite(500,340,70,30)
    b53=createSprite(700,340,70,30)
    b54=createSprite(385,450,15,75)


    //player
    player=createSprite(1050,680)
    player.addImage(playerI)
    player.scale=0.03

    //virus

    c1=createSprite(200,550,10,10);
    c1.addImage(c1I);
    c1.scale=0.05;
    c1.velocityX=-3;

    


    
    //c1.debug=true;
    //c1.setCollider("rectangle",30,30,1500,40);

    c2=createSprite(540,380,10,10);
    c2.addImage(c2I);
    c2.scale=(0.1);

    c3=createSprite(650,380,10,10);
    c3.addImage(c3I);
    c3.scale=(0.1);

    foodGroup=createGroup();

    cGroup = createGroup();
    cGroup.add(c1);
    cGroup.add(c2);
    cGroup.add(c3);
    
    //c1.velocityY=-6;

    
    

   

    for(var i=160; i<550 ; i+=20){
        food1= createSprite(i,105,5,5);
        food1.shapeColor= "gold";
    }

    for(var i=650; i<1050 ; i+=20){
        food2= createSprite(i,105,5,5);
        food2.shapeColor= "gold";
    }

    for(var i=160; i<1050 ; i+=20){
        food3= createSprite(i,187,5,5);
        food3.shapeColor= "gold";
    }

    for(var i=150; i<550 ; i+=20){
        food4= createSprite(i,510,5,5);
        food4.shapeColor= "gold";
    }
    for(var i=650; i<1050 ; i+=20){
        food5= createSprite(i,510,5,5);
        food5.shapeColor= "gold";
    }

    
    for(var i=160; i<1050 ; i+=20){
        food6= createSprite(i,705,5,5);
        food6.shapeColor= "gold";
    }
    
     
    for(var i=127; i<620 ; i+=20){
        food7= createSprite(335,i,5,5);
        food7.shapeColor= "gold";
    }

    for(var i=400; i<800 ; i+=20){
        food8= createSprite(i,580,5,5);
        food8.shapeColor= "gold";
    }
    
    for(var i=415; i<800 ; i+=20){
        food9= createSprite(i,450,5,5);
        food9.shapeColor= "gold";
    }

    for(var i=127; i<620 ; i+=20){
        food10= createSprite(870,i,5,5);
        food10.shapeColor= "gold";
    }

    for(var i=440; i<800 ; i+=20){
        food11= createSprite(i,315,5,5);
        food11.shapeColor= "gold";
    }

    for(var i=330; i<430 ; i+=20){
        food11= createSprite(450,i,5,5);
        food11.shapeColor= "gold";
    }

    for(var i=340; i<430 ; i+=20){
        food12= createSprite(760,i,5,5);
        food12.shapeColor= "gold";
    }
    
    for(var i=110; i<250 ; i+=20){
        food13= createSprite(160,i,5,5);
        food13.shapeColor= "gold";
    }
    
    for(var i=110; i<250 ; i+=20){
        food14= createSprite(1060,i,5,5);
        food14.shapeColor= "gold";
    }
    
    for(var i=150; i<300 ; i+=20){
        food15= createSprite(i,250,5,5);
        food15.shapeColor= "gold";
    }

    for(var i=900; i<1050 ; i+=20){
        food16= createSprite(i,250,5,5);
        food16.shapeColor= "gold";
    }

    for(var i=900; i<1050 ; i+=20){
        food17= createSprite(i,635,5,5);
        food17.shapeColor= "gold";
    }

    for(var i=150; i<350 ; i+=20){
        food18= createSprite(i,635,5,5);
        food18.shapeColor= "gold";
    }

    for(var i=100; i<350 ; i+=20){
        food19= createSprite(i,380,5,5);
        food19.shapeColor= "gold";
    }

    for(var i=900; i<1100 ; i+=20){
        food20= createSprite(i,380,5,5);
        food20.shapeColor= "gold";
    }
//see
    for(var i=250; i<300 ; i+=20){
        food21= createSprite(550,i,5,5);
        food21.shapeColor= "gold";
    }

    for(var i=625; i<700 ; i+=20){
        food22= createSprite(550,i,5,5);
        food22.shapeColor= "gold";
    }

    for(var i=625; i<700 ; i+=20){
        food23= createSprite(650,i,5,5);
        food23.shapeColor= "gold";
    }

    for(var i=210; i<260 ; i+=20){
        food24= createSprite(450,i,5,5);
        food24.shapeColor= "gold";
    }

    for(var i=210; i<260 ; i+=20){
        food25= createSprite(750,i,5,5);
        food25.shapeColor= "gold";
    }

    for(var i=250; i<300 ; i+=20){
        food26= createSprite(650,i,5,5);
        food26.shapeColor= "gold";
    }

    for(var i=100; i<200 ; i+=20){
        food27= createSprite(550,i,5,5);
        food27.shapeColor= "gold";
    }

    
    for(var i=100; i<200 ; i+=20){
        food28= createSprite(650,i,5,5);
        food28.shapeColor= "gold";
    }
    
    for(var i=350; i<450 ; i+=20){
        food29= createSprite(i,380,5,5);
        food29.shapeColor= "gold";
    }

    for(var i=790; i<890 ; i+=20){
        food30= createSprite(i,380,5,5);
        food30.shapeColor= "gold";
    }

    for(var i=525; i<600 ; i+=20){
        food32= createSprite(1050,i,5,5);
        food32.shapeColor= "gold";
    }

    for(var i=525; i<600 ; i+=20){
        food33= createSprite(150,i,5,5);
        food33.shapeColor= "gold";
    }

    for(var i=625; i<700 ; i+=20){
        food34= createSprite(150,i,5,5);
        food34.shapeColor= "gold";
    }

    for(var i=625; i<700 ; i+=20){
        food35= createSprite(1050,i,5,5);
        food35.shapeColor= "gold";
    }

    for(var i=600; i<660 ; i+=20){
        food36= createSprite(750,i,5,5);
        food36.shapeColor= "gold";
    }

    for(var i=600; i<660 ; i+=20){
        food37= createSprite(450,i,5,5);
        food37.shapeColor= "gold";
    }

    
    for(var i=500; i<570 ; i+=20){
        food38= createSprite(550,i,5,5);
        food38.shapeColor= "gold";
    }

    for(var i=500; i<570 ; i+=20){
        food39= createSprite(650,i,5,5);
        food39.shapeColor= "gold";
    }

    borderGroup=createGroup();

    c1Side1= createSprite(c1.x-25,c1.y,10,30)
    c1Side1.shapeColor="red";

    
    //c1Side1.velocityX=3;
    c1Side2= createSprite(c1.x+25,c1.y,10,30)
    c1Side2.shapeColor="red";
   // c1Side2.velocityX=3;
    c1Side3= createSprite(c1.x,c1.y-15,30,10)
    c1Side3.shapeColor="red";
    //c1Side3.velocityX=3;
    c1Side4= createSprite(c1.x,c1.y+15,30,10)
    c1Side4.shapeColor="red";
    //c1Side4.velocityX=3;
    
    

}
function draw(){
    background(0);

    c1Side1.x= c1.x-25;
    c1Side1.y= c1.y;

    c1Side2.x= c1.x+25;
    c1Side2.y= c1.y;

    c1Side3.x= c1.x;
    c1Side3.y= c1.y-15;

    c1Side4.x= c1.x;
    c1Side4.y= c1.y+15;
    
    makeGroup();

    c1Side1.bounceOff(borderGroup);
    c1Side1.bounceOff(borderGroup);
    c1Side1.bounceOff(borderGroup);
    c1Side1.bounceOff(borderGroup);


    

    

    // if(c1Side1.isTouching(downWall) || c1Side4.isTouching(downWall) ){
    //     c1.velocityY=3;
    //     c1.velocityX =0
    // }

    // if(c1Side1.isTouching(upWall) || c1Side2.isTouching(upWall) ){
    //     c1.velocityY=-3;
    //     c1.velocityX =0
    // }
    // // if(c1Side2.isTouching(borderGroup)){
    // //     c1.velocityY=-3;
    // //     c1.velocityX =0
    // // }
    // if(c1Side3.isTouching(leftWall)){
    //     c1.velocityY=3;
    //     c1.velocityX =0
    // }
    // if(c1Side4.isTouching(rightWall)){
    //     c1.velocityY=0;
    //     c1.velocityX =3;
    // }

    

    if(foodGroup.isTouching(player)){
        foodGroup.setVisibleEach(false)
    }
    


 
    

    

    
   borderGroup.setVisibleEach(true);

   
   
    //movements of player
    movePlayer()
    drawSprites()
}




function movePlayer(){

    if(keyDown(RIGHT_ARROW)){
        
        player.velocityX=3;
        player.velocityY=0;

    }
    if(keyDown(LEFT_ARROW)){
        
        player.velocityX=-3
        player.velocityY=0
    }
    if(keyDown(UP_ARROW)){
        
        player.velocityY=-3
        player.velocityX=0
    }
    if(keyDown(DOWN_ARROW)){
        
        player.velocityY=3
        player.velocityX=0
    }

}


function makeGroup(){
    borderGroup.add(b1);
    borderGroup.add(b2);
    borderGroup.add(b3);
    borderGroup.add(b4);
    borderGroup.add(b5);
    borderGroup.add(b6);
    borderGroup.add(b7);
    borderGroup.add(b8);
    borderGroup.add(b9);
    borderGroup.add(b10);
    borderGroup.add(b11);
    borderGroup.add(b12);
    borderGroup.add(b13);
    borderGroup.add(b14);
    borderGroup.add(b15);
    borderGroup.add(b16);
    borderGroup.add(b17);
    borderGroup.add(b18);
    borderGroup.add(b19);
    borderGroup.add(b20);
    borderGroup.add(b21);
    borderGroup.add(b22);
    borderGroup.add(b23);
    borderGroup.add(b24);
    borderGroup.add(b25);
    borderGroup.add(b26);
    borderGroup.add(b27);
    borderGroup.add(b28);
    borderGroup.add(b29);
    borderGroup.add(b30);
    borderGroup.add(b31);
    borderGroup.add(b32);
    borderGroup.add(b33);
    borderGroup.add(b34);
    borderGroup.add(b35);
    borderGroup.add(b36);
    borderGroup.add(b37);
    borderGroup.add(b38);
    borderGroup.add(b39);
    borderGroup.add(b40);
    borderGroup.add(b41);
    borderGroup.add(b42);
    borderGroup.add(b43);
    borderGroup.add(b44);
    borderGroup.add(b45);
    borderGroup.add(b46);
    borderGroup.add(b47);
    borderGroup.add(b48);
    borderGroup.add(b49);
    borderGroup.add(b50);
    borderGroup.add(b51);
    borderGroup.add(b52);
    borderGroup.add(b53);
    borderGroup.add(b54);

    player.bounceOff(borderGroup);
    c1.bounceOff(borderGroup);
    c2.bounceOff(borderGroup);
    c3.bounceOff(borderGroup);

    foodGroup.add(food1);
    foodGroup.add(food2);
    foodGroup.add(food3);
    foodGroup.add(food4);
    foodGroup.add(food5);
    foodGroup.add(food6);
    foodGroup.add(food7);
    foodGroup.add(food8);
    foodGroup.add(food9);
    foodGroup.add(food10);
    foodGroup.add(food11);
    foodGroup.add(food12);
    foodGroup.add(food13);
    foodGroup.add(food14);
    foodGroup.add(food15);
    foodGroup.add(food16);
    foodGroup.add(food17);
    foodGroup.add(food18);
    foodGroup.add(food19);
    foodGroup.add(food20);
    foodGroup.add(food21);
    foodGroup.add(food22);
    foodGroup.add(food23);
    foodGroup.add(food24);
    foodGroup.add(food25);
    foodGroup.add(food26);
    foodGroup.add(food27);
    foodGroup.add(food28);
    foodGroup.add(food30);
    //foodGroup.add(food31);
    foodGroup.add(food32);
    foodGroup.add(food33);
    foodGroup.add(food34);
    foodGroup.add(food35);
    foodGroup.add(food36);
    foodGroup.add(food37);
    foodGroup.add(food38);
    foodGroup.add(food39);

}


// function cCountrols(){
//     // if(c1Side1.isTouching(borderGroup ) ||c1Side2.isTouching(borderGroup )){
//     //        c1.setVelocity(0,3)

//     // }


//     // if(c1Side3.isTouching(borderGroup ) || c1Side4.isTouching(borderGroup )){
//     //     c1.setVelocity(3,0)

//     // }

//    if(frameCount %30===0){
//        toggle =1
//    }
//    if(frameCount %93===0){
//     toggle=0
//    }

   

   



// }
