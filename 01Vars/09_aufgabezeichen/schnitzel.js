let a = 7;
let b = 3;
let c = 0;
let d = 0;


for (let indexa = 0; indexa < 1; indexa++) {
    console.log("X X X X");
    console.log("O O O O");
    console.log("X X X X");
    console.log("O O O O");
    if (indexa % 5 == 0) {
        console.log("");
    }
}


for (let indexb = 1; indexb < 101; indexb++) {
    if(indexb%1==0){
        c = c + indexb;
    }
    if(indexb%2==0){
        d = d + indexb;
    }
}


for (let indexc = 0; indexc < 1; indexc++) {
    console.log("X X X X");
    console.log("X");
    console.log("X X X X");
    console.log("X");
    console.log("X X X X");
}

