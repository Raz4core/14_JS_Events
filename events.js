/** Variablen */
const btn = document.getElementById("trigBtn");
let appStatus =true;
// const btn = document.body;
output(btn);

/** Event-Listener ***/

btn.addEventListener("click",toggleAppStatus);

/** Buisness-Logic I Toggle **/

function toggleAppStatus() {
    appStatus = !appStatus;
    output(appStatus);
}


/* Tools */
function output(outputData) {
    console.log(outputData);
}