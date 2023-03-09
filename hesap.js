
//    ******** Birazdaha işlevsellik üzerine çalişilacak   *********** 

const düğme = document.getElementsByTagName("button");
//console.log(düğme);
const ekrann = document.getElementById("ekran2");

const temizlee = document.getElementById("temizle");

const hesap = document.getElementById("hesapla");

for(let i =0; i<düğme.length; i++){
    if(i != 7 && i != 11 && i != 15 && i != 18)
    {
      düğme[i].addEventListener("click",yazdir)
    }
    }

function yazdir(){
    ekrann.value = ekrann.value + this.value
}

temizlee.addEventListener("click",temiizle)

function temiizle(){
    ekrann.value=" ";
}

hesap.addEventListener("click",hesapp)

function hesapp(){
    ekrann.value = eval(ekrann.value);
}