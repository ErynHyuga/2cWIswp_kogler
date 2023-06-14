let feld = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  feld[0][0] = 0;
  feld[1][0] = 0;
  feld[2][0] = 0;
  feld[0][1] = 0;
  feld[1][1] = 0;
  feld[2][1] = 0;
  feld[0][2] = 0;
  feld[1][2] = 0;
  feld[2][2] = 0;
  
  printFeld();
  
  function printFeld() {
    for (let rei = 0; rei < feld.length; rei++) {
      let actualRei = feld[rei];
      let outputRei = "";
      for (let spa = 0; spa < actualRei.length; spa++) {
        let zeicha = " ";
  
        if (actualRei[spa] === 1) {
          zeicha = "X";
        } else if (actualRei[spa] === 2) {
          zeicha = "O";
        }
  
        outputRei += zeicha + " | ";
      }
      console.log(outputRei);
    }
  }
  console.log("Feld.");
console.log("Reiha 0 bis 2");
let reihe = parseInt(prompt("Reiha (0-2):"));
console.log("Spalta 0 bis 2");
let spalte = parseInt(prompt("Spalta (0-2):"));

console.log("1 = X; 2 = O");
let zeichen = parseInt(prompt("Zeichen"));
if (zeichen !== 1 && zeichen !== 2) {
  console.log("Funtz netta");
} else {
  feld[reihe][spalte] = zeichen;
  console.log("Funzt");
  printFeld();
}