/** Variablen */

const btn = document.getElementById("trigBtn");
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