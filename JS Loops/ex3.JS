function susanMoney() {
  console.log("Hello");
  let days = document.getElementById("days").value;
  let answer = document.getElementById("answer");
  days = parseInt(days);
  answer.innerHTML += "1 day is 0.01 dollar(s)<br>";
let money=.01;
  for (d = 2; d <= days && days > 0; d++) {
    console.log(d);
    
    money += money;

    answer.innerHTML += `${d} day(s) is ${money} dollar(s)<br>`;
  }
  if (days <= 0) {
    answer.innerHTML = "Days must be greater than 0";
  }
}

let days = document.getElementById("days");
days.addEventListener("change", susanMoney);
