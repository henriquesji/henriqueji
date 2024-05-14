listaProduto = [
  {
  "nome": "Luva tira pelos cães/gatos",
  "img":"luva.jpg",
   "descrição":"Remove o excesso de pelo de  seu pet",
   "idi":"",
  "R$": "15,00"
  },
  {
    "nome": "Canopla de Pelúcia",
      "img":"canopla.jpg",
       "idi":"",
      "descrição":"Brinquedo de pelúcia cães",
      "R$": "25,00"
     },
  {
  "nome": "Tapete Quente",
  "img":"tapete.jpg",
   "descrição":"Patricidade para proteger seu pet  das noites frias",
   "idi":"",
  "R$": "20,00"
 },
  {
  "nome": "Comedouro Inox cães",
    "img":"20240111_102903.jpg",
     "idi":"VENDIDO",
    "descrição":"comedouro em INOX",
    "R$": "35,00"
   },
  {
    "nome": "Comedouro PopCorn cães",
      "img":"20240112_111613.jpg",
       "descrição":"Linda estampa de comedouro",
    "idi":"",
      "R$": "15,00"
     },
  
   {
    "nome": "Bebedouro pelos Longos cães",
    "img":"20240111_154056.jpg",
     "descrição":"Ideal para cães de pelos longos",
     "idi":"",
      "R$": "15,00"
     },
  {
  "nome": "Bolsa Confort",
  "img": "bolsa-confort.jpg",
  "descrição": "Linda Bolsa reforçada com guia interna, com tecido reforçado",
    "idi":"",
  "R$": "150,00"
 },

 {
  "nome": "Areia Pipicat -Classic 4Kg",
  "img": "areiaPipicatClassic.jpg",
  "descrição": "Areia classic",
  "idi":"VENDIDO",
  "R$": "10,00"

 },
  {  
    "nome": "Coleira de Gato",
      "img": "20240111_160428.jpg",
      "descrição":"Coleira para gatos -últimas unidades",
    "idi":"",
      "R$": "5,00"
     },
 {
  "nome": "Alcool Gel",
  "img": "alcoolGel.jpg",
  "descrição":"Alcool Gel , pratico,  2  unidades  pelo valor de 1. ",
   "idi":"",
  "R$": "5,00"

 },
  {
    "nome": "Almofada Gatos",
    "img": "20240111_155415.jpg",
    "descrição":"Sua Almofada  linda, seja gateiro(a)! -01 peça",
    "idi":"",
    "R$": "30,00",

   },
  
 {
  "nome": "Almofada Pet",
  "img": "almofada-pet.jpg",
  "descrição": "Lindas almofadas para emebelezar seu sofá com estampas de seu pet favorito  (cães/gatos)",
   "idi":"",
  "R$": "30,00",

 },
 {
  "nome": "Bolsa",
  "img": "20240110_131718.jpg",
  "descrição": " Excelente bolsa com linda estampa",
    "idi":"",
  "R$": "25,00",

 },
 {
  "nome": "Bola com Guizo Gatos",
  "img": "bolaGuizo.jpg",
  "descrição": "Bola com guizo para gatos , unidade ",
    "idi":"",
  "R$": "5,00",
 },
  {
    "nome": "Casinha de Passaros",
    "img": "casinha.jpeg",
   "descrição":"Madeira ,Telhado com plástico reciclável)*PRODUTO SUSTENTÁVEL*",
    "idi":"",
      "R$": "55,00",
 },
   {
    "nome": "Brinquedo Bola com tecido",
    "img": "20240111_103600.jpg",
    "descrição": "Ajuda na limpeza dos dentes , super macio .CÓDIGO:70452",
      "idi":"",
    "R$": "15,00"

   },
]
listaProduto.map((produto) => {
 let cardProduto = document.getElementById("cards");
  let priceColor =produto["idi"]=="VENDIDO"?'color:red; font-weight:bold': '';
 cardProduto.innerHTML += `<div class="col-md-4">
 <div class="card">
 <img src="${produto.img}" class="card-img-top" alt="foto produto">
 <div class="card-body">
 <h5 class="card-title">${produto.nome}</h5>
 <p class="card-text" style="${priceColor}">${produto.idi}</p>
 <p class="card-text">${produto.descrição}</p>
 <p class="card-text">R$: ${produto.R$}</p>






 <button onclick="window.open('https://api.whatsapp.com/send?phone=553584475665&text=Olá , quero comprar este produto, informarei  meus dados,endereço e os dados do  produto comprado:')">Abrir WhatsApp</button>
 </div>
 </div>
 </div>
 `;

})
document.write("<center>LISTA DE PRODUTOS EM ESTOQUES :<br> ");
for(I = 0; I < listaProduto.length; I++){
document.write(listaProduto[I].nome+"<br>");
}
