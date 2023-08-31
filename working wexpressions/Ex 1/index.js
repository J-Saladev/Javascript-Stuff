let SA = document.getElementById("Side A");

let SB = document.getElementById("Side B");

let SC = document.getElementById("Side C");

function calc() {
    // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
    

    let a = parseInt(SA.value);
    let b = parseInt(SB.value);
    let c = parseInt(SC.value);
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^This defining and turning the input into variables^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
    let p = (a + b + c)/ 2;
    console.log ("p=", p);
    let pa = p - a;
    let pb = p - b;
    let pc = p - c;
    console.log("p-a=", pa )
    console.log("p-b=", pb)
    console.log("p-c", pc)

    let sqr1 = Math.sqrt(p * pa * pb * pc);
    console.log(sqr1)
    

    
    document.getElementById("answer").innerHTML= sqr1;
    
}


