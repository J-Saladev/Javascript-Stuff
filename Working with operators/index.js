let a = document.getElementById("num1");

let b = document.getElementById("num2");

// Functions for arithmetic
function add() {
    let result = parseInt(a.value) + parseInt(b.value);
    document.getElementById("add").innerHTML =result;
}

function sub() {
    let result = parseInt(a.value) - parseInt(b.value);
    document.getElementById("sub").innerHTML = result;
}

function mul() {
    let result = parseInt(a.value) * parseInt(b.value);
    document.getElementById("mul").innerHTML = result;
}

function div() {
    let result = parseInt(a.value) / parseInt(b.value);
    document.getElementById("div").innerHTML = result;
}

function mod() {
    let result = parseInt(a.value) % parseInt(b.value);
    document.getElementById("mod").innerHTML = result;
}

function incA() {
    let result = parseInt(a.value) + 1;
    document.getElementById("inc a").innerHTML = result;
}

function incB() {
    let result = parseInt(b.value) + 1;
    document.getElementById("inc b").innerHTML = result;
}
// Functions for comparisons
function aeqeqb() {
    document.getElementById("a == b").innerHTML = a.value == b.value;
}
// ^ a==b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function anoteqb() {
    document.getElementById("a != b").innerHTML = a.value != b.value;
}
// ^ a!=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function agreaterb() {
    let result = parseInt(a.value) > parseInt(b.value);
    document.getElementById("a > b").innerHTML = result;
}
// ^ a>b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function alessb() {
    let result = parseInt(a.value) < parseInt(b.value);
    document.getElementById("a < b").innerHTML = result;
}
// ^ a<b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function agreatereqb() {
    let result = parseInt(a.value) >= parseInt(b.value);
    document.getElementById("a >= b").innerHTML = result;
}
// ^ a>=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function alesseqb() {
    let result = parseInt(a.value) <= parseInt(b.value);
    document.getElementById("a <= b").innerHTML = result;
}
// ^ a<=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Functions for assignment
function apequb() {
    let first = parent(a.value);
    let second = parent(b.value);
    first += second;
    document.getElementById("a += b").innerHTML = first;
}
// ^ a+=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function asubub() {
    let result = parseInt(a.value) -= parseInt(b.value);
    document.getElementById("a -= b").innerHTML = result;
}
// ^ a-=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function amulub() {
    let result = parseInt(a.value) *= parseInt(b.value);
    document.getElementById("a *= b").innerHTML = result;
}
// ^ a*=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function adivub() {
    let result = parseInt(a.value) /= parseInt(b.value);
    document.getElementById("a /= b").innerHTML = result;
}
// ^ a/=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function amodub() {
    let result = parseInt(a.value) %= parseInt(b.value);
    document.getElementById("a %= b").innerHTML = result;
}
// ^ a%=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function apowub() {
    let result = parseInt(a.value) **= parseInt(b.value);
    document.getElementById("a **= b").innerHTML = result;
}
// ^ a**=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function aandub() {
    let result = parseInt(a.value) &= parseInt(b.value);
    document.getElementById("a &= b").innerHTML = result;
}
// ^ a&=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function aorub() {
    let result = parseInt(a.value) |= parseInt(b.value);
    document.getElementById("a |= b").innerHTML = result;
}
// ^ a|=b^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function numSubmit() {
    // The column that holds the arithmetic
    add();
    sub();
    mul();
    div();
    mod();
    incA();
    incB();
    // The column that holds the comparison
    aeqeqb();
    anoteqb();
    agreaterb();
    alessb();
    agreatereqb();
    alesseqb();
    // The column that holds the assignment
    apequb();
    asubub();
    amulub();
    adivub();
    amodub();
    apowub();
    aandub();
    aorub();

}

function numClear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("add").innerHTML = "";
    document.getElementById("sub").innerHTML = "";
    document.getElementById("mul").innerHTML = "";
    document.getElementById("div").innerHTML = "";
    document.getElementById("mod").innerHTML = "";
    document.getElementById("inc a").innerHTML = "";
    document.getElementById("inc b").innerHTML = "";
    document.getElementById("a == b").innerHTML = "";
    document.getElementById("a != b").innerHTML = "";
    document.getElementById("a > b").innerHTML = "";
    document.getElementById("a < b").innerHTML = "";
    document.getElementById("a >= b").innerHTML = "";
    document.getElementById("a <= b").innerHTML = "";
    document.getElementById("a += b").innerHTML = "";
    document.getElementById("a -= b").innerHTML = "";
    document.getElementById("a *= b").innerHTML = "";
    document.getElementById("a /= b").innerHTML = "";
    document.getElementById("a %= b").innerHTML = "";
    document.getElementById("a **= b").innerHTML = "";
    document.getElementById("a &= b").innerHTML = "";
    document.getElementById("a |= b").innerHTML = "";
}








