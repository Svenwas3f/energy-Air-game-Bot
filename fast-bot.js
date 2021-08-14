// ==UserScript==
// @name         Energy Air game bot - Developer version 2021
// @namespace    https://raw.githubusercontent.com/Svenwas3f/energy-Air-game-Bot/master/developer.js
// @version      1.0
// @description  Automate the Energy Air Game
// @author       Svenwas3f
// @match        https://game.energy.ch
// @grant        none
// ==/UserScript==

window.onload = function () {
  let time = 0;
  let interval_time = 100;
  let attempt = 1;
  var action = setInterval( function () {
    // Check time
    if( time > 10000) {
      clearInterval( action ); // Break function
      location.reload(); // Reload page
    }

    // Check what to do
    if( typeof(document.getElementsByClassName("question-text")[0]) != 'undefined' ) {
      // Solve questiom
      var question = document.getElementsByClassName("question-text")[0].innerText;
      var answer = solve_question( question );

      if( typeof(answer) != 'undefined') {
        document.getElementById( answer ).click(); // Choose answer
        document.getElementById("next-question").click(); // Next question

        // Reset interval
        time = 0;
      }
    }else if ( typeof(document.getElementsByClassName("failed")[0]) != 'undefined' ) {
      // Quiz failed
      document.getElementsByClassName(" btn-primary")[1].click();

      // Reset time
      time = 0;
    }else if( typeof(document.getElementsByClassName("ticket-slot")[0]) != 'undefined' ) {
      // Select Energy air tickets
      var button = document.getElementsByClassName("tickets")[0];

      if( typeof(button) != 'undefined' ) {
        button.click(); // Got to bubbles

        // Reset interval
        time = 0;
      }
    }else if( typeof(document.getElementsByClassName("circle")[0]) != 'undefined' ) {
      // Get bubble id
      var bubbles = document.getElementsByClassName("circle");
      var selected_bubble = Math.floor( Math.random() * (bubbles.length - 1) + 0 );

      // Click bubble
      bubbles[selected_bubble].children[0].click();

      // Loose & restart
      if( typeof(document.getElementById("lose")) != 'undefined') {
        document.getElementById("lose").click();

        // Set up atempts
        attempt++;
        document.getElementsByClassName("topbar")[0].children[2].innerHTML = "Attempt: " + attempt ;

        // reset interval
        time = 0;
      }
    }else if( typeof(document.getElementById("verification")) != 'undefined' ) {
      // Check what to do
      if(document.getElementsByClassName("btn-primary")[0].innerText.toLowerCase() == 'anmelden') {
        // Break interval
        clearInterval( action );
      }else {
        // Restart game
        document.getElementsByClassName("btn-primary")[1].click();

        // Reset interval
        time = 0;
      }
    }

    // Add time
    time += interval_time;
  }, interval_time);
}

