// digital clock
	function updateClock(){
		var currentTime = new Date();

		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
		var currentSeconds = currentTime.getSeconds();

		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

		var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours ==0 ) ? 12 : currentHours;

		var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
// change colors odd & even
			if ((currentMinutes % 2) == 1){
			document.getElementById("main").style.background = "black";
			document.getElementById("clock").style.color = "white";
		} else { 
			document.getElementById("main").style.background = "white";
			document.getElementById("clock").style.color = "black";
		}
		document.getElementById("clock").firstChild.nodeValue = currentTimeString;
	}
// animated menu
	$(document).ready(function(){
		$("#nav").mouseenter(function(){
			$("#nav").animate({backgroundColor: "blue"},"slow");
		})
	})