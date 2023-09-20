



function checkReserve() {
    let reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    reservations.forEach((reservation) => {
        let seat = reservation.seats
        
        seat.split(", ").forEach(seat => {
           
            if (seat == ""){
              return
            }
          document.getElementById(seat).disabled = true
        })
      });

      let hotelres = JSON.parse(localStorage.getItem("hotelres") || "[]");
      hotelres.forEach((reservation) => {
        let room = reservation.room
        
        room.split(", ").forEach(room => {
          
            if (room == ""){
              return
            }
          document.getElementById(room).disabled = true
      })
    });
}
    onload = checkReserve


function reserveAP() {

  
  let reservations = JSON.parse(localStorage.getItem("reservations") || "[]");

 
  

  
  let seat = document.getElementsByName("seat");
  let reservation = {
    seats: "",
  };
  let seatclass = document.getElementById("flight").value;
  if (!seatclass ) {
    alert("Please select a Class");
    return;
  }
  for (let i = 0; i < seat.length; i++) {
    if (seat[i].checked) {
      let reserved = seat[i].value;
      reservation.seats += reserved + ", ";
    }
    
  }
  if (reservation.seats == "") {
    alert("Please select a seat");
    return;
  }
  seatprice = "";
  switch (seatclass) {
    case "economy":
      reservation.seatclass = "Economy";
      seatprice = 290;
      break;
    case "firstclass":
      reservation.seatclass = "First Class";
      seatprice = 390;
  }
  let total = seatprice * (reservation.seats.split(", ").length - 1);
  reservation.total = total;
  reservation.resnum = resnum;
  reservations.push(reservation);

  localStorage.setItem("reservations", JSON.stringify(reservations));
  alert("Reservation successful");
  window.location.reload();

}

function reserveHotel() {
    
  let hotelres = JSON.parse(localStorage.getItem("hotelres") || "[]");

  let room = document.getElementsByName("room");
  let reservation = {
    room: "",
  };
  let roomclass = document.getElementById("hotel").value;
  if (!roomclass ) {
    alert("Please select a Room Type");
    return;
  }
  for (let i = 0; i < room.length; i++) {
    if (room[i].checked) {
      let reserved = room[i].value;
      reservation.room += reserved + ", ";
    }
    
  }
  if (reservation.room == "") {
    alert("Please select a room");
    return;
  }
  roomprice = "";
  switch (roomclass) {
    case "penthouse":
      reservation.roomclass = "Penthouse";
      roomprice = 500;
      break;
    case "Regular":
      reservation.roomclass = "Regular";
      roomprice = 300;
  }
  let total = roomprice * (reservation.room.split(", ").length - 1);
  reservation.total = total;
  reservation.resnum = resnum;

  hotelres.push(reservation);
  localStorage.setItem("hotelres", JSON.stringify(hotelres));
  alert("Reservation successful");
  window.location.reload();
}

function showRes(){

    let reservations = JSON.parse(localStorage.getItem("reservations"));
   console.log(reservations)
    let hotelres = JSON.parse(localStorage.getItem("hotelres"));
    let apstuff = document.getElementById("apstuff");
    let hotelstuff = document.getElementById("roomstuff");

    apstuff.innerHTML = "";
    hotelstuff.innerHTML = "";
    reservations.forEach((reservation, index) => {
      apstuff.innerHTML += `<tr><td>${index + 1}<td>${reservation.seats}</td><td>${reservation.seatclass}</td><td>${reservation.total}</td></tr>`
    })
    hotelres.forEach((room, index) => {
        console.log(room)
      hotelstuff.innerHTML += `<tr><td>${index + 1}<td>${room.room}</td><td>${room.roomclass}</td><td>${room.total}</td></tr>`
    })
    document.getElementById("resstuff").hidden = false;
    document.getElementById("hotelstuff").hidden = false;
}