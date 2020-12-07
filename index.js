const readlineSync = require('readline-sync');
const chalk = require('chalk');

// printing colored line
function colorLine(){
  console.log(chalk.bold.magentaBright("--------------------------------------"));
}

// empty line 
function emptyLine(){
  console.log();
}

// displaying rules
function rules(){
  emptyLine()
  console.log(chalk.bold.greenBright("HOW TO PLAY THIS GAME?"));
  console.log(chalk.cyanBright.bold("1 Enter the correct option 1/2/3/4"));
  console.log(chalk.cyanBright.bold("2 Press Enter"));
  console.log(chalk.cyanBright.bold("3 Send the screenshot of your final score to me"));
  console.log(chalk.yellowBright.bold("Have Fun!"))
  emptyLine()
  colorLine()
}

// welcome message
console.log(chalk.green.bold("Welcome to DO YOU KNOW SIDDHI? quiz"));
emptyLine(); colorLine(); emptyLine();

// username input
var username = readlineSync.question(chalk.blueBright.bold("What's your name? "));
emptyLine();emptyLine();

// saying hello to user 
console.log(chalk.bold.yellowBright("HELLO "+username.toUpperCase()) );

// decoration
emptyLine();colorLine();emptyLine();

// calling function to display rules
rules();

// score 
var score = 0;

function play(question,options,answer){
  emptyLine();

  console.log(chalk.green.bold(question));

  for(var i=0;i<4;i++){
    console.log(chalk.cyan.bold(i+1+" "+options[i]));
  }

  var userAnswer = readlineSync.question(chalk.green("Enter your answer: "));
  if(answer.toUpperCase() === userAnswer.toUpperCase()){
    console.log(chalk.yellowBright.bold("Correct!"));
    score++;
  }
  else{
    console.log(chalk.redBright("Wrong"))
  }
  
  console.log(chalk.blueBright("Current Score is: "+score));
  emptyLine()
  colorLine()

} 


// question objects
var questionOne = {
  question: "What's my favorite color?",
  options: ["pink","blue","yellow","green"],
  answer: "2"
}

var questionTwo = {
  question: "What was my favorite cartoon when i was a child?",
  options: ["doraemon","ninja hattori","shinchan","looney tunes"],
  answer: "3"
}

var questionThree = {
  question: "What's my favorite animated movie of all time?",
  options: ["Frozen","Inside Out","Toy Story","Ratatouille"],
  answer: "4"
}

var questionFour = {
  question: "What's my favorite movie series?",
  options: ["Stranger Things","The Office","Brooklyn 99","All of the above"],
  answer: "4"
}

var questionFive = {
  question: "What am i afraid of the most",
  options: ["Cockroach","Lizard","Spider","Both A and B"],
  answer: "4"
}

var questionSix = {
  question: "Do i like waking up early or staying up late?",
  options: ["Waking up early","Staying up late","Depends on the situation","None of the above"],
  answer: "1"
}
var questionSeven = {
  question: "Which is my favorite season?",
  options: ["Summer","Winter","Monsoon","Autumn"],
  answer: "1"
}

var questionEight = {
  question: "What's my favorite fruit?",
  options: ["Mango","Watermelon","Kiwi","Orange"],
  answer: "2"
}
var questionNine = {
  question: "What's my favorite food?",
  options: ["Pizza","Burger","Pani Puri","Paneer"],
  answer: "4"
}

var questionTen = {
  question: "What's my favorite game",
  options: ["Green Farm 3 ","Candy Crush","Among us","Ludo"],
  answer: "2"
}


// creating array of all question objects
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

// calling play function for all question objects
for(var i=0;i<questions.length;i++){

  play(questions[i].question,questions[i].options,questions[i].answer);
}

emptyLine();

// displaying final score
console.log(chalk.bold.cyanBright("FINAL SCORE is: ")+chalk.bold.yellowBright(score));

emptyLine();colorLine();emptyLine();

// 


console.log(chalk.green("Take a screenshot and share it with me :)"))

emptyLine();colorLine();