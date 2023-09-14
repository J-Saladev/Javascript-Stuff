// vvvvvvvvvv EX 1
function ctoF() {
    table = document.getElementById("table");
    

    for (let c = 0; c <= 20; c++ )
{
    let f = c * 9 / 5 + 32;
    table.innerHTML += `<tr><td>${c}</td><td>${f}</td></tr>`

}

}

let celcius = document.getElementById("Celcius");
celcius.addEventListener("click", ctoF);
// ^^^^^^^^^^^ EX 1

