let veggies = []

function addVeggie(veggie) {
    veggie = document.getElementById("input").value
    veggies.push(veggie)
    document.getElementById("list").innerHTML +='<li>' + veggie + '</li>'
    veggies.sort()
    console.log(veggies)
    document.getElementById("result").innerHTML = veggies
    document.getElementById("input").value = ""
}