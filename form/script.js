window.onload = initForm;
window.onunload = function() {};

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0;
	document.getElementById("newLocation").onchange = jumpPage;

}
function jumpPage() {
	


	var newLoc = document.getElementById("newLocation");
	var newPage = this.options[this.selectedIndex].value;

	if (newPage != "")
	{
		window.location = newPage;
	}
}