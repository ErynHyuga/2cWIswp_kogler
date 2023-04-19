/*
function printMenu(name, Alter, ort){
    console.log("Zewas " + name + "! Du bisch " + Alter + " johr alt und kunsch vo " + ort);
    console.log();
    console.log();
    console.log();
    console.log();
}

if(prompt("Auswahl") == 1){
    let name = prompt("Name");
    let Alter = prompt("Alter");
    let ort = prompt("Ort");
    
}else if(prompt("Auswahl") == 2){
    let e = prompt("Zahl 1");
    let d = prompt("Zahl 2");
}
function add(e, d){
    return e + d - 17 * 0.4
}
/*printMenu("Helmut", 47, "Favoriten")
let name = prompt("Name");
let Alter = prompt("Alter");
let ort = prompt("Ort");
printMenu(name, Alter ,ort);
*/

function printMenu(name, Alter, ort) {
    console.log("Zewas " + name + "! Du bisch " + Alter + " johr alt und kunsch vo " + ort);
}

function add(e, d) {
    return e + d;
}

function sub(e, d) {
    return e - d;
}

function plu(e, d) {
    return e * d;
}

function supe(e, d) {
    let a = 2;
    return (e + d) / a;
}

function printEasterDate(jahr) {
    let n = jahr - 1900;
    let a = n % 19;
    let b = ((7 * a + 1) / 19);
    let m = (11 * a + 4 - b) % 29;
    let q = Math.floor(n / 4);
    let w = (n + q + 31 - m) % 7;
    let p = 25 - w - m;

    return p;
}

let auswahl = prompt("Auswahl");
if (auswahl === "Aussage") {
    let name = prompt("Name");
    let Alter = prompt("Alter");
    let ort = prompt("Ort");
    printMenu(name, Alter, ort);
} else if (auswahl === "add") {
    let e = prompt("Zahl 1");
    let d = prompt("Zahl 2");
    let result = add(parseInt(e), parseInt(d));
    console.log("Das Ergebnis ist: " + result);
} else if (auswahl === "sub") {
    let e = prompt("Zahl 1");
    let d = prompt("Zahl 2");
    let result = sub(parseInt(e), parseInt(d));
    console.log("Das Ergebnis ist: " + result);
} else if (auswahl === "plu") {
    let e = prompt("Zahl 1");
    let d = prompt("Zahl 2");
    let result = plu(parseInt(e), parseInt(d));
    console.log("Das Ergebnis ist: " + result);
} else if (auswahl === "super") {
    let e = prompt("Zahl 1");
    let d = prompt("Zahl 2");
    let result = supe(parseInt(e), parseInt(d));
    console.log("Das Ergebnis ist: " + result);
} else if (auswahl === "östertöster") {
    let jahr = prompt("Welches Jahr ist heute");
    let result = printEasterDate(parseInt(jahr));
    console.log("Ostera ist am " + result + ". April.");
}
