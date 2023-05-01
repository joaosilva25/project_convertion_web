const img=document.querySelector(".conteudo");
const button=document.querySelector(".alternate_dklght");
const input=document.querySelector("input");
const view=document.querySelector(".view");
const clear=document.querySelector(".clear");

function alternate() {
    if (img.classList.contains('conteudo') && button.classList.contains('alternate_dklght')){
        img.classList.replace('conteudo','conteudo_lght');
        button.classList.replace('alternate_dklght','alternate_lght');
        button.innerText='dark';
        
    }
    else {
        img.classList.replace('conteudo_lght','conteudo');
        button.classList.replace('alternate_lght','alternate_dklght');
        button.innerText='light';
    }
}


function convertion_KC() {
    let value=input.value;
    let valueformat=parseFloat(value)-273.15;
    let res= valueformat.toFixed(2);

    view.innerHTML=`<p>${res}°C<p>`
}

function convertion_CK() {
    let value=input.value;
    let valueformat=parseFloat(value)+273.15;
    let res= valueformat.toFixed(2);

    view.innerHTML=`<p>${res}K<p>`
}


function clean() {
    view.innerHTML="";
}