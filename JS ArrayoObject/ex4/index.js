

function addStudent(){
let studentinfo = JSON.parse(localStorage.getItem('studentinfo') || '[]');
let math = document.getElementById("math").value;
let eng = document.getElementById("eng").value;
let bio = document.getElementById("bio").value;
let env = document.getElementById("env").value;
avg = (parseInt(math) + parseInt(eng) + parseInt(bio) + parseInt(env)) / 4


let student = {
    name : document.getElementById("name").value,
    math,
    eng,
    bio,
    env,
    avg 
}

studentinfo.push(student);
localStorage.setItem('studentinfo', JSON.stringify(studentinfo));
alert(`Added ${student.name}`);
window.location.reload();
}


function showStats(){
    let studentinfo = JSON.parse(localStorage.getItem('studentinfo') || '[]');
    let display = document.getElementById("display");
    studentinfo.forEach(student => {
        display.innerHTML += `<tr><td>${student.name}</td><td></td><td>Student Average: ${student.avg}</td></tr>
     <tr><td></td><td>Mathematics</td><td>${student.math}</td></tr>
     <tr><td></td><td>English</td><td>${student.eng}</td></tr>
     <tr><td></td><td>Biology</td><td>${student.bio}</td></tr>
     <tr><td></td><td>Environmental</td><td>${student.env}</td></tr>
        
        `
        
    });
}