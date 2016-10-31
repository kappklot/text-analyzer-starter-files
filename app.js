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

	show()
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

		//$(".word-count").size();
		var words = $("#user-text").val();
		console.log(words);



		var space = " ";
		var splitWords = words.split(space)

		console.log(splitWords);



		$(".text-report").show();

		$(".print-word-count").html(splitWords.length);

		// if i === i, then don't print

		var uniqueWords = [];
		for (var i = 0; i < splitWords.length; i += 1) {
			var word = splitWords[i];
			if (uniqueWords.indexOf(word) === -1){
				uniqueWords.push(word);
			}
		}

		var allWordLength = 0;
		splitWords.forEach(function(word) {
				var wordLength = word.length 
			allWordLength += wordLength
		});

		var wordAverage = allWordLength/splitWords.length;
		$(".print-average-word-length").html(wordAverage);
		$(".print-unique-word-count").html(uniqueWords.length);
// what is a sentence? split on periods rather than spaces
// writing a function like 91 
// add class and print 

$(".print-average-sentence.length")

	})
})


