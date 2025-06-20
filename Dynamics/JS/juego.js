let texto_inp=document.getElementById("texto-input");
let busca_inp=document.getElementById("busca-input");
let eject_bot=document.getElementById ("buscar-btn");
let resul_pant=document.getElementById("result-pantalla");

eject_bot.addEventListener('click',function(){
        console.log("hola");

    let texto = texto_inp.value;
    let buscar = busca_inp.value;
    let i=0;
    let separa=texto.split(buscar);
    let cont=separa.length-1;
    
    while(i< texto.length && i!=-1)
    {
        i=texto.indexOf(buscar,i);
        if(i!=-1){
            resul_pant.innerHTML += i + ",";
            i++;
        }
    }

    resul_pant.innerHTML += "Total de coincidencias: " + cont;
});