function solve_question( question ) {
  var q_and_a = [
                  ["Wie heisst der offizielle Instagram-Account des Energy Air?", "@energyair_official"],
                  ["Wie lange dauerte das Energy Air 2019?", "5 1/2 Stunden"],
                  ["Nach welchem Kriterium wählt das Energy Team die Acts für das Energy Air aus?", "Musiker*innen, welche einen grossen Bekanntheitsgrad haben"],
                  ["Wer war der allererste Act in der Geschichte des Energy Air?", "Bastian Baker"],
                  ["Was folgt am diesjährigen Energy Air als krönender Abschluss?", "Aftershowparty"],
                  ["Wie heisst die aktuelle Kampagne gegen Hass im Internet, welche Swisscom mit Energy lanciert hat?", "Mute the hate"],
                  ["Wann ist die Ticketverlosung fürs Energy Air 2021 gestartet?", "Am 2. August 2021"],
                  ["Musikgrössen aus wie vielen Ländern waren am Energy Air 2019 dabei?", "Aus 7 Ländern"],
                  ["Wie heisst die Tram- und Bushaltestelle, welche sich direkt neben dem Stadion Wankdorf befindet?", "Wankdorf Center"],
                  ["Unter welchem Motto feiern wir am 4. September 2021 das Energy Air?", "We are back."],

                  ["Welcher Act feierte am letzten Energy Air mit einem neuen Song eine Weltpremiere?", "Aloe Blacc"],
                  ["Mit welchem aufblasbaren Tier konnten zwei Auserwählte am letzten Energy Air über die ganze Meute crowdsurfen?", "Einhorn"], // Here
                  ["Welches Schweizer DJ-Duo sorgte am Energy Air 2019 zu Beginn für reichlich Stimmung?", "Averdeck"],
                  ["In welcher beliebten Serie war Tally Weijl zu sehen?", "Gossip Girl"],
                  ["Welcher Künstler musste am letzten Energy Air Backstage einen Part aus dem Dialektrapsong von Sandro vorrappen?", "Stress"],
                  ["In welchem Schweizer Kanton wurde Tally Weijl 1984 gegründet?", "Basel"],
                  ["In wie vielen Ländern ist das Kleidergeschäft Tally Weijl vertreten?", "In 39 Ländern"],
                  ["Wer war der Überraschungsact am Energy Air 2018?", "Lo & Leduc"],
                  ["Von welcher Marke war das Motorrad, mit dem Loco Escrito am letzten Energy Air über die Bühne fuhr?", "Harley-Davidson"],
                  ["Was passiert, wenn es am Energy Air regnet?", "Der Event findet trotzdem statt"],

                  ["Womit erschienen die Energy Mein Morgen Moderatoren Moser und Schelker auf der Energy Air Bühne 2019?", "Mit Spielzeug-Pferden"],
                  ["Wo kannst du, unter anderem, Energy Air Tickets gewinnen?", "Am Sender bei Radio Energy"],
                  ["Welche Stadt gehört seit August auch zur Energy Familie und wird am Energy Air vertreten sein?", "Luzern"],
                  ["Was ist das perfekte Openair-Outfit?", "Egal, hauptsache du kannst darin tanzen"],
                  ["In welchen Farben tritt das Energy Air Logo jährlich für das Sommerfinale auf?", "Blau und Weiss"],
                  ["Wie kannst du deine Gewinnchancen bei Ticketverlosungen für Energy Events verdoppeln?", "Mit einer Energy One Membership"],
                  ["Welchen Kleidungsstil verfolgt Tally Weijl grundsätzlich?", "Just in time (voll im Trend)"],
                  ["Welcher Act war noch nie an einem Energy Air dabei?", "Cro"],
                  ["Wie alt muss man sein, um ohne erwachsene Begleitung am Energy Air teilzunehmen?", "16 Jahre"],
                  ["Welche zwei Energy Kultfiguren mischten das Energy Air 2017 richtig auf?", "Annegret & Ernst Bünzli"],

                  ["Was war das Erste, was Künstler Knackeboul nach seinem Auftritt 2014 Backstage gemacht hat?", "Mit seinem Mami ein kühles Bier getrunken"],
                  ["Wie wird TALLY WEiJL ausgesprochen?", "Talli Weil"],
                  ["In welcher Location findet das Energy Air 2021 unter freiem Himmel statt?", "Stade de Suisse Wankdorf"],
                  ["Welche Musikerin wurde am Energy Air 2018 von einer 9-jährige Besucherin auf der Bühne gecovert?", "Namika"],
                  ["In welchem Schweizer Kanton eröffnete Tally Weijl 1987 den ersten Store?", "Basel"],
                  ["Mit welcher Zusatzoption hast du die Möglichkeit, direkt vor der Bühne zu stehen?", "XTRA Circle"],
                  ["Mit welchem ESC-Hit rockte Luca Hänni am letzten Energy Air die Bühne?", "She Got Me"],
                  ["Wie heisst die Initiative für mehr Respekt im Internet, welche Swisscom mit Energy lanciert hat und am Energy Air ihren grossen Höhepunkt feiert?", "Mute the Hate"],
                ];

  for(var i = 0; i < q_and_a.length; i++){
    // Compare question text
    if(question.toLowerCase() == q_and_a[i][0].toLowerCase()) {
      return q_and_a[i][1];
    }
  }
}
