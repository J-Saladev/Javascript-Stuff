function romn() {
  let input = document.getElementById("roman").value;
  let hasNum = /[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]/;
  let hasLetter = /[a-zA-Z]/;
  console.log(input);

  if (hasLetter.test(input) == true || hasNum.test(input) == false) {
    alert("ERROR, Please enter a number only");
    console.log("ERROR, Letter or no number");
    document.getElementById("result").removeAttribute("hidden");
    document.getElementById("result").innerHTML =
      "Error, Please enter a number only";
  } else {
    intgr = parseInt(input);
    console.log("Input after Parse: " + intgr);
    let num = "";
    switch (intgr) {
      case 1:
        num = "I";
        break;
      case 2:
        num = "II";
        break;
      case 3:
        num = "III";
        break;
      case 4:
        num = "IV";
        break;
      case 5:
        num = "V";
        break;
      case 6:
        num = "VI";
        break;
      case 7:
        num = "VII";
        break;
      case 8:
        num = "VIII";
        break;
      case 9:
        num = "IX";
        break;
      case 10:
        num = "X";
        break;
      default:
        alert("ERROR, Please enter an integer between 1 and 10");
        console.log("ERROR, Please enter an integer between 1 and 10");
        num = "Error, Please enter an integer between 1 and 10";
    }
    console.log(num);
    document.getElementById("result").removeAttribute("hidden");
    document.getElementById("result").innerHTML = num;
  }
}

function objMss() {
  let input = document.getElementById("objMass").value;
  let mass = parseFloat(input);
  console.log("Input: " + input);
  console.log("Parse: " + mass);
  let weight = mass * 9.8;

  if (mass > 1000) {
    document.getElementById("weight").removeAttribute("hidden");
    document.getElementById("weight").innerHTML = "ERROR, too heavy";
  } else if (mass < 10) {
    document.getElementById("weight").removeAttribute("hidden");
    document.getElementById("weight").innerHTML = "ERROR, too light";
  } else if (mass > 10 && mass < 1000) {
    document.getElementById("weight").removeAttribute("hidden");
    document.getElementById("weight").innerHTML = weight.toFixed(2) + " kg";
  } else {
    alert("ERROR, Please enter a number");
  }
}

function mgcDay() {
  let input = document.getElementById("date").value;
  let d = parseInt(input.charAt(0) + input.charAt(1));
  let m = parseInt(input.charAt(3) + input.charAt(4));
  let y = parseInt(input.charAt(6) + input.charAt(7));
  console.log("Input: " + input);
  console.log("Parse: " + d + " " + m + " " + y);

  if (d * m == y) {
    document.getElementById("magicresult").removeAttribute("hidden");
    document.getElementById("magicresult").innerHTML = "Its a magic day!";
  } else if (d * m !== y) {
    document.getElementById("magicresult").removeAttribute("hidden");
    document.getElementById("magicresult").innerHTML = "Its not a magic day!";
  } else {
    alert("ERROR, Please enter a number");
    console.log("ERROR, Please enter a number");
    document.getElementById("magicresult").removeAttribute("hidden");
    document.getElementById("magicresult").innerHTML =
      "ERROR, Please enter a number";
  }
}

function mix() {
  let input1 = document.getElementsByName(`btnradio`);
  for (let i = 0; i < input1.length; i++) {
    if (input1[i].checked == true) {
      console.log(input1[i].value);
      var selected1 = input1[i].value;
    }
  }
  let input2 = document.getElementsByName(`btnradio2`);
  for (let i = 0; i < input2.length; i++) {
    if (input2[i].checked == true) {
      console.log(input2[i].value);
      var selected2 = input2[i].value;
    }
  }
  color1 = "";
  switch (selected1) {
    case "r":
      color1 = "red";
      break;
    case "b":
      color1 = "blue";
      break;
    case "y":
      color1 = "yellow";
      break;
    default:
      alert("error");
      break;
  }
  color2 = "";
  switch (selected2) {
    case "r":
      color2 = "red";
      break;
    case "b":
      color2 = "blue";
      break;
    case "y":
      color2 = "yellow";
      break;
    default:
      alert("error");
      break;
  }
  console.log(color1);
  console.log(color2);
  if (selected1 === selected2) {
    let fcolor = color1;
    console.log("Final Color: " + fcolor);
    document.getElementById("color").style.backgroundColor = fcolor;
  } else if (selected1 !== selected2) {
    console.log(color1 + " " + color2);
    let mixcolor = color1 + " " + color2;
    console.log(mixcolor);
    let fcolor = "";
    switch (mixcolor) {
      case "red blue":
      case "blue red":
        fcolor = "purple";
        break;
      case "red yellow":
      case "yellow red":
        fcolor = "orange";
        break;
      case "blue yellow":
      case "yellow blue":
        fcolor = "green";
        break;
      default:
        alert("error");
        break;
    }
    console.log("Final Color: " + fcolor);
    document.getElementById("color").style.backgroundColor = fcolor;
  }
}

