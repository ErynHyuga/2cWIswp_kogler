let feld = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

feld[0][1] = 1;
feld[1][1] = 2;
printFeld();

function printFeld() {
    for (let rei = 0; rei < feld.length; rei++) {
        let actualRei = feld[rei];
        let outputRei = "";
        for (let spa = 0; spa < actualRei.length; spa++) {
            let zeicha = " ";

            if (actualRei[spa] == 1) {
                zeicha = "X";
            } else if (actualRei[spa] == 2) {
                zeicha = "O";
            }

            outputRei += zeicha + " | ";
        }
        console.log(outputRei);
    }
}



/*let feld = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

feld[0][1] = 1;
feld[1][1] = 2;
printFeld();

function printFeld() {
    for (let rei = 0; rei < feld.length; rei++) {
        let actualRei = feld[rei];
        let outputRei = "";
        for (let spa = 0; spa < actualRei.length; spa++) {
            let zeicha = " ";

            if (actualRei[spa] == 1) {
                zeicha = "X";
            } else if (actualRei[spa] == 2) {
                zeicha = "O";
            };

            outputRei += zeicha + " | ";
        }
        console.log(outputRei);
    }
};
*/