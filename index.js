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

// current player object
var currentplayer ={score:"0",name:""};

// username input
currentplayer.name = readlineSync.question(chalk.blueBright.bold("What's your name? "));
emptyLine();emptyLine();

// saying hello to user 
console.log(chalk.bold.yellowBright("HELLO "+currentplayer.name.toUpperCase()) );

// decoration
emptyLine();colorLine();emptyLine();

// calling function to display rules
rules();


function play(question,options,answer){
  emptyLine();

  console.log(chalk.green.bold(question));

  for(var i=0;i<4;i++){
    console.log(chalk.cyan.bold(i+1+" "+options[i]));
  }

  var userAnswer = readlineSync.question(chalk.green("Enter your answer: "));
  if(answer.toUpperCase() === userAnswer.toUpperCase()){
    console.log(chalk.yellowBright.bold("Correct!"));
    currentplayer.score = parseInt(currentplayer.score)+1;
  }
  else{
    console.log(chalk.redBright("Wrong"))
  }
  
  console.log(chalk.blueBright("Current Score is: "+currentplayer.score));
  emptyLine()
  colorLine()

} 


// question objects
var questionOne = {
  question: "1) What's my favorite color?",
  options: ["pink","blue","yellow","green"],
  answer: "2"
}

var questionTwo = {
  question: "2) What was my favorite cartoon when i was a child?",
  options: ["doraemon","ninja hattori","shinchan","looney tunes"],
  answer: "3"
}

var questionThree = {
  question: "3) What's my favorite animated movie of all time?",
  options: ["Frozen","Inside Out","Toy Story","Ratatouille"],
  answer: "4"
}

var questionFour = {
  question: "4) What's my favorite series?",
  options: ["Stranger Things","The Office","Brooklyn 99","All of the above"],
  answer: "4"
}

var questionFive = {
  question: "5) What am i afraid of the most",
  options: ["Cockroach","Lizard","Spider","Both A and B"],
  answer: "4"
}

var questionSix = {
  question: "6) Do i like waking up early or staying up late?",
  options: ["Waking up early","Staying up late","Depends on the situation","None of the above"],
  answer: "1"
}
var questionSeven = {
  question: "7) Which is my favorite season?",
  options: ["Summer","Winter","Monsoon","Autumn"],
  answer: "1"
}

var questionEight = {
  question: "8) What's my favorite fruit?",
  options: ["Mango","Watermelon","Kiwi","Orange"],
  answer: "2"
}
var questionNine = {
  question: "9) What's my favorite food?",
  options: ["Pizza","Burger","Pani Puri","Paneer"],
  answer: "4"
}

var questionTen = {
  question: "10) What's my favorite game",
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
console.log(chalk.bold.cyanBright("FINAL SCORE is: ")+chalk.bold.yellowBright(currentplayer.score)+"/10");

emptyLine();colorLine();emptyLine();

// high scores
var highscore1={ score:9, name:"Manisha"};
var secondhighscore={score:8, name:"Om"};

if(currentplayer.score>highscore1.score){
  
  console.log(chalk.yellow("Yayy, You have beaten the high score!"));
  emptyLine();
  console.log(chalk.green("Take a screenshot and share it with me :)"))
  
  emptyLine();colorLine();
  console.log(chalk.yellowBright.bold("HIGH SCORES: "));
  displayScoreName(currentplayer);
  displayScoreName(highscore1);
  displayScoreName(secondhighscore);

}
else if(currentplayer.score==highscore1.score){
  console.log(chalk.yellow("Yayy, You are the highest scorer!"));
  
  emptyLine();colorLine();
  console.log(chalk.yellowBright.bold("HIGH SCORES: "));
  displayScoreName(highscore1);
  displayScoreName(currentplayer);
  displayScoreName(secondhighscore);

}
else{
  console.log(chalk.yellow("You didn't beat the high score :("));
  
  emptyLine();colorLine();
  console.log(chalk.yellowBright.bold("HIGH SCORES: "));
  displayScoreName(highscore1);
  displayScoreName(secondhighscore);
  displayScoreName(currentplayer);
}


function displayScoreName({score,name}){
  console.log(chalk.greenBright.bold(score)+chalk.greenBright.bold("/10")+"  "+chalk.greenBright.bold(name));
}

emptyLine(); colorLine();emptyLine();
  console.log(chalk.yellow("Take a screenshot and share it with me :)"))
emptyLine(); colorLine();
