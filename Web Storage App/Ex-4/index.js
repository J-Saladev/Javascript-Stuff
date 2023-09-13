function submitInfo(e){
    e.preventDefault();
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        form.reportValidity();
        return;
    }
    localStorage.clear();
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let fullname = firstname + " " + lastname;
    let country = document.getElementById("country").value;
    let bean = document.getElementById("bean").value;
    let rice = document.getElementById("rice").value;
    let meat = document.getElementById("meat").value;
    let veggie = document.getElementById("veg").value;
    let payment = document.getElementsByName("payment");
    for (let i = 0; i < payment.length; i++) {
            if (payment[i].checked) {
                payment = payment[i].value;
            }
    }
    let orderlocation = document.getElementsByName("order");
        
     for (let i = 0; i < orderlocation.length; i++) {
            if (orderlocation[i].checked) {
                orderlocation = orderlocation[i].value;
            }
        }
    console.log (bean, rice, meat, veggie);
    console.log(country);
    bean = parseInt(bean);
    rice = parseInt(rice);
    meat = parseInt(meat);
    veggie = parseInt(veggie);
    let beanprice = bean * 1;
    let riceprice = rice * 2;
    let meatprice = meat * 5;
    let veggieprice = veggie * 3;
    let totalprice = beanprice + riceprice + meatprice + veggieprice;

   
   
    let order = {
        firstname,
        lastname, 
        fullname,
        bean,
        rice,
        meat,
        veggie,
        orderlocation,
        totalprice,
        beanprice,
        riceprice,
        meatprice,
        veggieprice,
        payment,
        country
    };
    console.log (order)
    localStorage.setItem("order", JSON.stringify(order));
    window.location.href = "total.html";
   
}



let country = document.getElementById("country");

country.addEventListener("change", function(){
        $(".hide").slideDown();
    })