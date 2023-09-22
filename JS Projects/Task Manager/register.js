function registerAcc(e){
    e.preventDefault();
    let form = document.querySelector("#form");
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        form.reportValidity();
        console.log("invalid");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let passcheck = document.getElementById("passcheck").value;
    let loggedin = false;
    if (users.some(user => user.email === email)){
        alert("User Already exists!");
        return;
    }

    
    if (password != passcheck){
        alert("Passwords do not match!");
        return;
    } 
        users.push({
            email,
            password,
            name,
            
            
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created!");
       setTimeout(function() {window.location.href = "index.html";}, 3000);
}