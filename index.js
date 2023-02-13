let tijelas = [
     {id:1,
        nome:"tijela pequena",
        preco:9.99,
        img:"https://cdn.discordapp.com/attachments/1073655592876527627/1073658482676482088/sorvete-brasileiro-de-acai-congelado-em-copo-plastico-com-morango-isolado-no-fundo-branco-vista-frontal-do-menu-de-verao_317399-989.png"},

     {id:2,
        nome:"tijela média",
         preco:14.99},
         {
            id:3,
            nome:"tijela grande",
             preco:19.99},
             {
                id:4,
                nome:"tijela extra grande",
                 preco:29.99}
    ];

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
