let input = document.getElementById("num");
console.log(typeof input);

function posneg() {
  let tf = parseInt(input.value) > 0 ? "positive" : "negative";
  console.log(tf);
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
    } else {
      console.log("decreasing");
    }
  }
}

function eo() {
  let num = input.value % 2;
  let answ = num == 0 ? "even" : "odd";
  console.log(answ);
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
        "";
        break;
    }
    console.log(day);
  }
}
