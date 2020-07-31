const marca=document.getElementById('marca');
const seguro=document.getElementById('cotizar-seguro');
const anio=document.getElementById('anio');

function principal(marca,anio,tipo)
{
    this.marca=marca;
    this.anio=anio;
    this.tipo=tipo;
    
}

principal.prototype.posd=function(){
let precio=2000;
    let cantidad
    switch (this.marca) {
        case '1':
            cantidad=precio*1.15
            break;
            case '2':
            cantidad=precio*1.05
            break;
            case '3':
            cantidad=precio*1.35
            break;
    }
    
    let diferencia;
    diferencia=new Date().getFullYear()-this.anio;
    
    cantidad-=((diferencia*3)*cantidad)/100
    if(this.tipo==='basico'){
        cantidad*=1.30
    }

    else{cantidad*=1.50}
console.log(cantidad)
    return cantidad
}

principal.prototype.mostra=function(resultados){
    let marcas;
    console.log(this.marca)
    let anio=this.anio
    let tipo=this.tipo;
    switch (this.marca) {
        case '1':
            marcas='americano'
            break;
            case '2':
            marcas='asiatico'
            break;
            case '3':
            marcas='europeo'
            break;
    }
    const img=document.querySelector('#cargando img');

    img.style.display='block';
  const div=document.createElement('div');
  setTimeout(function(){
    img.style.display='none';

div.innerHTML=`<ul><li>Marca: ${marcas}</li>
              <li>Tipo: ${tipo}</li>
              <li>Anio: ${anio}</li> 
              <li>Precio: ${resultados}</li> </ul>`;
              const resultado=document.getElementById('resultado');
              resultado.appendChild(div);
  },3000)


}

function dos (){

}

dos.prototype.mostrarerrores=function (mensaje,tipos){
    const div=document.createElement('div');
    if(tipos==='error'){

    div.classList.add('mensaje','error')
}

    else{div.classList.add('mensaje','correcto')}
    div.innerText=`${mensaje}`;
    seguro.insertBefore(div,document.querySelector('.form-group'))
    setTimeout(()=>{
    div.remove()

    },3000)
}

seguro.addEventListener('submit',()=>{
    const dosa=new dos();
    let aniosele;
    let marcasele;
    let tipo;
    aniosele=anio.options[anio.selectedIndex].value;
    marcasele=marca.options[marca.selectedIndex].value
    tipo=document.querySelector('input[name="tipo"]:checked').value
    if(aniosele === '' || marcasele === '' || tipo === '' ){
        dosa.mostrarerrores('inserte datos correcto','error')
    }
    
    else{dosa.mostrarerrores('datos correcto','completo')
        let we=new principal(marcasele,aniosele,tipo);
        let resultado=we.posd();
        we.mostra(resultado);
    }
})


function inicio(){
const max=new Date().getFullYear();

const min=max-20;
const anio=document.getElementById('anio');

for(let i=max; i>min; i--){
const option=document.createElement('option');
option.value=i;
option.innerHTML=i;
anio.appendChild(option);
}

}
inicio()