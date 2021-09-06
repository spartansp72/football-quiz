console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log('FOOTBALL QUIZ BY ALI')
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
var readlineSync = require('readline-sync')
var userName = readlineSync.question("Enter your name:")
console.log("Welcome,",userName,"! Now it's time to put your football knowledge to work.")
var score=0
function play(question,answer){
  var userAnswer = readlineSync.question(question)
  
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Congratulations!!,",answer,"is correct :)")
    score++;

  }
  else{
    console.log("Better Luck next time!!",userAnswer,"is wrong :(")
  }
  console.log("Your score is:",score)
  console.log("*********************************************")
}

//Using objects in an array

var q = [{
  question:" 1)Which player scored the fastest hat-trick in the Premier League?\n Sadio Mane / Theiry Henry / Kun Aguero /Alan Shearer:",
  answer:'Sadio Mane'
},{
  question:'Which team won the first Premier League title?\n Liverpool / Manchester United / Arsenal / Leeds United: ',
  answer:'Manchester United'
}
,{
  question:'Ronaldo Nazario (R9) has never won the UEFA Champions League \n True / False ',
  answer:'True'

}
,{
  question:'Which outfield player appeared in the Champions League final in three different decades?\n Ryan Giggs / Buffon / Maldini / Pep Guardiola: ',
  answer: 'Ryan giggs'
}
,{
  question:'Frank Lampard has scored more Premier League goals than Thierry Henry, Robbie Fowler and Michael Owen .\n True / False ',
  answer:'True'
}
,{
  question:' An Asteroid is named after Arsene Wenger:\n True / False ',
  answer:'True'
}

,{
  question:'Who Invented Football? \n England / China / Spain / Brazil: ',
  answer:'China'
}
,{
  question:"David Beckham took ballet lessons during his time at Manchester United in order to improve his agility.\n True / False ",
  answer:"false"
},
{
  question:"The largest football stadium in the world is located in? \n Spain / England / North korea / Brazil: ",
  answer:"North Korea"
},
{
  question:"Which country has scored the most goals in the FIFA World Cup?\n Brazil / Germany / Argentina / Italy: ",
  answer:"Brazil"
}]
//loop
for(i=0;i<=q.length-1;i++){
  play(q[i].question,q[i].answer)
}
var highScore = 9
console.log("HighScore:",highScore)
console.log("Your Score:",score)
if(score>highScore){
  console.log("You're indeed a Genius!!, A Footballing God indeed!!")
}
else{
  console.log("Good try but it seems, there are a few, who know football better than you :P")
}
console.log("******************************************************************************************")