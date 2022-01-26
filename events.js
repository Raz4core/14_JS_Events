/** Variablen */
const btn = document.getElementById("trigBtn");
let appStatus =true;

/** Event-Listener ***/

btn.addEventListener("click",toggleAppStatus);

/** Buisness-Logic I Toggle **/

function toggleAppStatus() {
    appStatus = !appStatus;
    updateview();
}
/**** View-Schicht ****/

// Modul: Update der View-Schicht
function updateview() {
    if (appStatus) {
        switchClassName("day");
        switchbtntxt("day");
    } else{
        switchClassName("night");
        switchbtntxt("night");
    }
}

// Modul: Umschaltung Klassennamen I Test:
// switchClassName("night");
// switchClassName("night");

function switchClassName(modeStr) {

    // Kritik: wenig Robust, da starre Indexierung
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// Modul: Umschaltung Klassennamen.
// switchbtntxt


/* Tools */
function output(outputData) {
    console.log(outputData);
}