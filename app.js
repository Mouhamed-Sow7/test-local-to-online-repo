let drop=document.querySelector('.drop');
let sous=document.querySelector('.sous-menu');

// sous-meu
drop.addEventListener('mouseover', function(){
    sous.style.display='block';
})
drop.addEventListener('mouseout', function(){
    sous.style.display='none';
})
sous.addEventListener('mouseover', function(){
    sous.style.display='block';
})
sous.addEventListener('mouseout', function(){
    sous.style.display='none';
})

//fin evenement sous menu 



//evenement image first

let dej=document.querySelector('.dej');

function left(){
    dej.src= "img/hero-3.jpg";
}

function right(){
    dej.src= "img/hero-1.jpg";
}
//fin 

//controle de saisie du formulaire contact

let form =document.querySelector('.formulaire')
let input=document.querySelector('.field');
let passe=document.querySelector('.fiel');
let mail=document.querySelector('.errormail');
let password=document.querySelector('.errorPassword');

form.addEventListener('submit', function(e){

    if(input.value===""){
        mail.innerHTML="le champs est requis";
        mail.style.color='red';
        mail.style.fontSize='13px';
        e.preventDefault();
    }
    if(passe.value===""){
        password.innerHTML="le champs email doit etre saisie";
        password.style.color='red';
        password.style.fontSize='13px';
        e.preventDefault();
    }
});

//fin de controle.
