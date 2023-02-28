let tigelas = [
  {id:1,
    nome:"Tigela Pequena 250g",
    preco:9.99,
    img:"https://cdn.discordapp.com/attachments/1073655592876527627/1073658482676482088/sorvete-brasileiro-de-acai-congelado-em-copo-plastico-com-morango-isolado-no-fundo-branco-vista-frontal-do-menu-de-verao_317399-989.png"
  },
  
  {id:2,
    nome:"Tigela Media 500g",
    preco:19.99,
    img:"https://cdn.discordapp.com/attachments/1073655592876527627/1073655625898279002/e3354c05a75f8cd0a76f6a97768d288f.png"
  },

  {id:3,
    nome:"Tigela Grande 800g",
    preco:29.99,
    img:"https://img.freepik.com/fotos-premium/acai-congelado-brasileiro-com-morango-e-banana-em-uma-tigela-branca-isolada-no-fundo-branco_317399-731.jpg?w=2000",  
  },

  {id:4,
    nome:"Tigela XL 1kg",
    preco:39.99,
    img:"https://cdn.discordapp.com/attachments/1073655592876527627/1073660205499424869/image-removebg-preview.png"
  },    
];
let state = "sacola"
let pedido_finalizado = ''
let lista_pedidos = []
//verifica o estado da aplicação  e renderiza de acordo 
function render(){
  
  let renderItem = ''
  let app = document.querySelector('.App')
  if(state == "novoPedido"){
    let elementoBtn = document.querySelector(".container__compra-botao")
    elementoBtn.classList.toggle('esconder')
  }
  else{
    let elementoBtn = document.querySelector(".container__compra-botao")
    elementoBtn.classList.remove('esconder')
  }
  if(state == "sacola"){
    let app_sacola = document.querySelector('#pedidos')
    app_sacola.innerHTML = renderizarSacola()
  }
  if(state == 'novoPedido'){
    let app_sacola = document.querySelector('#pedidos')
    app_sacola.innerHTML = `<div class="container__menu">

    <div class="container__toppings">
        <div class="container__titulos-toppings">
            <h3 class="container__titulo"> Tigelas </h3>
            <h5 class="container__texto">Selecione 1 opção</h5>
        </div>
        <label for="tigelaP"><input type="checkbox" name="1" id="tigelaP" class = "tigela input-item"> Tigela Pequena 250g </label>
        
        <label for="TigelaM"><input type="checkbox" name="2" id="TigelaM" class = "tigela input-item"> Tigela Média 500g</label>
       
        <label for="TigelaG"><input type="checkbox" name="3" id="TigelaG" class = "tigela input-item"> Tigela Grande 800g </label>
        
        <label for="TigelaXL"><input type="checkbox" name="4" id="TigelaXL" class = "tigela input-item"> Tigela XL 1KG</label>
        
    </div>

    <div class="container__toppings">
        <div class="container__titulos-toppings">
            <h3 class="container__titulo">Mix toppings</h3>
            <h5 class="container__texto">É possível adicionar até 3 opções</h5>
        </div>
        <label for="cereja"><input type="checkbox" name="  cereja" id="cereja" class = 'adicionais'> Cereja</label>
        
        <label for="chocoball"><input type="checkbox" name=" chocoball" id="chocoball" class = 'adicionais'> Chocoball</label>
       
        <label for="gotas-chocolote"><input type="checkbox" name=" gotas de chocolate" id="gotas-chocolate" class = 'adicionais'> Gotas de chocolate</label>
        
        <label for="jujuba"><input type="checkbox" name=" jujuba" id="jujuba" class = 'adicionais'> Jujuba</label>
        
        <label for="leite-po"><input type="checkbox" name=" leite em pó" id="leite-po" class = 'adicionais'> Leite em pó</label>
        
        <label for="m&m"><input type="checkbox" name=" m&m's" id="m&m" class = 'adicionais'> M&M'S</label>
        
        <label for="ovomaltine"><input type="checkbox" name=" ovomaltine" id="ovomaltine" class = 'adicionais'> Ovomaltine</label>
    </div>
    <div class="container__cremes">
        <div class="container__titulos-cremes">
            <h3 class="container__titulo">Cremes</h3>
            <h5 class="container__texto">É possível adicionar apenas 1 opção</h5>
        </div>
        
        <label for="creme-cupuaçu"><input type="checkbox" name=" creme cupuaçu" id="creme-cupuaçu" class = 'creme'> Creme cupuaçu</label>
        
        <label for="creme-morango"><input type="checkbox" name=" creme de morango" id="creme-morango" class = 'creme'> Creme de morango</label>
        
        <label for="creme-ninho"><input type="checkbox" name=" creme de ninho" id="creme-ninho" class = 'creme'> Creme de ninho</label>
        
        <label for="creme-ovomaltine"><input type="checkbox" name=" creme de ovomaltine" id="creme-ovomaltine" class = 'creme'> Creme de ovomaltine</label>
        
        <label for="sem-creme"><input type="checkbox" name=" sem creme" id="sem-creme" class = 'creme'> Sem creme</label>
    </div>
    <div class="container__frutas">
        <div class="container__titulos-frutas">
            <h3 class="container__titulo">Frutas</h3>
            <h5 class="container__texto">É possível adicionar até 2 opções</h5>
        </div>
        
        <label for="banana"><input type="checkbox" name=" banana" id="banana" class = 'frutas'> Banana</label>
        
        <label for="castanha"><input type="checkbox" name=" castanha" id="castanha" class = 'frutas'> Castanha</label>
        
        <label for="kiwi"><input type="checkbox" name=" kiwi" id="kiwi" class = 'frutas'> Kiwi</label>
        
        <label for="morango"><input type="checkbox" name=" morango" id="morango" class = 'frutas'> Morango</label>
        
        <label for="uva"><input type="checkbox" name=" uva" id="uva" class = 'frutas'> Uva</label>
    </div>
</div>
<div class="container__botao-finalizacao">
    <button type="submit" class="botao-finalizacao" onclick = 'criaPedido()'>
      <!-- <img src="../../assets/icones/check-icone.png" class="icone__finalizacao"/> -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icone__finalizacao">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      Finalizar Pedido
    </button>
</div>`
  }
  if(state == "promocoes"){
    let app_sacola = document.querySelector('#pedidos')
    app_sacola.innerHTML = ` <h1 class="titulo-principal">Promoções</h1>

    <ul class="item-promocao">
        <li>• Quinta do açaí</li>
        <p>Todas as quintas-feiras o KG do açaí tem 15% e 
            a taxa de entrega grátis.</p>
    </ul>
`
  }
  if(state == "finalizarPedido"){
    let app_sacola = document.querySelector('#pedidos')
    app_sacola.innerHTML = `<form class="formulário">

    <h2 class="formulário__titulo">DADOS PARA ENTREGA</h2>
    <div class="formulário__dados">
        <div>
            <div class="formulário__item">
                <label class="item" for="nome">Nome</label>
                <input class="formulário__resposta" type="text" id="nome" placeholder = "Seu nome">
            </div>

            <div class="formulário__item">
                <label class="item" for="endereco">Endereço</label>
                <input class="formulário__resposta" type="text" id="endereco" placeholder = "Local">
            </div>

            <div class="formulário__item">
                <label class="item" for="ponto-referencia">Ponto de referência</label>
                <input class="formulário__resposta" type="text" id="ponto_refencia" placeholder = "Referência">
            </div>

            <div class="formulário__item-flex">
                <div class="item-flex">
                    <label class="item" for="telefone">Telefone</label>
                    <input class="formulário__resposta" type="text" id="telofone" placeholder = "(XX) XXXXX-XXXX">
                </div>
                <div class="item-flex">
                    <label class="item forma-pagamento" for="forma-pagamento" >pagamento</label>
                    <input class="formulário__resposta" type="text" id="forma-pagamento"placeholder = "forma de pagamento" >
                </div>
            </div>
        </div>
    
        <div class="btn">
            <a href="#" class="botao__finalizar" onclick = "setStatePedidoFinalizado()">Confirmar entrega</a>
        </div>

    </div>
</form>`
  }
  if(state == "pedidoFinalizaado"){
    let app_sacola = document.querySelector('#pedidos')
    app_sacola.innerHTML = ` <section class="container">
    <div class="container__caixa">
        <div class="container__inicio">
            <p class="descricao__inicio">Pedido finalizado com sucesso</p>
            <img class="imagem__inicio" src="check-o.svg" alt="Logo de check">
        </div>
        <div class="container__final">
            <img class="imagem__final" src="imagem.svg" alt="Imagem de um motoboy fazendo entragas">
            <div class="link__voltar">
                <a href="#" class="link__final" onclick = "setStateSacola()">
                    Voltar ao menu
                </a>
            </div>
        </div>
    </div>
</section>`
  }
  
}
          
