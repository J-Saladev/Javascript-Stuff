


function generateAccount(){
   
    document.getElementById("accountid").value =Math.floor( Math.random()* (100000 - 1 + 1) + 1);
}

function addAccount(){
    let allaccounts = JSON.parse(localStorage.getItem("allaccounts") || "[]");
    let accountid = document.getElementById("accountid").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let balance = document.getElementById("balance").value;
    console.log (accountid, fname, lname, balance);
    if (!accountid || !fname || !lname || !balance){
        alert("ERROR, Please enter into all fields");
        return;
    }
    let account = {
        accountid,
        fname,
        lname,
        balance
    }
    allaccounts.push(account);
    localStorage.setItem("allaccounts", JSON.stringify(allaccounts));
    alert("Account added!");
}

function showAccounts(){
    let allaccounts = JSON.parse(localStorage.getItem("allaccounts") || "[]");
    let accountlist = document.getElementById("accountlist");
    accountlist.innerHTML = "";
    let table = document.getElementById("table");
    allaccounts.forEach((account) => {
        accountlist.innerHTML += `<tr><td>${account.accountid}</td><td>${account.fname}</td><td>${account.lname}</td><td>${account.balance}</td></tr>`
});
    if (table.hidden == true){ 
        table.hidden = false;
    }else {
        table.hidden = true;
    }
}

function depositMoney(){
    let allaccounts = JSON.parse(localStorage.getItem("allaccounts") || "[]");
    let depositid = prompt("What is your account number?");
    let account = allaccounts.find((account) => account.accountid == depositid);
    if (!account){
        alert("ERROR, Please enter a valid account number");
        console.log("ERROR, Please enter a valid account number");
        return;
    }   
   let deposit = prompt("How much would you like to deposit?");
   if (isNaN(deposit) || deposit == ""){
       alert("ERROR, Please enter a number");
       console.log("ERROR, Please enter a number");  
   }
   account.balance = parseInt(account.balance) + parseInt(deposit);
   
    localStorage.setItem("allaccounts", JSON.stringify(allaccounts));
    showAccounts();
    let table = document.getElementById("table");
    table.hidden = false;
    alert(`Your new balance is ${account.balance}`);
}

function withdrawMoney(){
    let allaccounts = JSON.parse(localStorage.getItem("allaccounts") || "[]");
    let withdrawalid = prompt("What is your account number?");
    let account = allaccounts.find((account) => account.accountid == withdrawalid);
    if (!account){
        alert("ERROR, Please enter a valid account number");
        console.log("ERROR, Please enter a valid account number");
        return;
    }   
   let withdrawal = prompt("How much would you like to withdrawal?");
   if (isNaN(withdrawal) || withdrawal == ""){
       alert("ERROR, Please enter a number");
       console.log("ERROR, Please enter a number");  
   }
   account.balance = parseInt(account.balance) - parseInt(withdrawal);
   if (account.balance < 0){
       alert("ERROR, You do not have enough money");
       console.log("ERROR, Please enter a valid amount");
       return;
   }
    localStorage.setItem("allaccounts", JSON.stringify(allaccounts));
    showAccounts();
    let table = document.getElementById("table");
    table.hidden = false;
    alert(`Your new balance is ${account.balance}`);

}

