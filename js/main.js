'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const btn = document.querySelector("#firing-button");
const btnCancel = document.querySelector("#cancel-button");
const btnReload = document.querySelector("#reload-button");
let rocket = document.querySelector("#rocket");
let demarre = 10;
let interval;
let timeOut;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function onclickButtonGo(){
    displayTimeNow()
    interval = setInterval(displayTimeNow, 1000);
    rocket.src="images/rocket2.gif";
    btn.classList.add("disabled");
    btnCancel.classList.remove("disabled");
}

function removeButtonGo(){
    btn.classList.remove("disabled");
    btnCancel.classList.add("disabled");
    clearInterval(interval);
    rocket.src="images/rocket1.png";
}

function onclickButtonReload(){
    location.reload();
}

function displayTimeNow(){
    btn.removeEventListener("click", onclickButtonGo);
    display.innerHTML = demarre;
    demarre--;
    if(demarre == -1){
        clearInterval(interval);
        rocket.src="images/rocket3.gif";
        rocket.classList.add("tookOff");
        btnCancel.classList.add("disabled");
        btnCancel.removeEventListener("click", removeButtonGo);
        btnReload.removeEventListener("click", onclickButtonReload);
    }
    console.log(demarre);
}

function etoiles(){
    for (let index = 1; index <= 50; index++) {
        let div = document.createElement("div");
        div.classList.add("star");
        div.classList.add("tiny");
        console.log(div);
        div.style.top = (Math.floor(Math.random()*1855))+"px";
        div.style.left = (Math.floor(Math.random()*1855))+"px";
        document.body.appendChild(div);
    }
    for (let index2 = 1; index2 <= 50; index2++) {
        let div = document.createElement("div");
        div.classList.add("star");
        div.classList.add("normal");
        console.log(div);
        div.style.top = (Math.floor(Math.random()*1855))+"px";
        div.style.left = (Math.floor(Math.random()*1855))+"px";
        document.body.appendChild(div);
    }
    for (let index3 = 1; index3 <= 50; index3++) {
        let div = document.createElement("div");
        div.classList.add("star");
        div.classList.add("big");
        console.log(div);
        div.style.top = (Math.floor(Math.random()*1855))+"px";
        div.style.left = (Math.floor(Math.random()*1855))+"px";
        document.body.appendChild(div);
    }
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
btn.addEventListener("click", onclickButtonGo);
btnCancel.addEventListener("click", removeButtonGo);
btnReload.addEventListener("click", onclickButtonReload);

const display = document.querySelector("#billboard span");
display.innerHTML = demarre;
btnCancel.classList.add("disabled");

console.log(etoiles());
console.log(star);