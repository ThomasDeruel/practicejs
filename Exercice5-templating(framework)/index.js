/* Creation d'une data base */
  var produits =[{
    image:"product1.png",
    title: "mac",
    price: 1200,
    quantity:0,
    total:0
  },{
    image:"product2.jpg",
    title: "Mac deux",
    price: 2700,
    quantity:0,
    total:0
  },{
    image:"product3.jpg",
    title: "Windows",
    price: 799,
    quantity:0,
    total:0
    }
]
/* Création d'un composant(class) */
var VueProduit = function(produit){
  this.produit = produit; //this.monelement
  this.element = document.createElement('div');
  this.element.className ="container";
}
/* création d'une fonction*/
VueProduit.prototype ={
    render:function(){

      var source = document.querySelector('#produit').innerHTML;
      var template = Handlebars.compile(source);

      for (let i = 0; i < this.produit.length; i++) {
      this.element.innerHTML += template(this.produit[i]);
    }
  }
}
/* Appel du composant + de la fonction*/
var vueproduit = new VueProduit(produits);
vueproduit.render();
/*affichage du rendu*/
document.querySelector('.body').appendChild(vueproduit.element);
