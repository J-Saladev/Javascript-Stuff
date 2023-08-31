let SA = document.getElementById("Side A");

let SB = document.getElementById("Side B");

let SC = document.getElementById("Side C");


function calc() {
    let p = (parseInt(SA.value) + parseInt(SB.value) + parseInt(SC.value)) / 2;
    console.log (p);
    document.getElementById("answer").innerHTML = p;
}