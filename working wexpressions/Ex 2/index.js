let a = document.getElementById("num1");

let b = document.getElementById("num2");

// Functions for arithmetic
function add() {
    let result = parseInt(a.value) + parseInt(b.value);
    document.getElementById("result").innerHTML =result;
}

function sub() {
    let result = parseInt(a.value) - parseInt(b.value);
    document.getElementById("result").innerHTML = result;
}

function mul() {
    let result = parseInt(a.value) * parseInt(b.value);
    document.getElementById("result").innerHTML = result;
}

function div() {
    let result = parseInt(a.value) / parseInt(b.value);
    document.getElementById("result").innerHTML = result;
}


// Functions for comparisons
function aeqeqb() {
    document.getElementById("result").innerHTML = a.value == b.value;
}
// ^ a==b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function anoteqb() {
    document.getElementById("result").innerHTML = a.value != b.value;
}
// ^ a!=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function agreaterb() {
    let result = parseInt(a.value) > parseInt(b.value);
    document.getElementById("result").innerHTML = result;
}
// ^ a>b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function alessb() {
    let result = parseInt(a.value) < parseInt(b.value);
    document.getElementById("result").innerHTML = result;
}
// ^ a<b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function agreatereqb() {
    let result = parseInt(a.value) >= parseInt(b.value);
    document.getElementById("result").innerHTML = result;
}
// ^ a>=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function alesseqb() {
    let result = parseInt(a.value) <= parseInt(b.value);
    document.getElementById("result").innerHTML = result;
}
// ^ a<=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^












