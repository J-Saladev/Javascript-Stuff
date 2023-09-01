

function hypTr() {
    let a = document.getElementById("sidea");
    let b = document.getElementById("sideb");
    console.log(`A=` + a.value);
    console.log(`B=` + b.value);
    let sidea = parseInt(a.value);
    let sideb = parseInt(b.value);
    console.log(`Side A=` + sidea);
    console.log(`Side B=` + sideb);
    let hyp = Math.sqrt(sidea ** 2 + sideb ** 2);
    console.log(`Hypotenuse=` + hyp);
    document.getElementById("hyp").innerHTML = Math.round(hyp * 100) / 100;    
}

function tme() {
    let a = document.getElementById("seconds");
    console.log(`A=` + a.value)
    let seconds = parseInt(a.value);
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60);
    console.log(`Hours=` + hours);
    console.log(`Minutes=` + minutes);
    console.log(`Seconds=` + seconds);
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}


function calc() {
    let a = document.getElementById("fval");
    let b = document.getElementById("sval");
    let c = document.getElementById("tval");
    console.log(`A=` + a);
    console.log(`B=` + b);
    console.log(`C=` + c);
    let fval = parseFloat(a.value);
    let sval = parseFloat(b.value);
    let tval = parseFloat(c.value);
    console.log(`A=` + fval);
    console.log(`B=` + sval);
    console.log(`C=` + tval);
    let avg = (fval + sval + tval) / 3;
    console.log(`Average=` + avg);
    document.getElementById("avg").innerHTML = Math.round(avg * 100) / 100;



}

function clr() {    
    console.log("clearing form");
    document.getElementById("sidea").value = "";
    document.getElementById("sideb").value = "";
    document.getElementById("fval").value = "";
    document.getElementById("sval").value = "";
    document.getElementById("tval").value = "";
    document.getElementById("hyp").innerHTML = "";
    document.getElementById("hrs").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("sec").innerHTML = "";
    document.getElementById("avg").innerHTML = "";
}
