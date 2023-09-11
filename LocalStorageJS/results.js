function processResult() {
    showResult();
    finalPrice();
    showMess();
}

function showResult() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    let type = user.type;

    let ppday = "";
    switch (type) {
        case "lux":
            ppday = 1000;
            type = " Luxury Vehicle,";
            break;
        case "sport":
            ppday = 500;
            type = " Sports Vehicle, ";
            type 
            break;
        case "util":
            ppday = 200;
            type = "n Utility Vehicle,";
            break;
        case "econ":
            ppday = 100;
            type = "n Economy Vehicle, ";
            break;
        default:
            alert("error");
            break;
        
    }
    
    localStorage.setItem("ppday", ppday);
    localStorage.setItem("type", type);
    console.log("Show Result Working");
}

function toDate(a) {
    let parts = a.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function finalPrice() {
    let ppday = localStorage.getItem("ppday");
    let user = JSON.parse(localStorage.getItem("user"));
    let pickup = user.pickup;
    let dropoff = user.dropoff;
    let pickdate = toDate(pickup);
    let dropdate = toDate(dropoff);
    let days = (dropdate - pickdate) / (1000 * 60 * 60 * 24);
   
    if (days > 14) {
        ppday = ppday * .9;
    }
    let finalprice = ppday * days;
    localStorage.setItem("days", days);
    localStorage.setItem("finalprice", finalprice);
    console.log("Final Price Working");
}   

 function showMess(){
    let user = JSON.parse(localStorage.getItem("user"));
    let type = localStorage.getItem("type");
    let ppday = localStorage.getItem("ppday");
    let firstname = user.firstname;
    let lastname = user.lastname;
    let fullname = firstname + " " + lastname;
    let days = localStorage.getItem("days");
    let finalprice = localStorage.getItem("finalprice");
    let type2 =  type;
    document.getElementById("fullname").innerHTML = fullname + "!";
    console.log(fullname);
    document.getElementById("car").innerHTML = type;
    document.getElementById("car2").innerHTML = type2;

    document.getElementById("days").innerHTML = days;
    document.getElementById("ppday").innerHTML = ppday;
    document.getElementById("total").innerHTML = finalprice;
    document.querySelector("#pageshow").removeAttribute("hidden");
    if (days > 14){
        document.getElementById("discount").innerHTML = "You got a discount of 10%!";
    }
    console.log("Show Mess Working");
   
 }


window.addEventListener("load", processResult());