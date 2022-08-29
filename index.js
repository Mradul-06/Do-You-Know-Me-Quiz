var readlinesync = require("readline-sync");
var score = 0;

function quizPlay(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer === answer) {
    console.log("you are right");
    score = score + 1;
    console.log("your score is " + score)
  }
  else {
    console.log("you were wrong");
    score = score - 1;
    console.log("your score is " + score)
  }
}
console.log("enter your name")
var userName = readlinesync.prompt("enter username")

quizPlay("what is my name ", "Mradul");

quizPlay("where do i live? ", "Indore");

quizPlay("What do i Do? ", "Student");

quizPlay("what is my favorite food ", "pizza");

quizPlay("what is your name ", userName);
console.log(userName, "your final score is", score)
