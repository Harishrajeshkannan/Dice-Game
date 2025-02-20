window.onload=roll();

function roll()
{
    var val1=Math.floor(Math.random()*6)+1;
    var val2=Math.floor(Math.random()*6)+1;
    var dice1="dice"+val1+".png";
    var dice2="dice"+val2+".png";
    document.querySelector("#dice1").setAttribute("src","images/"+dice1);    
    document.querySelector("#dice2").setAttribute("src","images/"+dice2);
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
