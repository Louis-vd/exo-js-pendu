let bonjour = ['B','O','N','J','O','U','R'];
let lettre = ['_','_','_','_','_','_','_'];

function guessLetter(message){
    for (let i = 0; i < bonjour.length; i++){
       if (message === bonjour[i]){
           lettre[i] = message;
           
       }
    }
}
    
document.getElementById("run").addEventListener("click", ()=>{
    
    let message = prompt('Cherche une lettre');
    message = message.toUpperCase();
    if (message.length > 1){
        window.alert("Attention, une seul lettre");
    }else{
        guessLetter(message);
        window.alert(lettre);
    }
    if(bonjour.join('') == lettre.join('')){
        alert("Bien joué, tu as trouvé le mot 'BONJOUR' !!!")
    }
});





