window.onload = newCard;

function newCard(){
	if(document.getElementById){
	for (var i=0; i<24 ;i++){
		setSquare(i);
		
	}
}
else
{
	alert("This browser does not support thios script");
}
}

function setSquare(thisSquare)
{
var currSquare = "square" + thisSquare; 	
var colSpace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
var newNum = (colSpace[thisSquare] *15 ) + Math.floor(Math.random() * 15) + 1;
document.getElementById(currSquare). innerHTML = newNum;
}


