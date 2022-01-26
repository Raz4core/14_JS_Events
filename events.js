/** Variablen */

//const btn = document.getElementById("trigBtn");
const btn = document.body;
output(btn);

/** Event-Listener ***/

btn.addEventListener("click",test);

function test() {
    output("Btn clicked!");
}

/* Tools */
function output(outputData) {
    console.log(outputData);
}