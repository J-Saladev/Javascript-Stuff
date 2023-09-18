let popYear = [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990]
let pop = [151868, 153982, 156393, 158956, 161884, 165069, 168088, 171187, 174149, 177135, 179979, 182992, 185771, 188483, 191141, 193526, 195576, 197457, 199399, 201385, 203984, 206827, 209284, 211357, 213342, 215465, 217563, 219760, 222095, 224567, 227225, 229466, 231664, 233792, 235825, 237924, 240133, 242289, 244499, 246819, 249623]

let popData = []
console.log (pop.length)
for (let i = 0; i < popYear.length; i++) {
    popData.push ({
        year: popYear[i],
        popnum: pop[i]
    })
}
onload = () => {
    console.log(popData)
    document.getElementById("result").innerHTML = pop
}

function avgChange() {
   let sum = popData.reduce((a, b) =>{
    return a + b.popnum}, 0);
   
    let avg = sum / pop.length
    document.getElementById("stats").innerHTML = `Average Increase: ${avg.toFixed(0)}`
}

function greatestIncr(){
    
    let greatest = 0
    let greatestyear = 0
    for (let i = 1; i < popData.length; i++) {
        let j = i - 1
        let Increase = parseInt(popData[i].popnum) - parseInt(popData[j].popnum)
        if (Increase > greatest) {
            greatest = Increase
            greatestyear = popData[j].year
        }
    }
    document.getElementById("stats").innerHTML = `Greatest Increase: ${greatest} <br>`
    document.getElementById("stats").innerHTML += `Year: ${greatestyear}`
}

function leastIncr(){
    let least = 10000000
    let leastyear = 0
    for (let i = 1; i < popData.length; i++) {
        let j = i - 1
        let Increase = parseInt(popData[i].popnum) - parseInt(popData[j].popnum)
        if (Increase < least) {
            least = Increase
            leastyear = popData[j].year
        }
    }
    document.getElementById("stats").innerHTML = `Least Increase: ${least} <br>`
    document.getElementById("stats").innerHTML += `Year: ${leastyear}`
}