window.onload = initDate;

function initDate() 
{
	var dayName = new Array("sunday","monday","tuesday",
		"wednesday","thursday","friday","saturday");

	var monName= new Array("january","february","march","april","may","june","july",
		"august","september","october","november","december");

	var now = new Date();
	var thisMon = now.getMonth() + 1;

	var dtString = "Today is " + dayName[now.getDay()] +
	          ", and the date can be written as : " + "<br>" ;
	
	dtString += monName[now.getMonth()] +" " + now.getDate() + "," +
	          			now.getFullYear() + "<br>" ; 
	dtString += now.getDate() + "-" + thisMon + "-" +
	          			now.getFullYear();
	
	document.getElementById("dtField").innerHTML = dtString;

}

