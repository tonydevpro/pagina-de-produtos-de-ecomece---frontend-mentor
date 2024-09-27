let btMenos = document.getElementById('menos').addEventListener('click', menos);
let btMais = document.getElementById('mais').addEventListener('click', mais);
let quantidade = document.getElementById('quantidade')
let add = document.getElementById('addCar')
let numeroItens = 0
function menos(){
    if(numeroItens == 0){
        return
    }
    else{
        numeroItens-=1
        quantidade.innerHTML= numeroItens;
            
        }
    }

function mais(){
    numeroItens+=1
    quantidade.innerHTML= numeroItens;
}


let menu = document.getElementById('menu').addEventListener('click', ()=>{
    let caixaMenu = document.getElementById('caixa-menu');
    caixaMenu.style.display = (caixaMenu.style.display === 'none' || caixaMenu.style.display === '') ? 'flex' : 'none';
})