 var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext('2d');
    var bg = new Image();
    var speed = 1.5,i=1,e; 
    var gameover=1; 
    var length=0;var pausekey=0;
    var gamePaused="false";
    
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
    ball[0]=new circle(400,400,25);//boy
    ball[1]=new circle(200,400,25);//girl
    //red ball is girl and blue is boy 0=boy 1=girl

    
        //function pauseGame() 
        //{pausekey++;
         // for(l=0;pausekey%2!=0;l++)
          //{
          
         // }
        //}

        //girlx=200,girly=400,boyx=400,boyy=400
   
    
    
    var score=0,angle=0;
    var time = new Date;
    bg.src = 'https://images2.alphacoders.com/622/thumb-1920-622005.jpg';
    //newrectangle();
    duetgame();
    document.addEventListener('keypress',decide);
    function circledraw(x,y,r,gendr)
    {
     ctx.beginPath();
     ctx.arc(x,y,r,0,Math.PI*2,true);
     ctx.closePath();
     ctx.fillStyle=gendr;
     ctx.fill();
    }
    function reload()
    {
      location.reload();
    }
    function decide(e)
    {if(e.key=='d')
       {//function clockwise
        //angle-=10;
        angle-=(Math.PI/10);
        ctx.beginPath();
        ball[0].x=300+(100*Math.cos(angle));
        ball[0].y=400-(100*Math.sin(angle));
        ball[1].x=300-(100*Math.cos(angle));
        ball[1].y=400+(100*Math.sin(angle));
        
        ctx.closePath();
       }
      
      if(e.key=='a') 
      {//function anticlockwise
        //angle+=10;
        angle+=(Math.PI/10);
       ctx.beginPath();
        ball[0].x=300+(100*Math.cos(angle));
        ball[0].y=400-(100*Math.sin(angle));
        ball[1].x=300-(100*Math.cos(angle));
        ball[1].y=400+(100*Math.sin(angle));
      
       ctx.closePath();
      }
       //if(e.key==' ')
      //{pauseGame();
      //}
      //if(e.key=='p')
      //{pausekey++;
      // duetgame();}

      
      
      
    }

        
  
    
    function duetgame()
    {   if(gameover)
      { ctx.drawImage(bg,0,0,600,600);
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
         // window.alert("GAME OVER");
          break;
          //document.location.reload();
          //clearInterval(interval);
         }

         if(((ball[1].x>obstacle[j].X)&&(ball[1].x<obstacle[j].RX+obstacle[j].X))&&((ball[1].y>obstacle[j].Y)&&(ball[1].y<obstacle[j].RY+obstacle[j].Y)))
         {//location.reload();
          //document.write("GAME OVER");
          ctx.save();
          gameover=0;
          ctx.fillStyle="white";
          ctx.font = "80px Arial";
          ctx.fillText("GAME OVER",50,300);
          ctx.restore();
          //window.alert("GAME OVER");
          break;
          //document.location.reload();
          //clearInterval(interval);
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
