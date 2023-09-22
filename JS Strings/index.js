




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
        document.getElementById("result").innerHTML += `${let} <br>`});
;
}


function numWords (){
    let str = document.getElementById("str").value

    console.log( str.split(" ").length)
    document.getElementById("result").innerHTML = str.split(" ").length
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
    let vowels = str.replace(/[^aeiou]/g, "").length
    let consonants = str.replace(/["bcdfghjklmnpqrstvwxyz"]/g, "").length

    document.getElementById("result").innerHTML = "Vowels: " + vowels + "<br>" + "Consonants: " + consonants

}

function astfill(){
let str = document.getElementById("str").value
let astamount = 20 - str.length 
astamount = parseInt(astamount)
if (str.length < 20){
    str = str.padEnd(astamount, "*")
    document.getElementById("result").innerHTML = str
}else{
    document.getElementById("result").innerHTML = str
}
}

function revString(){
    let str = document.getElementById("str").value
    let reverse = str.split("").reverse().join("")
    document.getElementById("result").innerHTML = reverse
}

function parenth(){
    let str = document.getElementById("str").value
    let regex = /^(\([\s\S]*\)|[^\(\)]*)*$/;
    let parenth = regex.test(str);
    document.getElementById("result").innerHTML = parenth
}

function substr(){
    let str = document.getElementById("str").value
    let substr = prompt("Enter a substring to search for:")
    let index = str.indexOf(substr)
    document.getElementById("result").innerHTML = index 

}

function charcount(){
    let str = document.getElementById("str").value
    escapeRegExp(str)

    let char = prompt("Enter a character to count:")

    char= RegExp(char, "g")

    let charcount = str.replace(char, "").length
    
    document.getElementById("result").innerHTML = charcount
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function extractSubstring() {
    let str = document.getElementById("str").value
    let substring = prompt("Enter the substring to extract:");
    
    let extractedSubstring = str.includes(substring) ? str.substring(str.indexOf(substring), str.indexOf(substring) + substring.length) : "";
  
    document.getElementById("result").innerHTML = extractedSubstring
  }
  
  function checkfor() {
    let str = document.getElementById("str").value
    let substring = prompt("Enter the substring to extract:");
    
    let extractedSubstring = str.includes(substring) ? `yes` : `no`
  
    document.getElementById("result").innerHTML = extractedSubstring
  }

  function flipcase(){
    let str = document.getElementById("str").value
   let flipcase = str.split("").map((char) => {
    if (char == char.toLowerCase()){
        return char.toUpperCase()
    } else {
        return char.toLowerCase()
    }
    }).join("")
    document.getElementById("result").innerHTML = flipcase

    document.getElementById("result").innerHTML = flipcase
  }

  function substrIndex(){
    let str = document.getElementById("str").value
    let substr = prompt("Enter a substring to search for:")
    let index = str.indexOf(substr)
    document.getElementById("result").innerHTML = index 
  }

  function compareStrings() {
    let string1 = prompt("Enter the first string:");
    let string2 = prompt("Enter the second string:");
  
    let comparisonResult = string1.localeCompare(string2);
  
    if (comparisonResult < 0) {
      console.log("String 1 comes before String 2");
    } else if (comparisonResult > 0) {
      console.log("String 1 comes after String 2");
    } else {
      console.log("String 1 and String 2 are equal");
    }
  }
//   ^^^^^^^^^^^ I have no idea what this function is doing.
// I used ai and the prompt to make the function and I understand
// some of what it says but Im not sure what its looking for in compare.
