let toppings = [];

function finalizeOrd(e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        form.reportValidity();
        return;
    }
    
    localStorage.clear();
     let dateobj = new Date();
     let month = dateobj.getUTCMonth();
     let year = dateobj.getUTCFullYear();
     let day = dateobj.getUTCDate();
     let hours = dateobj.getUTCHours();
     let minutes = dateobj.getUTCMinutes();
     let dayTime = hours + ":" + minutes;
     newdate  = month + "-" + day + "-" + year;
     let result = document.getElementById("result");
     result.innerHTML = "";
     console.log(newdate);
     result.innerHTML += `<h4 class="text-center">Date of order is ${dayTime}, ${newdate} <h4>`; ;
    //  ^^^^^^^ Date ^^^^^^^^^^^^
    let size = document.getElementById("size").value;
    switch (size) {
        
        case "small":
            size = "Small";
            sizeprice = 5.00;
            break;
        case "medium":
            size = "Medium";
            sizeprice = 7.00;
            break;
        case "large":
            size = "Large";
            sizeprice = 10.00;
            break;
        default:
            break;
    }
    let scoops = document.getElementById("scoops").value;
    let flavor = document.getElementById("flavor").value;
    let toppings = document.getElementsByName("toppings");
    let topprice = parseInt(toppings.length) * 1.50;
    switch (flavor) {
        case "van":
            flavor = "Vanilla";
            price = 1.50;
            break;
        case "choc":
            flavor = "Chocolate";
            price = 2.00;
            break;
        case "mint":
            flavor = "Mint";
            price = 2.00;
            break;
        default:
            break;
    }
        
        result.innerHTML += `<h5 class="text-center">You ordered a ${size} ${flavor} ice cream with ${scoops} scoops. With these toppings:</h5>`;
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            let topping = toppings[i].value;

            result.innerHTML += `<h5 class="text-center">${topping}<h5>`;
        }
        
}
let finalprice = (sizeprice) * scoops + topprice + price;
result.innerHTML += `<h4 class="text-center">Your total is $${finalprice.toFixed(2)}<h4>`;
    
}