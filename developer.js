// ==UserScript==
// @name         Energy Air game bot - Developer version 2021
// @namespace    https://raw.githubusercontent.com/Svenwas3f/energy-Air-game-Bot/master/developer.js
// @version      0.1
// @description  Automate the Energy Air Game
// @author       Svenwas3f
// @match        https://game.energy.ch
// @grant        none
// ==/UserScript==

// Wait until page is loaded
window.onload = function() {
  console.log("Loaded");

  // Check what to do
  if( document.getElementsByClassName("question-text")[0] != undefined) {
    // Question
    console.log("Question");
  }else if ( document.getElementsByClassName("failed")[0] != undefined ) {
    // Quiz failed
    console.log("Failed");
  }else if( document.getElementsByClassName("ticket-slot")[0] != undefined ) {
    //ticket-slot, tickets
    console.log("Choose ticket option");
  }else if( document.getElementsByClassName("circle")[0] != undefined ) {
    // circle
    console.log("bubble");
  }
}
