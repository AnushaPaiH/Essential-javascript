window.onload = choosePic;
 var myPic= new Array("images1/1.gif","images1/2.gif","images1/3.gif");

 function choosePic()
 {
 	randomNumber= Math.floor((Math.random() * myPic.length));
 	document.getElementById('myPicture').src = myPic[randomNumber];
 }