// VARIABLEN ================================================================

// Variablen aus dem HTML
let fiveRounds = document.getElementById("fiveRounds");
let tenRounds = document.getElementById("tenRounds");
let fifteenRounds = document.getElementById("fifteenRounds");
let twentyRounds = document.getElementById("twentyRounds");
let outputUserWins = document.getElementById("outputUserWins");
let outputComputerWins = document.getElementById("outputComputerWins");
let winnerIs = document.getElementById("winnerIs");
let schereLabel = document.getElementById("schereLabel");
let result = document.getElementById("result");
let spieler = document.getElementById("spieler");
let computer = document.getElementById("computer");
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let rundenzaehler = document.getElementById("rundenzaehler");

//Variablen inner JS
let i = 0;
let du = [];
let ich = [];

// FUNKTIONEN =================================================================

function play() {

    let arrComputer = ["Schere", "Stein", "Papier"];
    let randomC = Math.floor(Math.random() * arrComputer.length);
    let einsatzComputer = arrComputer[randomC];

    if (fiveRounds.checked) {

        if (schere.checked && einsatzComputer == "Schere") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
        }

        else if (schere.checked && einsatzComputer == "Stein") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (schere.checked && einsatzComputer == "Papier") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Schere") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Stein") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Papier") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Papier") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Stein") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Schere") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        if (i == 5) {

            let sumDu = 0;
            let sumIch = 0;

            for (i = 0; i < ich.length; i++) {
                sumIch += ich[i];
            }

            for (i = 0; i < du.length; i++) {
                sumDu += du[i];
            }

            if (sumDu > sumIch) {
                winnerIs.innerHTML = "🥇💃🏻 Du hast gewonnen 🥳🏆";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                fiveRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "green";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio2.play();
            }

            else if (sumDu < sumIch) {
                winnerIs.innerHTML = "🤷🏻‍♂️ Ich habe gewonnen 😜";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                fiveRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "red";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio1.play();
            }

            else if (sumDu == sumIch) {
                winnerIs.innerHTML = "Gleichstand<br>Gleich nochmal!";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                fiveRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "black";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio3.play();
            }
        }

    }

    if (tenRounds.checked) {

        if (schere.checked && einsatzComputer == "Schere") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        else if (schere.checked && einsatzComputer == "Stein") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (schere.checked && einsatzComputer == "Papier") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Schere") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Stein") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Papier") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Papier") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Stein") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Schere") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        if (i == 10) {

            let sumDu = 0;
            let sumIch = 0;

            for (i = 0; i < ich.length; i++) {
                sumIch += ich[i];
            }

            for (i = 0; i < du.length; i++) {
                sumDu += du[i];
            }


            if (sumDu > sumIch) {
                winnerIs.innerHTML = "🥇💃🏻 Du hast gewonnen 🥳🏆";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                tenRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "green";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio2.play();
            }

            else if (sumDu < sumIch) {
                winnerIs.innerHTML = "🤷🏻‍♂️ Ich habe gewonnen 😜";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                tenRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "red";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio1.play();
            }

            else if (sumDu == sumIch) {
                winnerIs.innerHTML = "Gleichstand<br>Gleich nochmal!";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                tenRounds.checked = false;
                result.style.display = "block";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio3.play();
            }
        }

    }

    if (fifteenRounds.checked) {

        if (schere.checked && einsatzComputer == "Schere") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        else if (schere.checked && einsatzComputer == "Stein") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (schere.checked && einsatzComputer == "Papier") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Schere") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Stein") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Papier") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Papier") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Stein") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Schere") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        if (i == 15) {

            let sumDu = 0;
            let sumIch = 0;

            for (i = 0; i < ich.length; i++) {
                sumIch += ich[i];
            }

            for (i = 0; i < du.length; i++) {
                sumDu += du[i];
            }


            if (sumDu > sumIch) {
                winnerIs.innerHTML = "🥇💃🏻 Du hast gewonnen 🥳🏆";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                fifteenRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "green";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio2.play();
            }

            else if (sumDu < sumIch) {
                winnerIs.innerHTML = "🤷🏻‍♂️ Ich habe gewonnen 😜";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                fifteenRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "red";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio1.play();
            }

            else if (sumDu == sumIch) {
                winnerIs.innerHTML = "Gleichstand<br>Gleich nochmal!";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                fifteenRounds.checked = false;
                result.style.display = "block";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio3.play();
            }
        }

    }

    if (twentyRounds.checked) {

        if (schere.checked && einsatzComputer == "Schere") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        else if (schere.checked && einsatzComputer == "Stein") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (schere.checked && einsatzComputer == "Papier") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Schere") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Stein") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (stein.checked && einsatzComputer == "Papier") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Papier") {
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Stein") {
            du.push(1);
            outputUserWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-g74198a27e_640.png" alt="Stein">';
            rundenzaehler.innerHTML = i;
        }

        else if (papier.checked && einsatzComputer == "Schere") {
            ich.push(1);
            outputComputerWins.innerHTML++;
            i++;
            spieler.innerHTML = '<img src="assets/img/rock-paper-scissors-gc0bdb4aed_640.png" alt="Papier">';
            computer.innerHTML = '<img src="assets/img/rock-paper-scissors-gee05864ac_640.png" alt="Schere">';
            rundenzaehler.innerHTML = i;
        }

        if (i == 20) {

            let sumDu = 0;
            let sumIch = 0;

            for (i = 0; i < ich.length; i++) {
                sumIch += ich[i];
            }

            for (i = 0; i < du.length; i++) {
                sumDu += du[i];
            }


            if (sumDu > sumIch) {
                winnerIs.innerHTML = "🥇💃🏻 Du hast gewonnen 🥳🏆";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                twentyRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "green";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio2.play();
            }

            else if (sumDu < sumIch) {
                winnerIs.innerHTML = "🤷🏻‍♂️ Ich habe gewonnen 😜";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                twentyRounds.checked = false;
                result.style.display = "block";
                winnerIs.style.color = "red";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio1.play();
            }

            else if (sumDu == sumIch) {
                winnerIs.innerHTML = "Gleichstand<br>Gleich nochmal!";
                schere.checked = false;
                stein.checked = false;
                papier.checked = false;
                twentyRounds.checked = false;
                result.style.display = "block";
                spieler.innerHTML = "";
                computer.innerHTML = "";
                audio3.play();
            }
        }
    }
}

let restart = () => {
    schere.checked = false;
    stein.checked = false;
    papier.checked = false;
    fiveRounds.checked = false;
    tenRounds.checked = false;
    fifteenRounds.checked = false;
    twentyRounds.checked = false;
    spieler.innerHTML = "";
    computer.innerHTML = "";
    outputUserWins.innerHTML = 0;
    outputComputerWins.innerHTML = 0;
    du = [];
    ich = [];
    i = 0;
    rundenzaehler.innerHTML = "";
}

let hideResult = () => {
    result.style.display = "none";
}