let balance = 1337;
const Pw = "1111";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkPw(inputPw) {
  if (inputPw === Pw) {
    return true;
  } else {
    return false;
  }
}

function depositMoney(amount) {
  if (amount <= 0) {
    console.log("Nö.");
  } else {
    balance += amount;
    console.log(`Endlich mol richtig, hosch etza ${balance.toFixed(2)} groscha.`);
  }
}

function withdrawMoney(amount) {
  if (amount <= 0) {
    console.log("Sowwy bwo, funktioniert so net.");
  } else if (amount > balance) {
    console.log("SChaiden. Net gnuag Cäsh in der Täsh");
  } else {
    balance -= amount;
    console.log(`Tutti, hosch etzt ${balance.toFixed(2)} groscha im kässili.`);
  }
}

function showBalance() {
  console.log(`Groscha zellen ${balance.toFixed(2)} im kässili.`);
}

function main() {
  let attempts = 0;
  let maxAttempts = 3;
  let loggedIn = false;

  console.log("Zäwas");

  while (attempts < maxAttempts && !loggedIn) {
    let inputPw = prompt("Pin ihi do:");
    if (checkPw(inputPw)) {
      console.log("Enfallslos aber richtig.");
      loggedIn = true;
    } else {
      console.log(`Gschissa, ${maxAttempts - attempts - 1} mol darfst noch.`);
      attempts++;
    }
  }

  if (loggedIn) {
    console.log("Bin drin");

    while (true) {
      let choice = prompt("Was brusch?:\n1. Geld ihi\n2. Geld ussi\n3. Geld im Kässsili\n4. Zupf di");

      if (choice === "1") {
        let depositAmount = parseFloat(prompt("wia viel gihst"));
        depositMoney(depositAmount);
      } else if (choice === "2") {
        let withdrawalAmount = parseFloat(prompt("Wia viel bruchst"));
        withdrawMoney(withdrawalAmount);
      } else if (choice === "3") {
        showBalance();
      } else if (choice === "4") {
        console.log("Hahaha, di chäsh isch etza mies");
        return;
      } else {
        console.log("COmputer seht NA. Tet mi scho schießa");
      }
    }
  } else {
    console.log("Sike! Imagine man hat seinen Code falsch XDD.");
  }
}

main();
