function getUser(){
    return JSON.parse(localStorage.getItem("loggedin"));
}


function displayTasks(){
    let user = JSON.parse(localStorage.getItem("loggedin"));
    let tasklist = JSON.parse(localStorage.getItem(user.email));
   
   
    let tasks = document.getElementById("tabletasks");
    if (tasklist.length === 0){
        tasks.innerHTML = "";
        tasks.innerHTML += `<tr><td colspan="2">You have no tasks!</td></tr>`

    } else {
        
        tasks.innerHTML = "";
        
        for (let i = 0; i < tasklist.length; i++){
            tasks.innerHTML += `<tr><td onclick="changeStatus(${i})" style="cursor: pointer">
            ${tasklist[i].title}
            </td>
            <td>
            ${tasklist [i].status ? '<i class="bi bi-check"></i>' : '<i class="bi bi-trash"></i>' }            
            </td>
            </tr>`
        }
    
    }
    document.getElementById("showcomplete").hidden = false;
    document.getElementById("showincomplete").hidden = false;
    document.getElementById("showall").hidden = true;
    
    
}

 function addTask (){
     
     let user = JSON.parse(localStorage.getItem("loggedin"));
     let tasks = JSON.parse(localStorage.getItem(user.email) ) || [];
    
     let task = {};
     task.title = document.getElementById("task").value;
     task.status = false;
     
     console.log(task); 
     if (task.title === ""){
         alert("Please enter a task!");
         return;
     }
    
     tasks.push(task);
     
     
     localStorage.setItem(user.email, JSON.stringify(tasks));
     displayTasks();
    
    
    
 }

 function logout(){
    
     let user = JSON.parse(localStorage.getItem("loggedin"));
    user.length = 0;
     
     localStorage.setItem("loggedin", JSON.stringify(user));
     window.location.href = "index.html";
 }
 onload = function(){
    let namedisplay = document.getElementById("name");
    namedisplay.innerHTML = getUser().name;

     displayTasks();
 }

 function saveCheck(){
    console.log("running");
     let user = JSON.parse(localStorage.getItem("loggedin"));
     let tasks = document.getElementsByName("checklist");
    
     for (let i = 0; i < tasks.length; i++){
         if (tasks[i].checked){
             user.completedtasks += tasks[i].value;
         } else if (!tasks[i].checked){
             user.incompletetasks += tasks[i].value
         }
     }
     console.log(user);
     localStorage.setItem("loggedin", JSON.stringify(user));
     window.location.href = "tasks.html";
 }

 function changeStatus(i){
     let user = JSON.parse(localStorage.getItem("loggedin"));
     let tasklist = JSON.parse(localStorage.getItem(user.email));
     tasklist[i].status = !tasklist[i].status;
     localStorage.setItem(user.email, JSON.stringify(tasklist));
     displayTasks();
 }


 function showRequest(a){
     let user = JSON.parse(localStorage.getItem("loggedin"));
     let tasklist = JSON.parse(localStorage.getItem(user.email));
     let requestuser = tasklist.filter((task) => task.status == a);
     let tasks = document.getElementById("tabletasks");
    tasks.innerHTML = "";
     for (let i = 0; i < requestuser.length; i++){
         console.log(requestuser[i]);
         
         tasks.innerHTML += `<tr><td onclick="changeStatus(${i})" style="cursor: pointer">
            ${requestuser[i].title}
            </td>
            <td>
            ${requestuser[i].status ? '<i class="bi bi-check"></i>' : '<i class="bi bi-trash"></i>' }            
            </td>
            </tr>`
     }
     
    console.log(requestuser);
     if (a == true){
         document.getElementById("showcomplete").hidden = true;
         document.getElementById("showincomplete").hidden = false;
         document.getElementById("showall").hidden = false;

     } else if (a == false){
         document.getElementById("showcomplete").hidden = false;
         document.getElementById("showincomplete").hidden = true;
         document.getElementById("showall").hidden = false;
    
 }
 }

 function deleteComplete(){
     let user = JSON.parse(localStorage.getItem("loggedin"));
     let tasklist = JSON.parse(localStorage.getItem(user.email));
     tasklist = tasklist.filter((task) => task.status == false);
     localStorage.setItem(user.email, JSON.stringify(tasklist));
     displayTasks();
 }