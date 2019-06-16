var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext('2d');
    var bg = new Image();
    var speed = 1.5,i=1,e;
    var obstacle=[];//an array of class obstacle 
    var length=0;var pausekey=0;
    var gamePaused="false";
    //press spacebar to pause
    obstacle[0]=             
    { X:Math.floor((Math.random() * cvs.width)),
      Y:0,
      RX:Math.floor((Math.random()*80)+30),
      RY:Math.floor(Math.random() * 80) + 30
      
    };//this is a class declaration using object
    //comments are the changes tried and it is for explaination
    //class obstacle
    //{
      
     //constructor()
     //{
      //this.X=Math.floor((Math.random() * cvs.width));
     //this.Y=0;
     //this.RX=Math.floor((Math.random()*80)+30);
     //this.RY=Math.floor(Math.random() * 80) + 30;
     //}

    //}
    var circle=[2];//red ball is girl and blue is boy 0=boy 1=girl
    circle[0]={
      x:400,
      y:400

    };
    circle[1]={
      x:200,
      y:400
      
    };
    
        //function pauseGame() 
        //{pausekey++;
         // for(l=0;pausekey%2!=0;l++)
          //{
          
         // }
        //}


   
    
    var rectangle=[];
    var score=0,girlx=200,girly=400,boyx=400,boyy=400,angle=0;
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
    function decide(e)
    {if(e.key=='a')
       {//function clockwise
        angle-=(Math.PI/10);
        ctx.beginPath();
        circle[0].x=300+(100*Math.cos(angle));
        circle[0].y=400-(100*Math.sin(angle));
        circle[1].x=300-(100*Math.cos(angle));
        circle[1].y=400+(100*Math.sin(angle));
        //girlx=300-(100*Math.cos(angle));
        //girly=400+(100*Math.sin(angle));
        //boyx=300+(100*Math.cos(angle));
        //boyy=400-(100*Math.sin(angle));
        ctx.closePath();
       }
      
      if(e.key=='d') 
      {//function anticlockwise
        angle+=(Math.PI/10);
       ctx.beginPath();
       circle[0].x=300+(100*Math.cos(angle));
        circle[0].y=400-(100*Math.sin(angle));
        circle[1].x=300-(100*Math.cos(angle));
        circle[1].y=400+(100*Math.sin(angle));
       //girlx=300-(100*Math.cos(angle));
       //girly=400+(100*Math.sin(angle));
       //boyx=300+(100*Math.cos(angle));
       //boyy=400-(100*Math.sin(angle));
       ctx.closePath();
      }
       //if(e.key==' ')
      //{pauseGame();
      //}
      //if(e.key=='p')
      //{pausekey++;
      // duetgame();}

      
      
      
    }
    //function newrectangle()
      //{ctx.beginPath();
       //coordinate.X[0]=10;
       //coordinate.RX[0]=30;
       //coordinate.RY[0]=70;
       //ctx.closePath();
      //}
        
  
    
    function duetgame()
    {   
        ctx.drawImage(bg,0,0,600,600);
        ctx.beginPath();
        ctx.arc(300,400,100,0,(Math.PI*2),true);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();
        circledraw(circle[0].x,circle[0].y,25,"blue");
        circledraw(circle[1].x,circle[1].y,25,"red");
        ctx.beginPath();
        
        //RXis width  RYis height Xis xcoord of rectangle Ysimilarily
        for(var j=0;j<obstacle.length;j++)
        {
          ctx.fillRect(obstacle[j].X, obstacle[j].Y, obstacle[j].RX,obstacle[j].RY);
          obstacle[j].Y+=speed;
          if(i==40)
          {speed+=0.2;
          i=1;}
         if(obstacle[length].Y>300)
         {length++;

          obstacle.push({
           X:Math.floor((Math.random() * cvs.width)),
           Y:0,
          RX:Math.floor((Math.random()*80)+30),
          RY:Math.floor(Math.random() * 80) + 30
         });
         


         } 
         if(((circle[0].x>obstacle[j].X)&&(circle[0].x<obstacle[j].RX+obstacle[j].X))&&((circle[0].y>obstacle[j].Y)&&(circle[0].y<obstacle[j].RY+obstacle[j].Y)))         
         location.reload();
         if(((circle[1].x>obstacle[j].X)&&(circle[1].x<obstacle[j].RX+obstacle[j].X))&&((circle[1].y>obstacle[j].Y)&&(circle[1].y<obstacle[j].RY+obstacle[j].Y)))
         location.reload();
        }
        i++;score++;
        

        ctx.fillStyle="white";
        ctx.fillText("Score"+score,10,30);
        ctx.font = "20px Arial";
        ctx.closePath();
        requestAnimationFrame(duetgame);
      

    }
