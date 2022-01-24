function PromoMarket(){

 //Create a reference for page elements

 var inProduct = document.getElementById("inProduct");
 var inPrice = document.getElementById("inPrice");
 var outAllItem = document.getElementById("outAllItem");
 var outPromoItem = document.getElementById("outPromoItem");


  // get the content of the in and output fields

  var product = inProduct.value;
  var price = Number(inPrice.value);
  
    


  // calculate all itens and discount about third item

  var discount = price * 0.50;
  var calculateItens =  2*price + discount;

   // change the answare content

   outAllItem.textContent = product + " Promo, get 3 for $: " + calculateItens.toFixed(2);
   outPromoItem.textContent = "The last product for just $: " + discount.toFixed(2);

}


// logs an event for the button and load a function

var btCalculatePromo =  document.getElementById("btCalculatePromo");

    btCalculatePromo.addEventListener("click",PromoMarket);