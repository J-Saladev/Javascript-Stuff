
function sendTick(e){    
    e.preventDefault();
    
    let form = document.getElementById("form");
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        form.reportValidity();
        return;
    }
    localStorage.clear();

    let clss = document.querySelector('input[name="class"]:checked').value;
   
    let depart = document.querySelector('#depart').value;
   
    let destination = document.querySelector('#destination').value;
   
    let type = document.querySelector('input[name="type"]:checked').value;
    
    let age = document.querySelector('input[name="age"]:checked').value;
    
    let tripdate = document.querySelector('#tripdate').value;
    
    
    let ticket = {
        clss,
        depart,
        destination,
        type,
        age,
        tripdate
    }
    console.log(ticket);
    localStorage.setItem('ticket', JSON.stringify(ticket));
    window.location.href = "info.html";
}

