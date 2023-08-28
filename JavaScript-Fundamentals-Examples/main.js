//Function that changes the text of the element with id "p3"
function changeText () {
    document.getElementById("p3").innerHTML = "Text has changed!";
}

//These variables are declared in the global scope
var a = 100; //Variables declared with var can be redeclared and reassigned
const b = 200; //Variables declared with const are immutable (cannot be reassigned, cannot be redeclared)
let c = 300; //Variables declared with let cannot be reassigned and must be declared before they are used

//Function that allows to declare variables and print them on console
function declaringVars () {
    //Variables declared in the function scope are not accessible outside of the function
    let d = 400; 
    const $d = 500; //Variales starting with $ are allowed in JavaScript (not very common)
    const _d = 600; //Variables starting with _ are allowed in JavaScript
    a = 10; 
    // b = 20; // error
    c = 30;
    console.log(a, b, c, d, $d, _d);
}

