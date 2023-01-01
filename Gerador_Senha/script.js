let slider = document.getElementById("slide");
let btn = document.getElementById('btn');
let valor = document.getElementById('valor');
let resul = document.getElementById('resul');
let conteinerpassword = document.getElementById("conteiner-password");
let click = document.getElementById('click');

let charset = "abcdefghijklmnopqrstuvwfyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novasenha = "";

valor.innerHTML = slider.value;
slider.oninput = function(){
    valor.innerHTML = this.value;
}

function generatorPassword(){
    let pass="";
    for(let i = 0, n = charset.length; i < slider.value; i++ ){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    conteinerpassword.classList.remove("hide");
    resul.innerHTML = pass;
    if(novasenha != ""){
        window.location.reload(true);
    }else{
        novasenha = pass;
    }
}

function copyPassword(){
    alert("copiada com sucesso!!!");
    navigator.clipboard.writeText(novasenha);
}


btn.addEventListener('click', generatorPassword);
conteinerpassword.addEventListener('click', copyPassword);
