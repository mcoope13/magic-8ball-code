var magic8Ball = {};

magic8Ball.listofAnswers = ["It is certain.","It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Dont count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];
magic8Ball.question;
// define the method
magic8Ball.askQuestion = function(question) {
 
     // create a random number
     var randomNumber = Math.random();
 
     // make the random number between 0 and the number of items in your array
     var randomNumberForListOfAnswers = randomNumber * this.listofAnswers.length;
 
     // round down the number to be a whole number
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
 
     // use that number to index a random number from the answers array
     var answer = this.listofAnswers[randomIndex];
 
     console.log(question);
     console.log(answer);
};
magic8Ball.askQuestion("Will I ever learn Javascript?");