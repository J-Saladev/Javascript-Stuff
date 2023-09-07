function fahrTocel() {
    let fahr = document.getElementById("fahrenheit").value;
    fahr = parseFloat(fahr);
    let cel = (fahr - 32) * 5 / 9;
    console.log("It has worked so far");
    console.log("Fahrenheit: " + fahr);
    console.log("Celcius: " + cel);
    let calc = `(${fahr} - 32) * 5 / 9`;
    document.getElementById("cel").innerHTML = cel;
    document.querySelector("#inviscel").removeAttribute("hidden");
    document.querySelector("#inviscalc").removeAttribute("hidden");
    document.querySelector("#calc").innerHTML = calc;
}

function celTofahr() {
    let cel = document.getElementById("celcius").value;
    cel = parseFloat(cel);
    let fahr = (cel * 9 / 5) + 32;
    console.log("It has worked so far");
    console.log("Celcius: " + cel);
    console.log("Fahrenheit: " + fahr);
    calc = `(${cel} * 9 / 5) + 32`;
    document.getElementById("fahr").innerHTML = fahr.toFixed(1);
    document.querySelector("#invisfahr").removeAttribute("hidden");
    document.querySelector("#inviscalc").removeAttribute("hidden");
    document.querySelector("#calc").innerHTML = calc;
}

function switchf() {  
location.href = "ftoc.html";
}

function switchc() {  
   location.href = "index.html";
}
