




function strLength (){
    let str = document.getElementById("str").value

    console.log(str)
    console.log(str.length)
   
    document.getElementById("result").innerHTML = str.length
    
}

function sepChar (){
    let str = document.getElementById("str").value
    let splitstr = str.split("");
    console.log (splitstr)
    document.getElementById("result").innerHTML = ""
 splitstr.forEach(let => {
        document.getElementById("result").innerHTML += let + "<br>"
    });
}

function numWords (){
    let str = document.getElementById("str").value

    console.log( str.split(" ").length)
}

function alphdigspec(){
    let str = document.getElementById("str").value;

    let alph = str.replace(/[^a-zA-Z]/g, "").length;
    let dig = str.replace(/[^0-9]/g, "").length;
    let spec = str.length - alph - dig;

    console.log("Alphabets: " + alph);
    console.log("Digits: " + dig);
    console.log("Special characters: " + spec);
    document.getElementById("result").innerHTML = "Alphabets: " + alph + "<br>" + "Digits: " + dig + "<br>" + "Special characters: " + spec

}

function vandco(){
    let str = document.getElementById("str").value
    let vowels = "aeiou"
}