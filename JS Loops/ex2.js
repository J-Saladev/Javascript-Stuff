//vvvvvvvvvv EX 2
function aproxSize(){
    console.log("Hello");
    let organism = document.getElementById("organism");
    let percent = document.getElementById("percent");
    let multiply = document.getElementById("multiply");
    let table = document.getElementById("table");
    organism = parseInt(organism.value);
    percent = (parseInt(percent.value) / 100)+1;
    multiply = parseInt(multiply.value);
    table.innerHTML += `<tr><td>${organism}</td><td>1</td></tr>`;

  
    for (let i = 2; i <= multiply; i++) {

        organism = organism * percent;

        table.innerHTML += `<tr><td>${Math.round(organism)}</td><td>${i}</td></tr>`;
    }   
}
let numorg = document.getElementById("multiply");
numorg.addEventListener("change", aproxSize);
// ^^^^^^^^^ EX 2