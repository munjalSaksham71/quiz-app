var readlineSync = require("readline-sync");
var colors = require("colors");

console.log(colors.green("Welcome to the mini JS quiz challange"));

var score = 0;
var userName = readlineSync.question("May I have your name? ");
console.log("Welcome to the quiz ", userName);
console.log(colors.cyan("Lets Start!!!!")); 

//Play 

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(colors.green("YAYY!!! you got it right"));
    score++;
  } else {
    console.log(colors.red("OOPS!! it's wrong. "))
  }
}

var questions = [
  {
    question: `Inside which HTML element do we put JavaScript?
    a) <scripting>
    b) <js>
    c) <script>
    d) <javascript> \n `,
    answer: 'c'
  },
  {
    question: `How do you write "Hello World" in an alert box?
    a) alertBox("Hello World")
    b) console.log("Hello World")
    c) alert("Hello World")
    d) msg("Hello World") \n `,
    answer: 'c'
  },
  {
    question: `How do we create function in JavaScript? 
    a) function: functionName(){}
    b) function functionName(){}
    c) functionName(){}
    d) function = myFuncion(){} \n `,
    answer: 'b'
  },
  {
    question: `How do you call a function named "myFunction"?
    a) myFuncion()
    b) function myFuncion()
    c) function.myFuncion()
    d) call myFuncion() \n `,
    answer: 'a'
  },
   {
    question: `How does a for loop start?
    a) for(var i = 0: i < 5 ; i++ )
    b) for(var i = 0; i < 5 , i++ )
    c) for(var i = 0, i < 5 , i++ )
    d) for(var i = 0; i < 5; i++) \n `,
    answer: 'd'
  },

]

//looping through questions

for(var i = 0; i < questions.length; i++ ){
  var currentQuestion = questions[i].question;
  var currentAnswer = questions[i].answer;

  play(currentQuestion, currentAnswer);
}

console.log("Good Job")
console.log(colors.inverse(`You Scored ${score} out of ${questions.length}`))

var highScore = {
  name: 'Saksham',
  scored: 5
}

console.log(`The highScore is of ${highScore.name} and score is ${highScore.scored}`);
console.log(colors.brightRed.bold("IF your score is more than him or equal to it \n ping me. i ll update "))