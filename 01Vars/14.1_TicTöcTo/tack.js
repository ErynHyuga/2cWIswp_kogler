let feld = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

feld[0][0] = a;
feld[1][0] = b;
feld[2][0] = c;
feld[0][1] = d;
feld[1][1] = e;
feld[2][1] = r;
feld[0][2] = f;
feld[1][2] = g;
feld[2][2] = h;
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
