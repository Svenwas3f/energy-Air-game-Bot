// ==UserScript==
// @name         Energy Air game bot
// @namespace    https://raw.githubusercontent.com/Svenwas3f/energy-Air-game-Bot-2019/master/bot.js
// @updateURL    https://raw.githubusercontent.com/Svenwas3f/energy-Air-game-Bot-2019/master/bot.js
// @version      1.0
// @description  Automate the Energy Air Game
// @author       Svenwas3f
// @match        https://game.energy.ch
// @grant        none
// ==/UserScript==


window.alert("Game not available\nNo bot created\nFatal error\n\nBot under construction");

//Base
//After body is loaded start the skript
document.body.onload = page_load;

//Reload page îf after 5s is no change
setTimoeout(page_load, 5000);

//Function to get question and select correct answer
function check_question(){
  var q_and_a = [
                 ["Question", "Answer"], 
                 ["Question", "Answer"]
                ];
  //Check question
  var question = document.getElementsByClassName("")[0].innerText;
  
  for(var i = 0; i < q_and_a.length; i++){
    //Compare questions
    if(question == q_and_a[i][0]){
      //Select answer and confirm
      document.getElementById(q_and_a[i][1]).click();
      document.getElementById("next-question").click();
      break;
    }
  }
}

function select_ticket(){
  var selected_ticket = Math.floor(Math.random() * 13);
  document.getElementsByClassName("")[selected_ticket].click();
}

function page_load(){
  var question = (typeof(document.getElementsByClassName("")[0]) != 'undefined' && document.getElementsByClassName("")[0] != null)?true:false;
  var phone_number = (typeof(document.getElementsByClassName("")[0]) != 'undefined' && document.getElementsByClassName("")[0] != null)?true:false;
  var ticket = (typeof(document.getElementsByClassName("")[0]) != 'undefined' && document.getElementsByClassName("")[0] != null)?true:false;
  
  if(!phone_number){
    if(question){
      check_question();
      location.reload();
    }else if (ticket){
      select_ticket();
      location.reload();
    }
  }
}
