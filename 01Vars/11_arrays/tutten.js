let p = prompt("Freund oder Mathe");
if (p === "M") {
    let arr = [4, 1, 2, 3];
    console.log(arr[1]);

    arr.push(17);
    arr.push(199);

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
    console.log();

    let ges = arr.reduce((total, num) => total + num);


    let loeng = arr.length;
    let middy = ges / loeng;

    console.log("Gesamtsamt des arryas isch " + ges + ". " + "Der Mittelwert isch " + middy);

} else if (p === "F") {
    let ry = ["Susi ", "Paula ", "HANZ "];
    console.log("Freundes meiner sind " + ry + ". Warte, da fehlt einer.");
    let Felht = prompt("Wer isses?");
    ry.push(Felht);
    console.log("Freundes meiner sind " + ry);
}







