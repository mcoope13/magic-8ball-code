$(document).ready(function(){
    
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["It is certain.","It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Dont count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];
    
    $("#answer").hide();
    
    magic8Ball.askQuestion = function(question){
           $("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
 
        $("#answer").text( answer );
 
        console.log(question);
        console.log(answer);
    };
 
    $("#answer").hide();
    
        var onClick = function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
 };
   

  $("#questionButton").click( onClick );
    
});