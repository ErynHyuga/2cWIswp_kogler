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

function bvoll() {
    for (let rei = 0; rei < feld.length; rei++) {
        for (let spa = 0; spa < feld[rei].length; spa++) {
            if (feld[rei][spa] === 0) {
                return false;
            }
        }
    }
    return true;
}

function gwin(spieler) {

    for (let rei = 0; rei < feld.length; rei++) {
        if (
            feld[rei][0] === spieler &&
            feld[rei][1] === spieler &&
            feld[rei][2] === spieler
        ) {
            return true;
        }
    }


    for (let spa = 0; spa < feld[0].length; spa++) {
        if (
            feld[0][spa] === spieler &&
            feld[1][spa] === spieler &&
            feld[2][spa] === spieler
        ) {
            return true;
        }
    }


    if (
        feld[0][0] === spieler &&
        feld[1][1] === spieler &&
        feld[2][2] === spieler
    ) {
        return true;
    }

    if (
        feld[0][2] === spieler &&
        feld[1][1] === spieler &&
        feld[2][0] === spieler
    ) {
        return true;
    }

    return false;
}

function spiel() {
    let spieler = 1;

    while (!bvoll()) {
        console.log(`Spieler ${spieler}, gib koords`);
        console.log("Reihe 0 bis 2");
        let reihe = parseInt(prompt("Reihe (0-2):"));
        console.log("Spalte 0 bis 2");
        let spalte = parseInt(prompt("Spalte (0-2):"));

        if (reihe >= 0 && reihe < 3 && spalte >= 0 && spalte < 3) {
            if (feld[reihe][spalte] === 0) {
                feld[reihe][spalte] = spieler;
                console.log("funtz");
                printFeld();

                if (gwin(spieler)) {
                    console.log(`Spieler ${spieler} hot gwonna`);
                    return;
                }
                spieler = spieler === 1 ? 2 : 1;
            } else {
                console.log("feld voll");
            }
        } else {
            console.log("funtz net");
        }
    }

    console.log("Felder voll");
}
let feld = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

spiel();