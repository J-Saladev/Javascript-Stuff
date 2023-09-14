function randomInt(){
    localStorage.clear();
    let a = Math.floor(Math.random() * (500 - 100 +1) + 100);
    let b = Math.floor(Math.random() * (500 - 100 +1) + 100);
    localStorage.setItem(`a`,a);
    localStorage.setItem(`b`, b);
   document.getElementById('a').innerHTML = a;
   document.getElementById('b').innerHTML = b;
}
onload = randomInt;

function checkAns (){

    let num = document.getElementById("num").value;
    let a = localStorage.getItem(`a`);
    let b = localStorage.getItem('b');

    num = parseInt(num);
    a = parseInt(a);
    b = parseInt(b);
    let ans = a + b;
    console.log(ans);
    if (num == ans){
        alert("Correct");   
        window.location.reload();
    } else {
        alert("Incorrect");
    }

}