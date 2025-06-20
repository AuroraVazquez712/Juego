let texto_inp=document.getElementById("texto-input");
let busca_inp=document.getElementById("busca-input");
let eject_bot=document.getElementById ("buscar-btn");
let resul_pant=document.getElementById("result-pantalla");

eject_bot.addEventListener('click',function(){
    
    let texto = texto_inp.value;
    let buscar = busca_inp.value;
    //Convertir a minúsculas
    let texto_min = texto.toLowerCase();
    let buscar_min = buscar.toLowerCase();
    let i=0;
    let separa=texto_min.split(buscar_min);
    let cont=separa.length-1;
    let coincidencias =[];
    
    while(i< texto_min.length && i!=-1)
    {
        i=texto_min.indexOf(buscar_min,i);
        if(i!=-1){
            resul_pant.innerHTML += i + ",";
            coincidencias.push(texto.substring(i, i + buscar.length));
            i++;
        }
    }
    resul_pant.innerHTML += `Palabras encontradas: ${coincidencias.join(", ")}`;
    resul_pant.innerHTML += "Total de coincidencias: " + cont;
});