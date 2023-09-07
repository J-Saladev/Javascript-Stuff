let users = [
    {
        fname: "John",
        lname: "Doe",
        address: "123 Main St",
        age: 30,
        gender: "male",
        username: "jack",
        password: "pass"
    }
];

function logOn() {
    let username = document.querySelector("#Username").value;
    let password = document.querySelector("#Password").value;
    let userExists = users.some((users) => {
        return users.username === username && users.password === password;
    });

    if (userExists) {
        // User exists, perform login actions
        alert("Welcome " + users.fname + "!");
        alert("I know everything about you!");
        alert(users.fname + " is " + users.age + " " + users.gender + " " + users.lname);
    } else {
        // User does not exist, display an error message
        alert("Invalid username or password");
    }
}

function Redirect() {
    location.href = "register.html";
}

function newUser() {
    var newUser = document.querySelector("#user").value;
    var newPass = document.querySelector("#pass").value;
    var fname = document.querySelector("#fname").value;
    var lname = document.querySelector("#lname").value;
    var address = document.querySelector("#address").value;
    var age = document.querySelector("#age").value;
    var gender = document.querySelector("input[name='gender']:checked").value;

    var user = {
        fname: fname,
        lname: lname,
        address: address,
        age: age,
        gender: gender,
        username: newUser,
        password: newPass,
    };
    users.push(user);
    console.log(users);
    location.href = "index.html";
}