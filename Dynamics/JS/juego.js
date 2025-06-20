document.addEventListener('DOMContentLoaded', function() 
{
    
    const contadorBtn= document.getElementById("contadorBtn");
    const acronimoBtn= document.getElementById("acronimoBtn");
    const buscadorBtn= document.getElementById("buscadorBtn");

    
    const busq=document.querySelector(".Buscador");       
    const acro=document.querySelector(".Acronimo"); 
    const cont=document.querySelector(".Contador");       

    busq.style.display ="none";
    acro.style.display ="none";
    cont.style.display ="none";
    busq.style.display ="block";


    acronimoBtn.addEventListener("click",()=> 
    {
        acro.style.display ="block"; 
        busq.style.display ="none";  
        cont.style.display ="none";  
    });

    buscadorBtn.addEventListener("click",()=> 
    {
        acro.style.display ="none";  
        busq.style.display ="block"; 
        cont.style.display ="none";  
    });

    contadorBtn.addEventListener("click", ()=> 
    {
        acro.style.display ="none";  
        busq.style.display ="none";  
        cont.style.display ="block"; 
    });


    let texto_inp=document.getElementById("texto-input");
    let busca_inp=document.getElementById("busca-input");
    let eject_bot=document.getElementById ("buscar-btn");
    let resul_pant=document.getElementById("result-pantalla-buscador");

    eject_bot.addEventListener('click',function()
    {
            console.log("hola");

        let texto = texto_inp.value;
        let buscar = busca_inp.value;
        let i=0;
        let separa=texto.split(buscar);
        let cont=separa.size-1;
        while(i< texto.length && i!=-1)
        {
            i=texto.indexOf(buscar,i);
            if(i!=-1){
                resul_pant.innerHTML += i + ",";
                i++;
            }
        }

        
    });

    // ACRÓNIMOS
    let texto_acro_input=document.getElementById("texto-acronimo");
    let eject_bot_acro=document.getElementById("generar-acronimo-btn");
    let resultadoAcronimoSpan=document.getElementById("resultadoAcronimoSpan");

    eject_bot_acro.addEventListener('click', function() 
    {
        let texto= texto_acro_input.value;
        let cadenas = texto.split(" ");
        let acronimo="";

        for (let i=0; i<cadenas.length; i++) 
        {
            let palabra =cadenas[i]; 
            if (palabra.length>0) 
            {
                let primeraLetra =palabra[0]; 
                acronimo += primeraLetra;
            }
        }
        resultadoAcronimoSpan.textContent=acronimo;
    });

    // Contador
    
});