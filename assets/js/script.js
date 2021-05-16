/*=============== LANCER LE JEU ===================*/
let buttonEnter = $('#buttonEnter');

buttonEnter.click(function(){
    //Masque la 1ère partie
    $('#Part1').removeClass('d-block');
    $('#Part1').addClass('d-none');
    //Affiche la vidéo
    $('#Part2').removeClass('d-none');
    $('#Part2').addClass('d-block');
    //Change de Background
    // $('.container-fluid').removeClass('bgpart1')
    // $('.container-fluid').addClass('bgpart2');
})


/*=============== PASSER LA VIDEO ===================*/
let buttonPlay = $('#buttonPlay');

buttonPlay.click(function(){
    //Affiche la vidéo
    $('#Part1').removeClass('d-block');
    $('#Part1').addClass('d-none');
    //Affiche la 2nde partie
    $('#Part3').removeClass('d-none');
    $('#Part3').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart2')
    $('.container-fluid').addClass('bgpart3');
})
let buttonGame = $('#buttonGame');

buttonGame.click(function(){
    //Affiche la vidéo
    $('#Part2').removeClass('d-block');
    $('#Part2').addClass('d-none');
    //Affiche la 2nde partie
    $('#Part3').removeClass('d-none');
    $('#Part3').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart2')
    $('.container-fluid').addClass('bgpart3');
})


/*============== DECLARER LES VARIABLES =============*/
let shifumi_values = ['renard', 'poule', 'vipere'];
    let machineWin = 0;
    let userWin = 0;

/*============== DRAG&DROP =============*/
$('#renard, #poule, #vipere').draggable({
    revert: 'invalid',
});

let revert = $('#renard, #poule, #vipere').draggable('option', 'revert');


// $('#machineDepot img').hide();

/*============== FONCTION JEU =============*/
$('#choixUtilisateur').droppable({
    drop: function choix(event, ui) { 
        let machineChoice = shifumi_values[Math.floor(Math.random() * shifumi_values.length)];;
        
        // $('#machineDepot .fa').hide();
        // $('#userChoice .fa').hide();
        $('#renardUser3, #pouleUser3, #vipereUser3, #renardMachine3, #pouleMachine3, #vipereMachine3, #renardPoule4, #pouleVipere4, #vipereRenard4, #renardRenard4, #poulePoule4, #vipereVipere4').hide();

        setTimeout(thirdPart, 1000);

        switch (ui.draggable.attr('id')) { 
            case 'renard':
                if (machineChoice == "vipere"){
                    $('#result').text('Perdu');
                    // $('#machineResult').text(machineChoice);
                    $('#renardUser3').show();
                    $('#vipereMachine3').show();
                    $('#vipereRenard4').show();
                    userWin++;
                } else if (machineChoice == "renard"){
                    $('#result').text('Egalite');
                    // $('#machineResult').text(machineChoice);
                    $('#renardUser3').show();
                    $('#renardMachine3').show();
                    $('#renardRenard4').show();
                } else if (machineChoice == "poule"){
                    $('#result').text('Gagne');
                    // $('#machineResult').text(machineChoice);
                    $('#renardUser3').show();
                    $('#pouleMachine3').show();
                    $('#renardPoule4').show();
                    machineWin++;
                }
                break;
            case 'poule':
                if (machineChoice == "vipere"){
                    $('#result').text('Gagne');
                    // $('#machineResult').text(machineChoice);
                    $('#pouleUser3').show();
                    $('#vipereMachine3').show();
                    $('#pouleVipere4').show();
                    machineWin++;
                } else if (machineChoice == "renard"){
                    $('#result').text('Perdu');
                    // $('#machineResult').text(machineChoice);
                    $('#pouleUser3').show();
                    $('#renardMachine3').show();
                    $('#renardPoule4').show();
                    userWin++;
                } else if (machineChoice == "poule"){
                    $('#result').text('Egalite');
                    // $('#machineResult').text(machineChoice); 
                    $('#pouleUser3').show();
                    $('#pouleMachine3').show();
                    $('#poulePoule4').show();
                } break;
            case 'vipere':
                if (machineChoice == "vipere"){
                    $('#result').text('Egalite');
                    // $('#machineResult').text(machineChoice);
                    $('#vipereUser3').show();
                    $('#vipereMachine3').show();
                    $('#vipereVipere4').show();
                } else if (machineChoice == "renard"){
                    $('#result').text('Gagne');
                    // $('#machineResult').text(machineChoice);
                    $('#vipereUser3').show();
                    $('#renardMachine3').show();
                    $('#vipereRenard4').show();
                    machineWin++;
                } else if (machineChoice == "poule"){
                    $('#result').text('Perdu');
                    // $('#machineResult').text(machineChoice);
                    $('#vipereUser3').show();
                    $('#pouleMachine3').show();
                    $('#pouleVipere4').show();
                    userWin++;
                } 
                break; 
        }
        $('.machineCount').text('Perdues : ' + machineWin);
        $('.userCount').text('Gagnees : ' + userWin);

        setTimeout(fourthPart, 4000);
        setTimeout(reset,7500);
        
    }    
});

function reset(){
    $('#renard, #poule, #vipere').css({'top':'0px', 'left':'0px'});
    // $('#renardMachine').hide();
    // $('#pouleMachine').hide();
    // $('#vipereMachine').hide();
    $('#result').text('');
    //Masque la 2nde partie
    $('#Part5').removeClass('d-block');
    $('#Part5').addClass('d-none');
    // Affiche la 3ème partie
    $('#Part3').removeClass('d-none');
    $('#Part3').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart5')
    $('.container-fluid').addClass('bgpart3');
};
function thirdPart(){
    //Masque la 2nde partie
    $('#Part3').removeClass('d-block');
    $('#Part3').addClass('d-none');
    // Affiche la 3ème partie
    $('#Part4').removeClass('d-none');
    $('#Part4').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart3')
    $('.container-fluid').addClass('bgpart4');
}  
function fourthPart(){
    //Masque la 2nde partie
    $('#Part4').removeClass('d-block');
    $('#Part4').addClass('d-none');
    // Affiche la 3ème partie
    $('#Part5').removeClass('d-none');
    $('#Part5').addClass('d-block');
    //Change de Background
    $('.container-fluid').removeClass('bgpart4')
    $('.container-fluid').addClass('bgpart5');
}  

