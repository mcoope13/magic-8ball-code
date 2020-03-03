$(document).ready(function(){
    $("#answer").hide();
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["It is certain.","It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Dont count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];

	
	//picks the answer
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
 
		// changes the image
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

		//shows answer
        $("#answer").text( answer );
		//makes answer fade
		$("#answer").fadeIn(4000);
 
        console.log(question);
        console.log(answer);
    };
 
    var onClick = function() {
		//hides answer at onset
		 $("#answer").hide();
		// $("#answer").fadeIn(4000);
		setTimeout(
			function() {
        var question = prompt("ASK A YES/NO QUESTION!");

        magic8Ball.askQuestion(question);
		}, 500);
		    		//shakes the 8-ball
		$("#8ball").effect( "shake" );
    };

    $("#questionButton").click( onClick );

});