function evood(){
    let num = document.getElementById("num").value;
    num = parseInt(num);
    if (num % 2 == 0){
        document.querySelector("#result").innerHTML = "Even";
        document.querySelector("#result").removeAttribute("hidden");
    } else {
        document.querySelector("#result").innerHTML = "Odd";
        document.querySelector("#result").removeAttribute("hidden");
    }
}

function tryIt() {
    let guess = document.getElementById("guess").value;
    guess = parseInt(guess);
    let answer = Math.floor(Math.random() * 10);
    if (guess == answer) {
        document.querySelector("#guessresult").innerHTML = "Correct it was " + answer;
        document.querySelector("#guessresult").removeAttribute("hidden");
    } else {
        document.querySelector("#guessresult").innerHTML = "Wrong the answer was " + answer;
        document.querySelector("#guessresult").removeAttribute("hidden");
    }
} 