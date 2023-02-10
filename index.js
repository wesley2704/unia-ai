let tijelas = [{
    id:1,
    nome:"tijela pequena",
     preco:9.99},
     {
        id:2,
        nome:"tijela média",
         preco:14.99},
         {
            id:3,
            nome:"tijela grande",
             preco:19.99},
             {
                id:4,
                nome:"tijela extra grande",
                 preco:29.99},
    ] 
let sacola = []

function criarPedido(tijela,adicionais,){
  let pedido = {
    tijela,
    adicionais
  }
  return pedido
}

function adicionarPedido(tijela,adicionais){
  let novoPedido = criarPedido(tijela,adicionais)
  sacola.push(novoPedido)
}

let div = ""

function renderizarSacola(){
  
}