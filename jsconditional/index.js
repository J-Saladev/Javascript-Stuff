let input = document.getElementById("num");

function posneg() {
  let tf = parseInt(input.value) > 0 ? "Positive" : "Negative";
  console.log(tf);
  document.getElementById("psng").innerHTML = tf + "," + " ";
}

function incord() {
  let lngth = input.value.length;
  console.log(lngth);
  if (lngth == 3) {
    let frst = parseInt(input.value.charAt(0));
    let sec = parseInt(input.value.charAt(1));
    let thrd = parseInt(input.value.charAt(2));
    console.log(typeof frst);
    if (frst < sec && sec < thrd) {
      console.log("increasing");
      document.getElementById("inc").innerHTML = "Increasing, ";
    } else {
      console.log("decreasing");
      document.getElementById("inc").innerHTML = "Decreasing, ";
    }
  }
}

function eo() {
  let num = input.value % 2;
  let answ = num == 0 ? "Even" : "Odd";
  console.log(answ);
  document.getElementById("eoo").innerHTML = answ + "," + " ";
}

function getDay() {
  if (input.value.length >= 0 && input.value.length <= 7) {
    let daynum = parseInt(input.value);
    switch (daynum) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        day = "";
        break;
    }
    console.log(day);
    document.getElementById("day").innerHTML = day;
  }
}

function isBigger() {
  let lngth = input.value.length;
  let frst = parseInt(input.value.charAt(0));
  let sec = parseInt(input.value.charAt(1));
  let array = [frst, sec];
  console.log(lngth);

  if (lngth == 2) {
    console.log(typeof frst);
    if (frst > sec) {
      console.log("switching to " + frst);
      console.log(array + "First Array");
      array.sort();
      console.log(array + "Sorted Array");

      document.getElementById("switch").innerHTML =
        "(" + array + ")" + "," + "";
    } else {
      console.log("staying");
      document.getElementById("switch").innerHTML = " ";
    }
  }
}
// Does all the things
//Write a program that detects if a number entered from the keyboard is positive or negative.
// Write a program that detects if three numbers entered by the user have been entered in increasing order.
// Write a program that determines if a number read from the keyboard is even or
// Write a program that given a number from 1 to 7 writes the corresponding name of the day of the week. Consider that day 1 corresponds to Monday.
// Write a program that reads two numbers from the keyboard and if the first one is greater than the second one, exchange its values.
function doAll() {
  posneg();
  incord();
  eo();
  getDay();
  isBigger();
  document.getElementById("all").removeAttribute("hidden");
}

//Write a program that says whether a character is a vowel or not.
let vinput = document.getElementById("vowel");
function vowel() {
  switch (vinput.value) {
    case "a":
      console.log("a");
      vresult = "is";
      break;

    case "e":
      console.log("e");
      vresult = "is";
      break;

    case "i":
      console.log("i");
      vresult = "is";
      break;

    case "o":
      console.log("o");
      vresult = "is";
      break;

    case "u":
      console.log("u");
      vresult = "is";
      break;

    case "y":
      console.log("y");
      vresult = "is kinda";
      break;

    default:
      vresult = "is not";
  }
  console.log(vresult);
  document.getElementById("vresult").innerHTML =
    "This Character " + vresult + " " + "a vowel";
  document.getElementById("vresult").removeAttribute("hidden");
}

// Write a program that reads from the keyboard the gross amount of an invoice and determines the net amount according to the following criteria:
// Gross amount less than 20,000: no discount. A gross amount greater than 20,000: 15% discount.

function afterAmt() {
  let gross = document.getElementById("amount");
  let ngross = parseInt(gross.value);

  console.log(ngross);

  if (ngross < 20000) {
    let oamt = ngross * 1;
    console.log(oamt);
    document.getElementById("afteramt").innerHTML = oamt;
    document.getElementById("afteramt").removeAttribute("hidden");
  } else {
    let disamt = ngross * 0.15;
    let aamt = ngross - disamt;
    console.log(aamt);
    document.getElementById("afteramt").innerHTML = aamt;
    document.getElementById("afteramt").removeAttribute("hidden");
  }
}

// I spent so long writing this ^^^^ realizing that I didn't want to overcomplicate it so this is what I ended with

// This is gonna be where I calculate if it negative or positive VVVVVVVVVVV

