
function submitheInfo(e) {
    e.preventDefault();
    localStorage.clear();
   
    
    const form = document.getElementById("form");
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        form.reportValidity();
        
        return;
  
    }
   

    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let type = document.querySelector("#type").value;
    let pickup = document.querySelector("#pickupdate").value;
    let dropoff = document.querySelector("#returndate").value;
 let user = {
       firstname,
       lastname,
       type,
       pickup,
       dropoff
      }
       localStorage.setItem("user", JSON.stringify(user));
       window.location.href = "results.html";
    }