function renderizarSacola(){
  let render_total_sacola = ''
  if(lista_pedidos.length == 0){
    render_total_sacola = "Não há nenhum pedido!"

  }
  else{
    for(let i = 0;i<lista_pedidos.length;i++){
      let sacola = `
       <div class="container__pedido">
        <img src="${lista_pedidos[i].img}" alt="" class "img-card">
        <div class="container__paragrafo">
            <h1>${lista_pedidos[i].nome}</h1>
            <p class="adicionais">${lista_pedidos[i].adicionais}</p><br>
            <p class="preco">R$ ${lista_pedidos[i].preco}</p>
            <p class="excluir" onclick="deletaPedido(${lista_pedidos[i].id})">Excluir pedido</p>
        </div></div>`
  
        render_total_sacola += sacola
       
    }
  }
  
  return render_total_sacola
}

function setStateSacola(){
  state = 'sacola'
  render()
}
function setStatePedido(){
  state = 'novoPedido'
  render()
}

function setStatePromocoes(){
  state = 'promocoes'
  render()
}

function setStateFinalizar(){
  state = 'finalizarPedido'
  render()
}

function setStatePedidoFinalizado(){
  state = 'pedidoFinalizaado'
  pedido_finalizado = 'Pedido Finalizado'
  render()
}




