//  COMMIT
//link to jquery
//link to app.js in html
//remove hidden class (figure out what that means)
//add CSS classes for DOM manipulation layer to target - w/ js prefix
//commit once an hour
//append()

// tasks
// word count
// unique word count
// average word length 
// average sentence length
// asynch 

// break down tasks rather than going for whole solution at once
//start out with webpage stuff -- "what is true" textbox, something needs to happen
	
	/** function countWords(word) {
		var words = [];
		for (var i=0; i<words.length; i++){
		} 
		countWords.push(words[i]);
	}
	return words.length;

	get lots of logging

	log contents of user text 
} */


function makeTextGreen() {
	$("#text-input").css('color','green');
}

function handleFormSubmit(event) {

}

$(document).ready(function() {
	$("#text-input").css('background-color', 'yellow');

	// Two ways of doing the same thing...
	$("#text-input").fadeTo("fast", 0.5, function(){
		$("#text-input").css('color','purple');
	})

	// Or...
	// $("#text-input").fadeTo("fast", 0.5, makeTextGreen);

	// Two ways again
	$("#text-input").submit(function(event){
		event.preventDefault();
	})

	$("#text-input").submit(makeTextGreen);

	$("#text-input").submit(function(event){
		$("#user-text").css('background-color','purple');
		
		var words = $("#user-text").val();
		console.log(words);

	})
} )


