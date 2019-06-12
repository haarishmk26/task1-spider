    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext('2d');
    var bg = new Image();
    var speed = 10,i=1,e;
    var coordinate=[];
    var length=0;
    coordinate[0]=
    { X:10,
      Y:0,
      RX:30,
      RY:70
    };
    
    var rectangle=[];
    var score=0,girlx=200,girly=400,boyx=400,boyy=400,angle=0;
    var time = new Date;
    bg.src = 'https://images2.alphacoders.com/622/thumb-1920-622005.jpg';
    //newrectangle();
    duetgame();
    document.addEventListener('keypress',decide);
    function circle(x,y,r,gendr)
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
        girlx=300-(100*Math.cos(angle));
        girly=400+(100*Math.sin(angle));
        boyx=300+(100*Math.cos(angle));
        boyy=400-(100*Math.sin(angle));
        ctx.closePath();
       }
      
      if(e.key=='d') 
      {//function anticlockwise
        angle+=(Math.PI/10);
       ctx.beginPath();
       girlx=300-(100*Math.cos(angle));
       girly=400+(100*Math.sin(angle));
       boyx=300+(100*Math.cos(angle));
       boyy=400-(100*Math.sin(angle));
       ctx.closePath();
       }
      
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
        circle(boyx,boyy,25,"blue");
        circle(girlx,girly,25,"red");
        ctx.beginPath();
        
        //RXis width  RYis height Xis xcoord of rectangle Ysimilarily
        for(var j=0;j<coordinate.length;j++)
        {
          ctx.fillRect(coordinate[j].X, coordinate[j].Y, coordinate[j].RX,coordinate[j].RY);
          coordinate[j].Y+=speed;
          if(i==140)
          {speed+=2;
          i=1;}
         if(coordinate[length].Y>300)
         {length++;
           coordinate.push({
           X:Math.floor((Math.random() * cvs.width)),
           Y:0,
          RX:Math.floor((Math.random()*80)+10),
          RY:Math.floor(Math.random() * 80) + 10
         });


         } 
         if(((boyx>coordinate[j].X)&&(boyx<coordinate[j].RX+coordinate[j].X))&&((boyy>coordinate[j].Y)&&(boyy<coordinate[j].RY+coordinate[j].Y)))
         location.reload();
         if(((girlx>coordinate[j].X)&&(girlx<coordinate[j].RX+coordinate[j].X))&&((girly>coordinate[j].Y)&&(girly<coordinate[j].RY+coordinate[j].Y)))
         location.reload();
        }
        i++;score++;
        

        ctx.fillStyle="white";
        ctx.fillText("Score"+score,10,30);
        ctx.font = "20px Arial";
        ctx.closePath();
        requestAnimationFrame(duetgame);

    }