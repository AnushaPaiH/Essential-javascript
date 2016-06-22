addOnload(initOne);
addOnload(initTwo);
addOnload(initThree);

function addOnload(newFunction)
{
	var oldOnload = window.onload;

	if(typeof oldOnload == "function")
	{
		window.onload = function()
		{
			if(oldOnload){

				oldOnload();

			}
			newFunction();
		}

	}
	else
	{
		window.onload = newFunction;
	}
}

function initOne()
{
	document.getElementById('pageBody').style.backgroundColor = "#0000ff";
}
function initTwo()
{
	document.getElementById('pageBody').style.color = "#FF0000";
}
function initThree() {
	var allTag =document.getElementsByTagName('*');

for (var i=0;i<allTag.length;i++){
	if(allTag[i].nodeName =="H1")
	{
		allTag[i].style.border = "4px green solid";
		allTag[i].style.backgroundColor ="#FFFFFF";
		allTag[i].style.padding ="25px";
	}
}
}