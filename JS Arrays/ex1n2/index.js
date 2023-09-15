
    let myArr = [];
    let sum = 0;
function add(){
    let input = document.getElementById("input").value;
    input = parseInt(input);
    myArr.push(input);
   console.log(myArr);
 if (myArr.length > 10) {
        sum -= myArr.shift();
        document.getElementById("display").innerHTML = myArr.join(" , ");

    }
    for (let i = 0; i < myArr.length; i++) {
        document.getElementById("display").innerHTML = myArr.join(" , ");
    }
    sum += input;
    document.getElementById("sum").innerHTML = "Sum: " + sum + "<br>";
    myArr.sort();
    let avg = sum / myArr.length;
    document.getElementById("sum").innerHTML += "Average: " + avg + "<br>";
    document.getElementById("sum").innerHTML += "Largest: " + myArr[0] + "<br>";
    document.getElementById("sum").innerHTML += "Smallest: " + myArr[myArr.length - 1];
}

