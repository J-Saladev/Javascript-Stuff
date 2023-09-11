const ticketinfo = JSON.parse(localStorage.getItem('ticket'));
onload = showInfo();
function showInfo(){
    switch (ticketinfo.age) {
        case "adult":
            document.getElementById("age").innerHTML = "Adult";
            break;
        case "child":
            document.getElementById("age").innerHTML = "Child";
            break;
    }
    switch (ticketinfo.clss){
        case "eco":
            document.getElementById("class").innerHTML = "Economic";
            break;
        case "stand":
            document.getElementById("class").innerHTML = "Standard";
            break;
        case "lux":
            document.getElementById("class").innerHTML = "Luxury";
            break;    
    }
    switch (ticketinfo.type){
        case "one":
            document.getElementById("type").innerHTML = "One Way";
            break;
        case "round":
            document.getElementById("type").innerHTML = "Round Trip";
            break;
    }
    switch (ticketinfo.depart){
        case "nydep":
            document.getElementById("depart").innerHTML = "New York";
            break;
        case "ladep":
            document.getElementById("depart").innerHTML = "Los Angeles";
            break;
            
    }
    switch (ticketinfo.destination){
        case "nydest":
            document.getElementById("destination").innerHTML = "New York";
            break;
        case "ladest":
            document.getElementById("destination").innerHTML = "Los Angeles";
            break;
        
    }
    document.getElementById("tripdate").innerHTML = ticketinfo.tripdate;
}