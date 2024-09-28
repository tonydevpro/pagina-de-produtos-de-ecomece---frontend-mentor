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

let adicionar = document.getElementById('addCar').addEventListener('click', ()=>{
    let caixaMenu = document.getElementById('carrinho-menu');
    

    caixaMenu.innerHTML = `<div id="carrinho-cheio">
    <div id="carrinho-pedido">
        <img src="./img/image-product-1-thumbnail.jpg" alt="imagem de um tenis">
        <P>Tenis edição limitada de outono <br> $125,00 x ${numeroItens} <span><b>$${125*numeroItens}</b></span></P>
        <button id="excluir" ><i class="fa-solid fa-square-xmark"></i></button>
    </div>
    <button id="comprar" ><b>Comprar</b></button>
</div>`;

let excluir = document.getElementById('excluir').addEventListener('click', ()=>{
    
    caixaMenu.innerHTML =`<div id="carrinho-menu"> 
            <h3>seu carrinho está vazio.</h3>
        </div>`
    })
})

