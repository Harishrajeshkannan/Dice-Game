window.onload=roll();

function roll()
{
    var val1=Math.floor(Math.random()*6)+1;
    var val2=Math.floor(Math.random()*6)+1;
    if(val1==1)
    {
        document.querySelector("#dice1").setAttribute("src","images/dice1.png");
    }
    else if(val1==2)
    {
        document.querySelector("#dice1").setAttribute("src","images/dice2.png");
    }
    else if(val1==3)
    {
        document.querySelector("#dice1").setAttribute("src","images/dice3.png");
    }
    else if(val1==4)
    {
        document.querySelector("#dice1").setAttribute("src","images/dice4.png");
    }
    else if(val1==5)
    {
        document.querySelector("#dice1").setAttribute("src","images/dice5.png");
    }
    else if(val1==6)
    {
        document.querySelector("#dice1").setAttribute("src","images/dice6.png");
    }
    if(val2==1)
    {
        document.querySelector("#dice2").setAttribute("src","images/dice1.png");
    }
    else if(val2==2)
    {
        document.querySelector("#dice2").setAttribute("src","images/dice2.png");
    }
    else if(val2==3)
    {
        document.querySelector("#dice2").setAttribute("src","images/dice3.png");
    }
    else if(val2==4)
    {
        document.querySelector("#dice2").setAttribute("src","images/dice4.png");
    }
    else if(val2==5)
    {
       document.querySelector("#dice2").setAttribute("src","images/dice5.png");
    }
    else if(val2==6)
    {
        document.querySelector("#dice2").setAttribute("src","images/dice6.png");
    }
    findWinner(val1,val2);
}

function findWinner(val1,val2)
{
    if(val1>val2)
    {
        document.querySelector("h1").innerHTML="Player 1 Won!";
    }
    else if(val2>val1)
    {
        document.querySelector("h1").innerHTML="Player 2 Won!";

    }
    else
    {
        document.querySelector("h1").innerHTML="It's a Draw";
    }
}