function criaPedido(){
  let tigelas_local = document.querySelectorAll(".tigela")
  let toppings = document.querySelectorAll(".adicionais")
  let cremes = document.querySelectorAll(".creme")
  let frutas = document.querySelectorAll(".frutas")
  let lista_adicionais = []
  let lista_erro = [filtrarQuantidade(1,"tigela"), filtrarQuantidade(3,"adicionais"), filtrarQuantidade(2,"creme"), filtrarQuantidade(2,"frutas")]
  erro = false

  for (let item of lista_erro) {
    if(item == false){
      erro = true
      
    }
  }

  console.log(erro);

 if( erro == true){
  alert("Preencha os campos corretamemte...")
 }
else{
  
  for(item of tigelas_local){
    if(item.checked == true){
      var tigela = tigelas.filter( k => k.id == item.name)[0]
    }
  }
  
  for(item of toppings){
    if(item.checked == true){
      lista_adicionais.push(item.name)    }
  }
  for(item of cremes){
    if(item.checked == true){
      lista_adicionais.push(item.name)    }
  }
  for(item of frutas){
    
    if(item.checked == true){
      lista_adicionais.push(item.name)
    }
  }

  let pedido = {
    id: lista_pedidos.length + 1,
    nome: tigela.nome,
    preco: tigela.preco,
    img: tigela.img,
    adicionais:lista_adicionais
  }
  lista_pedidos.push(pedido)
  setStateSacola()
  render()
}
}

function deletaPedido(id){
  newLista = lista_pedidos.filter((n)=> n.id != id)
  lista_pedidos = newLista
  render()
}

function filtrarQuantidade(qtdMax,classes){
 let erro = false
 let listaElementos = document.querySelectorAll(`.${classes}`)
 let listaElementosChecked = [];
 for (let item of listaElementos) {
  listaElementosChecked.push(item.checked)
 }
 let qtd = 0
 for (let item of listaElementosChecked) {
  if (item == true) {
   qtd++
  }
 }
 if(qtd > qtdMax){
  return false
 }
 else{
  return true
 }


 //ate aqui
console.log(listaElementosChecked,qtd);
  
}

render()


