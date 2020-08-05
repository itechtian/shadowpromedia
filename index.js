function openNav() {	
	document.getElementById("navbar").style.width="250px";	
	document.getElementById("navbar").style.visibility="visible";
	

	
}

	
function closeNav() {
	document.getElementById("navbar").style.width="0";
	document.getElementById("navbar").style.visibility="hidden";
	
}	

s
function openevents(){

	document.getElementById("dropdown-events").style.visibility="visible";
}

function openport(){

	document.getElementById("dropdown-portfolio").style.visibility="visible";
}

function closenav(){

	document.getElementById("dropdown-portfolio").style.visibility="hidden";
	document.getElementById("dropdown-events").style.visibility="hidden";
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.visibility = "visible";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

window.onscroll = function(){myfunction()};

function myfunction(){
	
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
		
		document.getElementsById("about").className = "slideup";
	}
	
}
