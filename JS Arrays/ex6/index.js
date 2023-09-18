let fruits = []

function addFruits() {
    let fruit = document.getElementById("fruit").value
    fruits.push(fruit)
    let list = document.getElementById("fruits")
    list.innerHTML = ""
    list.innerHTML += `${fruits}`
}
function newFirst(){
    let fruit = document.getElementById("fruit").value
    let list = document.getElementById("fruits")
    console.log(`It working!`)
    fruits.unshift(fruit)
    console.log(fruits);
    list.innerHTML = ""
    list.innerHTML += `${fruits}`
}
function newEnd(){
    let fruit = document.getElementById("fruit").value
    let list = document.getElementById("fruits")
    console.log(`It working!`)
    fruits.push(fruit)
    console.log(fruits);
    list.innerHTML = ""
    list.innerHTML += `${fruits}`
}
function removeFirst(){
    let fruit = document.getElementById("fruit").value
    let list = document.getElementById("fruits")
    console.log(`It working!`)
    fruits.shift()
    console.log(fruits);
    list.innerHTML = ""
    list.innerHTML += `${fruits}`
}
function removeSpecific(){
    let fruit = document.getElementById("fruit").value
    let list = document.getElementById("fruits")
    console.log(`It working!`)
    fruits.splice(2, 1)
    console.log(fruits);
    list.innerHTML = ""
    list.innerHTML += `${fruits}`
}
function addSpecific(){
    let fruit = document.getElementById("fruit").value
    let list = document.getElementById("fruits")
    console.log(`It working!`)
    fruits.splice(2, 0, `${fruit}`)
    console.log(fruits);
    list.innerHTML = ""
    list.innerHTML += `${fruits}`
}
function sort(){
    let fruit = document.getElementById("fruit").value
    let list = document.getElementById("fruits")
    console.log(`It working!`)
    fruits.sort()
    console.log(fruits);
    list.innerHTML = ""
    list.innerHTML += `${fruits}`
}
