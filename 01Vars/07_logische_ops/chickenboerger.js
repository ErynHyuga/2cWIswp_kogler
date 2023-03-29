let rNa = Math.random() * 100;
let ra = Math.floor(rNa);

console.log(ra);

let rNb = Math.random() * 100;
let rb = Math.floor(rNb);

console.log(rb);

if((ra<rb)&&(ra<50)){
    console.log("1 ist kleiner als 2 und mini");
}else if((ra<30)||(rb<30)){
    console.log("1 oder 2 ist kleiner als 30");
}else if((ra<50)&&(rb!=50)){
    console.log("1 klein. 2 nicht 50");
}