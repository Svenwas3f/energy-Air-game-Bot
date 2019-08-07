// ==UserScript==
// @name         Energy Air game bot
// @namespace    https://raw.githubusercontent.com/Svenwas3f/energy-Air-game-Bot-2019/master/bot.js
// @version      2.5
// @description  Automate the Energy Air Game
// @author       Svenwas3f, RayJW
// @match        https://game.energy.ch
// @grant        none
// ==/UserScript==

//Base
//After body is loaded start the skript
window.addEventListener("load", page_load);

//Restart the script after every succesful run
var phone_number = (typeof(document.getElementsByClassName("title-verification")[0]) != 'undefined' && document.getElementsByClassName("title-verification")[0] != null)?true:false;
setTimeout(function() {
    if(!phone_number)){
        location.reload();
    }
} , 4500);

setTimeout(function() {
    if(!phone_number)){
        location.reload();
    }
} , 9000);

//Function to get question and select correct answer
function check_question(){
  var q_and_a = [
                 ["Welche amerikanische Band trat am Energy Air 2016 auf?", "One Republic"],
                 ["Wie viele Mitarbeiter sind am Energy Air im Einsatz?", "1300"],
                 ["Energy Air Tickets kann man…", "gewinnen"],
                 ["Mit welchem dieser Tickets geniesst du die beste Sicht zur Energy Air Bühne?", "XTRA-Circle"],
                 ["Auf welcher Social-Media-Plattform kann man keine Energy Air Tickets gewinnen?", "Twitter"],
                 ["Auf welchem Weg kann man KEINE Energy Air Tickets gewinnen?", "E-Mail"],
                 ["Wann fand das Energy Air zum ersten Mal statt?", "2014"],
                 ["Wie schwer ist die Energy Air Bühne?", "450 Tonnen"],
                 ["Wie breit ist die Energy Air Bühne?", "70 Meter"],
                 ["Die wievielte Energy Air Ausgabe findet dieses Jahr statt?", "Die sechste"],
                 ["Wer war der letzte Act am Energy Air 2018?", "Lo & Leduc"],
                 ["Wo erfährst du immer die neusten Infos rund um das Energy Air?", "im Radio, auf der Website und über Social Media"],
                 ["Wie viele Energy Air Tickets werden verlost?", "40’000"],
                 ["Was passiert, wenn es am Eventtag regnet?", "Energy Air findet trotzdem statt"],
                 ["Wie reiste Kygo im Jahr 2015 ans Energy Air?", "Im Privatjet"],
                 ["Wo findet das Energy Air statt?", "Stade de Suisse, Bern"],
                 ["Wer eröffnete das erste Energy Air?", "Bastian Baker"],
                 ["Wie viele Konfetti-Kanonen gibt es am Energy Air?", "60"],
                 ["Wann beginnt das Energy Air 2019?", "Um 17 Uhr"],
                 ["Wie viele Spotlights gibt es am Energy Air?", "250"],
                 ["Welcher dieser Acts hatte einen Auftritt am Energy Air 2018?", "Alvaro Soler"],
                 ["Wie viele Acts waren beim letzten Energy Air dabei?", "14"],
                 ["Energy Air ist der einzige Energy Event, …", "...der unter freiem Himmel stattfindet."],
                 ["Welche DJ-Acts standen 2018 auf der Bühne des Energy Air?", "Averdeck"],
                 ["Wen nahm Knackeboul am Energy Air 2014 mit backstage?", "Sein Mami"],
                 ["Was verlangte Nena am Energy Air 2016?", "Eine komplett weisse Garderobe"],
                 ["Welche Fussballmannschaft ist im Stade de Suisse zuhause?", "BSC Young Boys"],
                 ["Wann findet das Energy Air 2019 statt?", "7. September 2019"]

                ];
  //Check question
  var question = document.getElementsByClassName("question-text")[0].innerText;

  for(var i = 0; i < q_and_a.length; i++){
    //Compare questions
    if(question.toLowerCase() == q_and_a[i][0].toLowerCase()){
      //Select answer and confirm
        if(document.getElementsByClassName("question-number")[0].innerText == "10 / 10"){
            document.getElementById(q_and_a[i][1]).click();
            document.getElementById("next-question").click();
            setTimeout(function() {select_ticket();} , 1000);
        }else{
            document.getElementById(q_and_a[i][1]).click();
            document.getElementById("next-question").click();
            setTimeout(function() {check_question();} , 100);
        }
      break;
    }
  }
}

function select_ticket(){
  var selected_ticket = Math.floor(Math.random() * 13) + 4;
  document.getElementsByTagName("img")[selected_ticket].click();
  setTimeout(function() {document.getElementById("lose").click();} , 1250);
}

function page_load(){
  var question = (typeof(document.getElementsByClassName("question-text")[0]) != 'undefined' && document.getElementsByClassName("question-text")[0] != null)?true:false;
  var phone_number = (typeof(document.getElementsByClassName("title-verification")[0]) != 'undefined' && document.getElementsByClassName("title-verification")[0] != null)?true:false;
  var ticket = (typeof(document.getElementsByClassName("circle col-xs-4 col-sm-3 col-md-4 col-lg-3")[0]) != 'undefined' && document.getElementsByClassName("circle col-xs-4 col-sm-3 col-md-4 col-lg-3")[0] != null)?true:false;

  if(!phone_number){ 
    if(question){
      check_question();
    }else if (ticket){
      select_ticket();
    }
  }
}
