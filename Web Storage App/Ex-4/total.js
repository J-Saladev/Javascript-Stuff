function  displayInfo(){
    let order = JSON.parse(localStorage.getItem("order"));
    console.log(order);
    document.getElementById("fname").innerHTML = order.firstname;
    document.getElementById("total").innerHTML = order.totalprice;
    document.getElementById("country").innerHTML = order.country;
    document.getElementById("bean").innerHTML = order.bean;
    document.getElementById("rice").innerHTML = order.rice;
    document.getElementById("meat").innerHTML = order.meat;
    document.getElementById("veggie").innerHTML = order.veggie;
    document.getElementById("bPrice").innerHTML = order.beanprice;
    document.getElementById("rPrice").innerHTML = order.riceprice;
    document.getElementById("vPrice").innerHTML = order.veggieprice;
    document.getElementById("mPrice").innerHTML = order.meatprice;
    document.getElementById("fullname").innerHTML = order.fullname;
    document.getElementById("payment").innerHTML = order.payment;
    document.getElementById("location").innerHTML = order.orderlocation;
}
onload = displayInfo();

let button = document.getElementById("print");
button.addEventListener("click", function(){
    window.location.href = "index.html";
})