function plormi() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let num3 = document.getElementById("num3");
  let num1n = parseInt(num1.value);
  let num2n = parseInt(num2.value);
  let num3n = parseInt(num3.value);
  console.log(num1n);
  if (num1n > 0 && num2n > 0 && num3n > 0) {
    alert("positive")
  } else if (num1n < 0 && num2n < 0 && num3n < 0) {
    alert("negative");
// ^^^^^^^^^ Obviously basic math, if all of them are positive the result is positive
// and if all of them are negative the result is negative (because 3)
  } else if (num1n > 0 && num2n < 0 && num3n < 0) {
    alert("positive");
  } else if (num1n < 0 && num2n > 0 && num3n < 0) {
    alert("positive");
  } else if (num1n < 0 && num2n < 0 && num3n > 0) {
    alert("positive");
    // This should be for that if one of them is positive the overall result is positive
    // as the two negative numbers cancel out
  } else {
    alert("negative");
  }
}
// IT WORKS WOOHOO ^^^^^^^^^^^^^^^^^^^^^^^^

// Biggest of three numbers using a nested function (maybe?)
function bigst()  {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let num3 = document.getElementById("num3");
  let num1n = parseInt(num1.value);
  let num2n = parseInt(num2.value);
  let num3n = parseInt(num3.value);
  function max(){
    return Math.max(num1n, num2n, num3n);
  }
  console.log(Math.max(num1n, num2n, num3n));
  document.getElementById("bgst").removeAttribute("hidden");
  document.getElementById("bgst").innerHTML = "Largest: " + max();
  
}


// Return a digit as its word 0-9
function digit()  {
let num = document.getElementById("digit");
console.log(num.value);


let word = "";
switch (num.value) {
  case "0":
    word = "Zero";
    break;
    
  case "1":
    word = "One";
    break;
    
  case "2":
    word = "Two";
    break;
    
  case "3":
    word = "Three";
    break;
    
  case "4":
    word = "Four";
    break;
    
  case "5":
    word = "Five";
    break;
    
  case "6":
    word = "Six";
    break;
    
  case "7":
    word = "Seven";
    break;
    
  case "8":
    word = "Eight";
    break;
    
  case "9":
    word = "Nine";
    break;
    
  default:
    word = "Not a number between 0-9 :|";
    break;
}
  console.log(word);
  document.getElementById("digitans").removeAttribute("hidden");
  document.getElementById("digitans").innerHTML = word;


}
// Check what the input is (string, number, float,)
// Then if it has a number it will be checked for a letter
// If it has a letter it will have *added, otherwise it will be turned
// into a parseFloat value and incremented then displayed.
// That one was really hard to do
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


function chktype() {
  let txt = document.getElementById("inputtxt");
  console.log(typeof(txt.value));
  let hasNum = /\d/;
  let hasLetter = /[a-zA-Z]/;
  function chknum() {
    return hasNum.test(txt.value) ;
    }

    function chkletter() {
      return hasLetter.test(txt.value) ;
      }
    
    console.log(chknum());
  
    if (chknum() == true) {
      if (chkletter() == false) {
      inum = parseFloat(txt.value);
      document.getElementById("output").removeAttribute("hidden");
      console.log("Type: " + typeof(inum));
      console.log(inum);
      inum++;
      console.log("After Increment: " + inum);
      document.getElementById("output").innerHTML = (inum.toPrecision(4)) + " is a number";
    } else {
      document.getElementById("output").removeAttribute("hidden");
      document.getElementById("output").innerHTML = txt.value + "*";
    }
  
  }
  if (chkletter() == true) {
    if (chknum() == false) {
      document.getElementById("output").removeAttribute("hidden");
      console.log("Type: " + typeof(inum));
      document.getElementById("output").removeAttribute("hidden");
      document.getElementById("output").innerHTML = txt.value + "*";
    }
  }

  
}

// Creating a program that takes a score from 1-9 and returns the score +bonus
function bonus() {
  let score = document.getElementById("score");
  console.log("Score:" + score.value + " " + typeof(score.value));
  let rscore = parseInt(score.value);
  console.log("Score w ParseInt:" + rscore + " " + typeof(rscore));
  let bonus = "";
  switch (rscore) {
    case 1: case 2: case 3:
      bonus = 10;
      break;
      case 4: case 5: case 6:
      bonus = 100;
      break;
    case 7: case 8: case 9:
      bonus = 1000;
      break;

    default:
      bonus = 0;
      break;
}
console.log("Bonus:" + bonus);
  if (bonus == 0) {
    alert("Error");
    console.log("Error");
  }
  let finalscore = (rscore * bonus);
  console.log("Final Score:" + finalscore);
  document.getElementById("bonus").removeAttribute("hidden");
  document.getElementById("bonus").innerHTML = finalscore;
}

// I spend an hour trying to figure out why it wasn't working
// Its because I was using case 1, 2, 3 etc instead of case 1: case 2: case 3:
  
