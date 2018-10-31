var userChoice = 0;
var scoreUser =0;
var scoreComputer = 0;



function win() {
    scoreUser++;
    document.getElementById("score-user").innerHTML = "joueur:"+ scoreUser;
}

function loose(){
    scoreComputer++
    document.getElementById("score-computer").innerHTML = "ordi:"+scoreComputer;
}

document.getElementById("rock").addEventListener("click", function () {
    var computerChoice = (Math.random()*3)+1;
    computerChoice = Math.floor(computerChoice);
    userChoice = 1;
    document.getElementById('user-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(rock).png')";

    if(computerChoice == 1){
       document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(rock).png')";
       document.getElementById('resultat').innerHTML="égalité";
    }

    if(computerChoice == 2){
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(scissors).png')";
        document.getElementById('resultat').innerHTML="bravo, la pierre casse le scisseaux";
        win();
    }

    if(computerChoice == 3)
    {
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(paper).png')";
        document.getElementById('resultat').innerHTML="perdu la feuille recouvre la pierre";
        loose();
    }
});

document.getElementById("scissors").addEventListener("click", function () {

    var computerChoice = (Math.random()*3)+1;
    computerChoice = Math.floor(computerChoice);

   userChoice= 2;
    document.getElementById('user-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(scissors).png')";

    if(computerChoice == 1){
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(rock).png')";
        document.getElementById('resultat').innerHTML="perdu, la pierre casse le scisseaux";
        loose();

    }

    if(computerChoice == 2){
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(scissors).png')";
        document.getElementById('resultat').innerHTML="égalité";
    }

    if(computerChoice == 3)
    {
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(paper).png')";
        document.getElementById('resultat').innerHTML="bravo,  le sciseaux coupe la feuille ";
        win();

    }
});

document.getElementById("paper").addEventListener("click", function () {

    var computerChoice = (Math.random()*3)+1;
    computerChoice = Math.floor(computerChoice);

    userChoice = 3;
    document.getElementById('user-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(paper).png')";

    if(computerChoice == 1){
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(rock).png')";
        document.getElementById('resultat').innerHTML="bravo, la feuille recouvre la pierre";
        win();

    }

    if(computerChoice ==2){
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(scissors).png')";
        document.getElementById('resultat').innerHTML="perdu, le sciseaux coupe la feuille";
        loose();
    }

    if(computerChoice == 3)
    {
        document.getElementById('computer-choice').style.backgroundImage="url('assets/img/Rock-paper-scissors_(paper).png')";
        document.getElementById('resultat').innerHTML="égalité";
    }

});





