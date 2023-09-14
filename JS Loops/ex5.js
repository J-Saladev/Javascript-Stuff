function fullStud(){
    let fullStud = document.getElementById("table");
    fullStud.innerHTML += `<tr><td>$6000.00 Per Semester</td><td>2023</td></tr>`;
    for (let i = 1; i <=5; i++) {
        let rise  = (i * .02) + 1;
        let year = 2023 + i
        let price = rise * 6000
        fullStud.innerHTML += `<tr><td>$${price.toFixed(2)} Per Semester</td><td>${year}</td></tr>`;
    }
}
onload = fullStud;