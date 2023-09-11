
function doAll(e) {
    localStorage.clear();
    e.preventDefault();
    pizzaSize();
    toppingStuff();
    drinkStuff();
    totalPrice();
}
function pizzaSize() {
    
let psize = document.getElementsByName("size");
for (i = 0; i < psize.length; i++) {
    if (psize[i].checked) {
        psize = psize[i].value;
        localStorage.setItem("size", psize);
        
    }
}
 switch (psize) {
     case "small":
        pizprice = 10;
        type = "Small:";
        break;
     case "medium":
        pizprice = 15;
        type = "Medium:";
        break;
     case "large":
        pizprice = 20;
        type = "Large:";
 }
    let display = (type + " " + "$" + pizprice);
    localStorage.setItem("sizeDisp", display);
    localStorage.setItem("pizprice", pizprice);
    document.getElementById('size').innerHTML = display;
}

function toppingStuff(){
   let checked = document.querySelectorAll('input[name="toppings"]:checked');
   let topping = [];
   checked.forEach(c => {
      topping.push(c.value);
   })
   if (!topping.length > 0) {
      alert("Select at least one topping!");
      return false;
   } 

   let Cheese = topping.includes("cheese");
   console.log(typeof Cheese);
   let Pepperoni = topping.includes("pepperoni");
   let Sausage = topping.includes("sausage");
   let Olives = topping.includes("olives");
   let Anchovies = topping.includes("anchovies");
   let Mushrooms = topping.includes("mushrooms");
   let topprice = 0;
   
   if (Cheese == true) {
       console.log("Cheese");
       document.getElementById('cheesetot').innerHTML = "Cheese - $1 ";
       topprice = topprice + 1;

   } if (Pepperoni == true) {
       console.log("Pepperoni");
       document.getElementById('pepperonitot').innerHTML = "Pepperoni - $2 ";
       topprice = topprice + 2;
   } if (Sausage == true) {
       console.log("Sausage");
       document.getElementById('sausagetot').innerHTML = "Sausage - $4 ";
       topprice = topprice + 4;
   }  if (Olives == true) {
       console.log("Olives");
       document.getElementById('olivestot').innerHTML = "Olives - $3 ";
       topprice = topprice + 3;
   } if (Anchovies == true) {
       console.log("Anchovies");
       document.getElementById('anchoviestot').innerHTML = "Anchovies - $5 ";
       topprice = topprice + 5;
   } if (Mushrooms == true) {
       console.log("Mushrooms");
       document.getElementById('mushroomstot').innerHTML = "Mushrooms - $6 ";
       topprice = topprice + 6;
   }
console.log(topprice);
localStorage.setItem("topprice", topprice);



   
}

function drinkStuff(){
    let sodacan = document.getElementById("sodacan").value;
    let soda20 = document.getElementById("soda20").value;
    let water20 = document.getElementById("water20").value;
    let lemonade20 = document.getElementById("lemonade20").value;

    let sodaprice = sodacan * 1;
    let soda20price = soda20 * 2;
    let water20price = water20 * 1;
    let lemonade20price = lemonade20 * 2;

    let drtotal = sodaprice + soda20price + water20price + lemonade20price;
    localStorage.setItem("drtotal", drtotal);
    document.getElementById("drinkstot").innerHTML = "Drinks: $" + drtotal;
}

function totalPrice (){
    let drtotal = localStorage.getItem("drtotal");
    drtotal = parseFloat(drtotal);

    let piztotal = localStorage.getItem("pizprice");
    piztotal = parseFloat(piztotal);

    let topprice = localStorage.getItem("topprice");
    topprice = parseFloat(topprice);
    let tax = 0.07;
    let total = parseFloat(drtotal + piztotal + topprice);
    let taxtotal = total * tax;
    total = total + taxtotal;
    document.getElementById("tax").innerHTML = "Tax: $" + taxtotal.toPrecision(2);
    document.getElementById("subtotal").innerHTML = "Price After Tax: $" + total.toPrecision(4);
}
