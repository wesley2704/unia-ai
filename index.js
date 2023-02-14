let tijelas = [
  {id:1,
    nome:"Tijela pequena 250g",
    preco:9.99,
    img:"https://cdn.discordapp.com/attachments/1073655592876527627/1073658482676482088/sorvete-brasileiro-de-acai-congelado-em-copo-plastico-com-morango-isolado-no-fundo-branco-vista-frontal-do-menu-de-verao_317399-989.png"
  },
  
  {id:2,
    nome:"Tijela media 500g",
    preco:19.99,
    img:"https://cdn.discordapp.com/attachments/1073655592876527627/1073655625898279002/e3354c05a75f8cd0a76f6a97768d288f.png"
  },

  {id:3,
    nome:"Tijela grande 800g",
    preco:29.99,
    img:"https://img.freepik.com/fotos-premium/acai-congelado-brasileiro-com-morango-e-banana-em-uma-tigela-branca-isolada-no-fundo-branco_317399-731.jpg?w=2000",  
  },

  {id:4,
    nome:"Tijela XL 1kg",
    preco:39.99,
    img:"https://cdn.discordapp.com/attachments/1073655592876527627/1073660205499424869/image-removebg-preview.png"
  },    
];
let state = "sacola"
let lista_pedidos = [
  {
    nome: tijelas[1].nome,
    preco: tijelas[1].preco,
    img: tijelas[1].img,
    adicionais:["jujuba", "chocoboll","creme de ninho"]

  },
  {
    nome: tijelas[2].nome,
    preco: tijelas[2].preco,
    img: tijelas[2].img,
    adicionais:["jujuba", "chocoboll","creme de ninho"]

  },
  {
    nome: tijelas[3].nome,
    preco: tijelas[3].preco,
    img: tijelas[3].img,
    adicionais:["jujuba", "chocoboll","creme de ninho"]

  },
]

function render(){
  
  let renderItem = ''
  let app = document.querySelector('.App')
  if(state == "sacola"){
    let app_sacola = document.querySelector('#pedidos')
    app_sacola.innerHTML = renderizarSacola()
  }
}
function renderizarSacola(){
  let render_total_sacola = ''
  if(lista_pedidos.length == 0){
    render_total_sacola = "Não há nenhum pedido!"
    return
  }
  for(let i = 0;i<lista_pedidos.length;i++){
    let sacola = `
     <div class="container__pedido">
      <img src="${lista_pedidos[i].img}" alt="" class "img-card">
      <div class="container__paragrafo">
          <h1>${lista_pedidos[i].nome}</h1>
          <p class="adicionais">${lista_pedidos[i].adicionais}</p><br>
          <p class="preco">R$ ${lista_pedidos[i].preco}</p>
      </div></div>`

      render_total_sacola += sacola
     
  }
  
  return render_total_sacola
}

render()  