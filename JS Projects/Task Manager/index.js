function submitLog(e){
    e.preventDefault();
    let form = document.querySelector("#form");
    if (!form.checkValidity()){
        form.classList.add("was-validated");
        form.reportValidity();
        return;
    }
    let emailinp = document.getElementById("email").value.trim();
    let passwordinp = document.getElementById("pass").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    
    
    
    if (!users.some(user => user.email === emailinp) || users.find(user => user.email === emailinp).password !== passwordinp){
        alert("User does not exist or Incorrect Password!");
        return;
    } 
    
        alert("Logged in!");
        let user = users.find(user => user.email === emailinp);
        
        localStorage.setItem("loggedin", JSON.stringify(user));
        window.location.href = "tasks.html";
        
    }


function regPage(){
    window.location.href = "register.html";
}

onload = function()  {
    let user = JSON.parse(localStorage.getItem("loggedin") || "[]");
    if (!user.length === 0){
        alert("Already Logged in, Logout first if you want to log in again!");
        window.location.href = "tasks.html";
        return;
    }
}