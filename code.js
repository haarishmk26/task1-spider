 var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext('2d');
    var bg = new Image();
    var speed = 1.5,i=1,e; 
    var gameover=1; 
    var length=0;var pausekey=0;
    var gamePaused= false;
    var game;
    var p=0;
    var keys;
    document.addEventListener("keypress", movedown, false);
    
    function movedown(e) {
      keys=e.key;
  }
  


    
    //press spacebar to pause
    
    class rectangle
    {
      
     constructor()
     {
      this.X=((Math.floor((Math.random() * cvs.width))/2)+150);
     this.Y=0;
     this.RX=Math.floor((Math.random()*80)+30);
     this.RY=Math.floor(Math.random() * 80) + 30;
     }

    }
    let obstacle=[];
    obstacle[0]=new rectangle;

    class circle{
      constructor(x,y,r)
      {
        this.x=x;
        this.y=y;
        this.r=r;
      }
    }
    let ball=[2];  
    ball[0]=new circle(400,400,15);//boy
    ball[1]=new circle(200,400,15);//girl
    //red ball is girl and blue is boy 0=boy 1=girl
//class player{
//constructor(myname,myscore)
//{this.name=myname;
 // this.score=myscore;
  //this.chance=mychance;

//}





//}
//let gamers=[2];
//gamers[p]=new player(Monkey,0,1);
//gamers[p]=new player(donkey,0,1);
    
   
    
    
    var score=0,angle=0;
    var time = new Date;
    bg.src = 'https://images2.alphacoders.com/622/thumb-1920-622005.jpg';
    
    duetgame();
    //setInterval(duetgame,30);
    
    
   // document.addEventListener('keypress',decide);
    function circledraw(x,y,r,gendr)
    {
     ctx.beginPath();
     ctx.arc(x,y,r,0,Math.PI*2,true);
     ctx.closePath();
     ctx.fillStyle=gendr;
     ctx.fill();
    }
    function reload()
    { //if(!player2.chance)
      location.reload();
      //else
      //clearRect
    }
    setInterval(decide,10);
    function decide()  //decide(e)
    { 
       if(keys=='d')       //if(e.key=='d')
       {//function clockwise
        //angle-=1;
        
        angle-=(Math.PI/10);
        ctx.beginPath();
        ball[0].x=300+(100*Math.cos(angle));
        ball[0].y=400-(100*Math.sin(angle));
        ball[1].x=300-(100*Math.cos(angle));
        ball[1].y=400+(100*Math.sin(angle));
        
        ctx.closePath();
        
       keys=null;
       }
      
        if(keys=='a')   //if(e.key=='a') 
      {//function anticlockwise
        //angle+=1;
        angle+=(Math.PI/10);
       ctx.beginPath();
        ball[0].x=300+(100*Math.cos(angle));
        ball[0].y=400-(100*Math.sin(angle));
        ball[1].x=300-(100*Math.cos(angle));
        ball[1].y=400+(100*Math.sin(angle));
      
       ctx.closePath();
       
       keys=null;
      }
       

      
      
      
    }
function gamepause()
{ if (!gamePaused) 
   {
    //game=clearTimeout(duetgame);
    gamePaused = true;
   } 
 else if (gamePaused) 
   { 
    
    gamePaused = false;
    requestAnimationFrame(duetgame);
   }
  
}

        
  
    
    function duetgame()
    {  
       if(gameover)
       if(!gamePaused)
      {{ ctx.drawImage(bg,0,0,600,600);
        ctx.beginPath();
        ctx.arc(300,400,100,0,(Math.PI*2),true);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();
        circledraw(ball[0].x,ball[0].y,ball[0].r,"blue");
        circledraw(ball[1].x,ball[1].y,ball[1].r,"red");
        ctx.beginPath();
        
        //RXis width  RYis height Xis xcoord of rectangle Ysimilarily
        for(var j=0;j<obstacle.length;j++)
        {
          ctx.fillRect(obstacle[j].X, obstacle[j].Y, obstacle[j].RX,obstacle[j].RY);
          obstacle[j].Y+=speed;
          if(i==40)
          {speed+=0.2;
          i=1;}
         if(obstacle[length].Y>200)
         {length++;

          obstacle.push({
           X:((Math.floor((Math.random() * cvs.width))/2)+150),
           Y:0,
          RX:Math.floor((Math.random()*80)+30),
          RY:Math.floor(Math.random() * 80) + 30
         });
         


         } 
         if(((ball[0].x>obstacle[j].X)&&(ball[0].x<obstacle[j].RX+obstacle[j].X))&&((ball[0].y>obstacle[j].Y)&&(ball[0].y<obstacle[j].RY+obstacle[j].Y)))         
         {//location.reload();
          //document.write("GAME OVER");
          ctx.save();
          gameover=0;
          ctx.fillStyle="white";
          ctx.font = "80px Arial";
          ctx.fillText("GAME OVER",50,300);
          ctx.restore();
         
          break;
          //document.location.reload();
          //clearInterval(interval);
         }

         if(((ball[1].x>obstacle[j].X)&&(ball[1].x<obstacle[j].RX+obstacle[j].X))&&((ball[1].y>obstacle[j].Y)&&(ball[1].y<obstacle[j].RY+obstacle[j].Y)))
         {
          ctx.save();
          gameover=0;
          ctx.fillStyle="white";
          ctx.font = "80px Arial";
          ctx.fillText("GAME OVER",50,300);
          ctx.restore();
          
          break;
          
         }

        }
        i++;score++;
        

        ctx.fillStyle="white";
        ctx.fillText("Score"+score,10,30);
        ctx.font = "20px Arial";
        ctx.closePath();
        setTimeout(duetgame,10);
        //var interval=setInterval(duetgame,400);
        //requestAnimationFrame(duetgame);
      }
    }
     
    }
