let correctans = [
 "B", 
 "D", 
 "A",
 "A", 
 "C", 
 "A", 
 "B", 
 "A", 
 "C", 
 "D", 
 "B", 
 "C", 
 "D", 
 "A", 
 "D", 
 "C", 
 "C", 
 "B", 
 "D", 
 "A", 
]

let userans = [

]

let correct=0
let i=0
let q=0
function startExam(){
    document.getElementById("start").hidden = true;
    nextQuestion();
    document.getElementById("a").setAttribute("checked", "");
}

function nextQuestion(){
i++
 document.getElementById("questions").hidden = true;
 setTimeout(
    () => document.getElementById("questions").hidden = false
 , 100);
if (i <= 20){
    

    
    let numquest = document.getElementById("numquest");
    numquest.innerHTML = `Question ${i}`;
    let input = document.getElementsByName("question");
    for (let ans = 0; ans < input.length; ans++) {
        if (input[ans].checked) {
            ans = input[ans].value 
            console.log(ans)
            userans.push(ans); 
            console.log(userans)
        }
    }
    

    
   
    

}else {
    document.getElementById("next").hidden = true;
    document.getElementById("check").hidden = false;

}
}
function checkAnswer () {
    document.getElementById("questions").hidden = true;
    let input = document.getElementsByName("question");
    for (let ans = 0; ans < input.length; ans++) {
        if (input[ans].checked = true) {
            ans = input[ans].value 
            console.log(ans)
            userans.push(ans); 
            console.log(userans)
        }
    }
    document.getElementById("check").hidden = true;
    
    
    for (ans in correctans){
        q++
        if (correctans[ans] == userans[ans]){
        
        
            correct++
        } else {

            document.getElementById("incorrect").innerHTML += `${q}, `;
        }
        
        
        

    } 
    console.log(correct)
    let finalscore = (correct / 20) * 100; 
    console.log(finalscore) 
    document.getElementById("score").innerHTML += `Final Score: ${finalscore}%`;   
    document.getElementById("results").hidden = false;
}