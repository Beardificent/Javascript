/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
//create object date - it will start processing as date
 //   create idea of time (eg hours)
    var dayt = new Date();
    var time = dayt.getHours();


    if (time < 18) {
        document.getElementById("target").innerHTML = "Hello";
    } else {
        document.getElementById("target").innerHTML = "Good evening";
    }

})();