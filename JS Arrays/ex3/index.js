

let ccnumbers = [
    1234567,
    8901234,
    6789012,
    3456789,
    1123458,  
]

console.log(ccnumbers)

function check(){
let input = document.getElementById("input").value;
if (input.length == 7){
    console.log("Enough Digits")
    input = parseInt(input);
if (ccnumbers.includes(input)){
    document.getElementById("result").innerHTML = "Valid";
} else{
    document.getElementById("result").innerHTML = "Invalid";
}
}else if (isNaN(input)){
    document.getElementById("result").innerHTML = "Invalid, please enter numbers only";
} else {
    document.getElementById("result").innerHTML = "Incorrect amount of Digits";
} 
}