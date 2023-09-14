

onload = function(){
    localStorage.clear();
    let a = Math.floor(Math.random() * (100 - 1 +1) + 1);
    localStorage.setItem(`a`,a);
}


  let guesamt = 1;
function tryThis(){
    let a = localStorage.getItem(`a`);
    let guess = document.getElementById("guess").value;
  
    console.log(guess);
    console.log(a);
    if (guess != a){
        
        if (guess > a ){
            document.querySelector("#guessresult").innerHTML = "Too high, Try again!!";
            document.querySelector("#guessresult").removeAttribute("hidden");
        
           
        } else {
            document.querySelector("#guessresult").innerHTML = "Too low, Try again!!";
            document.querySelector("#guessresult").removeAttribute("hidden");
            
            
        }
    
     guesamt += 1;
} else if (guess == a){
    console.log(guesamt);
    document.querySelector("#guessresult").innerHTML = "Correct it was " + a + ", you guessed it in " + guesamt + " try(ies)";
    document.querySelector("#guessresult").removeAttribute("hidden");
    setTimeout(function() {window.location.reload()}, 5000);
} else alert("Something went wrong");
}