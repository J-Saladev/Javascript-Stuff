function seaLevel(){
    let seaLevel = document.getElementById("table");
    for (let i = 1; i <=10; i++) {
        let rise  = i * 1.5;
        let year = 2023 + i
        seaLevel.innerHTML += `<tr><td>+${rise} Millimeters</td><td>${year}</td></tr>`;
    }
}
onload = seaLevel;