function points() {
  let books = document.getElementById("books").value;
  console.log("Books before Parse: " + books);
  let num = parseInt(books);
  console.log("Input after Parse: " + num);
  if (num >= 0 && num < 4) {
    switch (num) {
      case 0:
        document.getElementById("points").removeAttribute("hidden");
        document.getElementById("points").innerHTML = "0 points Earned :(";
        console.log("Case 0");
        break;
      case 1:
        document.getElementById("points").removeAttribute("hidden");
        document.getElementById("points").innerHTML = "5 points Earned!";
        console.log("Case 1");
        break;
      case 2:
        document.getElementById("points").removeAttribute("hidden");
        document.getElementById("points").innerHTML = "15 points Earned!";
        console.log("Case 2");
        break;
      case 3:
        document.getElementById("points").removeAttribute("hidden");
        document.getElementById("points").innerHTML = "30 points Earned!";
        console.log("Case 3");
        break;
      case 4:
        document.getElementById("points").removeAttribute("hidden");
        document.getElementById("points").innerHTML = "60 points Earned!";
        console.log("Case 4");
        break;
      default:
        alert("ERROR, Please enter an integer");
        break;
    }
  } else if (num > 4) {
    document.getElementById("points").removeAttribute("hidden");
    document.getElementById("points").innerHTML = "60 points Earned!";
    console.log("Case >4");
  } else {
    alert("ERROR, Please enter an integer");
  }
}

function packageDisc() {
  let packages = document.getElementById("packages").value;
  console.log("Packages before Parse: " + packages);
  let numpack = parseFloat(packages);
  console.log("Input after Parse: " + numpack);
  if (numpack >= 10 && numpack <= 19) {
    let discount = 20;
    document.getElementById("discountamt").innerHTML = discount + " %";
    var disc = discount / 100;
  } else if (numpack >= 20 && numpack <= 49) {
    let discount = 30;
    document.getElementById("discountamt").innerHTML = discount + " %";
    var disc = discount / 100;
  } else if (numpack >= 50 && numpack <= 99) {
    let discount = 40;
    document.getElementById("discountamt").innerHTML = discount + " %";
  } else if (numpack >= 100) {
    let discount = 50;
    document.getElementById("discountamt").innerHTML = discount + " %";
  } else if (numpack < 10 && numpack > 0) {
    let discount = 1;
    document.getElementById("discountamt").innerHTML = "No Discount";
    console.log("Discount: " + discount);
  } else {
    alert("ERROR, Please enter a number");
    console.log("ERROR, Please enter a number");
    document.getElementById("discountamt").innerHTML =
      "ERROR, Please enter a number";
  }
  console.log(packages + typeof packages);
  console.log(disc + typeof disc);
  if (disc % 1 != disc) {
    console.log("ERROR, Please enter a number");
  }
  console.log("Discount in 100s: " + disc);
  let priceb = packages * 99;
  let pricea = (1 - disc) * priceb;
  console.log("Total Price of packages: " + pricea);
  document.getElementById("totalamt").innerHTML = pricea;
}

function checkGame() {
    let penny = document.getElementById("penny").value;
    let nickel = document.getElementById("nickel").value;
    let dime = document.getElementById("dime").value;
    let quarter = document.getElementById("quarter").value;
    let p = parseInt(penny);
    let n = parseInt(nickel);
    let d = parseInt(dime); 
    let q = parseInt(quarter);
    if (Number.isInteger(p) == true && Number.isInteger(n) == true && Number.isInteger(d) == true && Number.isInteger(q) == true) {
      p = parseInt(penny)
      n = parseInt(nickel) * 5
      d = parseInt(dime) * 10
      q = parseInt(quarter) * 25
        let amount = p + n + d + q
        console.log("Answer: " + amount);
        console.log(typeof amount);

            if (amount == 100) {
            document.getElementById("equal").removeAttribute("hidden");
            setTimeout(winFunc, 1000)
            } else {
            document.getElementById("noequal").removeAttribute("hidden");
            }

    } else {
        alert("ERROR, Please enter into all fields");
    }
}



// I DID NOT MAKE THIS I GOT THIS FROM codehim.com, from Asif MughalVVVVVVVVV

function winFunc() {
    //-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
document.getElementById("canvas").removeAttribute("hidden");
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
window.addEventListener('click', function () {
  initConfetti();

});
}
// I did make these though vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

function calorie(){
    let calories = document.getElementById("calories").value;
    let fat = document.getElementById("fat").value;
    calories = parseFloat(calories);
    fat = parseFloat(fat);
    console.log(calories);
    console.log(fat);
    cfat = (fat * 9);
    console.log(cfat);
    document.getElementById("fatcal").innerHTML = cfat;
    percentcal = (cfat / calories);
    console.log(percentcal);
    document.getElementById("percentcal").innerHTML = percentcal + "%";
    let lowfat = document.getElementById("lowfat").value;
    console.log("CheckBox: " + lowfat);
    if (calories <0 || fat <0){
        alert("ERROR, Please enter numbers into all fields");
    } else if (isNaN(calories)==true || isNaN(fat)==true) {
        alert("ERROR, Please enter numbers into all fields");
    } else if (cfat > calories){
        alert("ERROR, Please check your inputs");
    }
    if (lowfat == "on") {
        if (percentcal <=30){
            document.getElementById("resultcal").removeAttribute("hidden");
            document.getElementById("lowfat?").innerHTML = "Low Fat";
            console.log("This is low fat");
        } else {
            document.getElementById("resultcal").removeAttribute("hidden");
            document.getElementById("lowfat?").innerHTML = "Not Low Fat";
            console.log("This is not low fat");
    
    }
}
}

function secTimer(){
    
}