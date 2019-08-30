console.log('My script is working')

$( function() {

	// Menu with drop down options
	$("#menu").menu();

	// Auto Complete tags
	var availableTags = [
	"Minecraft", "Grand Theft Auto", "Prey", "Teraria", "Forza", "Fable", "Left 4 Dead",
	];

	// Auto Complete input
	$("#tags").autocomplete({
		source: availableTags
	});

	// Accordion
	$(function(){
		$("#accordion").accordion({
			collapsible: true
		});
	});

	// Selectable that goes inside of the accordion section Single Player
	$("#selectableSp").selectable();

	// Selectable that goes insdoe of the accordion section Multiplayer
	$("#selectableMp").selectable();

	// Spinner relating to hours spent gaming increasing in half hour increments
	$("#spinner").spinner({
		step: 0.5,
		numberFormat: "n"
	});

	// Submit button -------
	// onclick function to activate progress bar
	$("#subBtn").click(function(){
		// When button is clicked, reveals progress bar
		$("#progressbar").show();
		$(function(){
			// Where the progress bar starts
			$("#progressbar").progressbar({
				value: 0
			});
		});
	});

	// Progress Bar ---------------
	// First attempt 

	// var progressbar = $("#progressbar"), 
	// progressLabel = $(".progress-label");

	// progressbar .progressbar({
	// 	value: false,
	// 	// Displays loading value by percentage on bar
	// 	change: function(){
	// 		progressLabel.text(progressbar .progressbar("value") + "%");
	// 	},
	// 	// Shows completed message on loading bar
	// 	complete: function(){
	// 		progressLabel.text("Complete!")
	// 	}
	// });

	// function progress(){
	// 	var val = progressbar .progressbar("value") || 0;
	// 	progressbar.progressbar("value", val + 2);
	// 	if (val < 99){
	// 		setTimeout(progress, 80);
	// 	}
	// }
	// setTimeout(progress, 2000);

	// Second attempt
	var pGress = setInterval(function(){
		var pVal = $("#progressbar").progressbar("option", "value");
		// Controls what variable the bar increases by
		var pCnt = !isNaN(pVal) ? (pVal + 1 ) : 1;
		// If the bar is still loading, show incrase in number
		if (pCnt > 100) {
			clearInterval(pGress);
		} else { 
			$("#progressbar").progressbar({
				value:pCnt
			});
		}
		// time takes for progress bar to load each chunk (miliseconds)
	}, 100);

});