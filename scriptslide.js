window.onload = initLinks;

var myPix = new Array("images1/1.gif","images1/2.gif","images1/3.gif");
var thisPic = 0;

function initLinks()
{
	document.getElementById("prevLink").onclick = proccessPrevious;
	document.getElementById("nextLink").onclick = proccessNext;
}
function proccessPrevious(){
	if(thisPic == 0)
	{
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}
function proccessNext()
{
	thisPic++;
	if(thisPic == myPix.length)
	{
		thisPic = 0;
	}
	
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}