let eleccion=0;
function opcion1(){
    let candidato1=document.getElementById("candidato1");
    let nombre1=document.getElementById("nombre1");
    candidato1.style.backgroundColor="rgb(248,80,80)";
    nombre1.style.color="white";
    //opcion
    eleccion=1;
    //otro
    let candidato2=document.getElementById("candidato2");
    let nombre2=document.getElementById("nombre2");
    candidato2.style.backgroundColor="rgb(165, 164, 164)";
    nombre2.style.color="black";

    let candidato3=document.getElementById("candidato3");
    candidato3.style.backgroundColor="rgb(165, 164, 164)";
    let nombre3=document.getElementById("nombre3");
    nombre3.style.color="black";
    

}

function opcion2(){
    let candidato2=document.getElementById("candidato2");
    let nombre2=document.getElementById("nombre2");
    candidato2.style.backgroundColor="rgb(248,80,80)";
    nombre2.style.color="white";
    //opcion
    eleccion=2;
    //otro
    let candidato1=document.getElementById("candidato1");
    let nombre1=document.getElementById("nombre1");
    candidato1.style.backgroundColor="rgb(165, 164, 164)";
    nombre1.style.color="black";

    let candidato3=document.getElementById("candidato3");
    candidato3.style.backgroundColor="rgb(165, 164, 164)";
    let nombre3=document.getElementById("nombre3");
    nombre3.style.color="black";

}

function opcion3(){
    let candidato3=document.getElementById("candidato3");
    candidato3.style.backgroundColor="rgb(248,80,80)";
    let nombre3=document.getElementById("nombre3");
    nombre3.style.color="white";
    //opcion
    eleccion=3;
    //otro
    let candidato1=document.getElementById("candidato1");
    let nombre1=document.getElementById("nombre1");
    candidato1.style.backgroundColor="rgb(165, 164, 164)";
    nombre1.style.color="black";

    let candidato2=document.getElementById("candidato2");
    let nombre2=document.getElementById("nombre2");
    candidato2.style.backgroundColor="rgb(165, 164, 164)";
    nombre2.style.color="black";

}

function realizarVoto(){
    const modal = document.getElementById("miModal");
    if(eleccion===0){
        let mensaje=document.getElementById("mensaje");
        mensaje.innerText="Usted no ha elegido a nigún candidato (VOTO NULO)";
    }else if(eleccion===1){
        mensaje.innerText="Usted ha elegido al CANDIDATO 1";
    }else if(eleccion===2){
        mensaje.innerText="Usted ha elegido al CANDIDATO 2";
    }else if(eleccion===3){
        mensaje.innerText="Usted ha elegido al CANDIDATO 3";
    }
    modal.style.display="block";
}

function cerrar(){
    const modal = document.getElementById("miModal");
    modal.style.display = "none";
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("miModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });