let inventory = []  

function addProduct() {
    let id = document.getElementById("id").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let product = {id, price, quantity}
    if(inventory.includes(product.id)) {
        alert("Product already exists, To edit remove it then add the new information.")
        return;
    }
    inventory.push(product)
    console.log(inventory)
}

function removeProduct() {
    let id = document.getElementById("id").value;
    if (!inventory.includes(id)) {
        alert("Product does not exist, to add the product first add it.")
        return;
    }
    inventory.splice(inventory.indexOf(id), 1)
   
}

function showInventory(){
    document.getElementById("inventory").innerHTML = ""
    document.getElementById("inventory").innerHTML += "<h3 class='text-center'>Product ID | Price |  Quantity</h3>"
    inventory.forEach(product => {
        console.log(product)
        document.getElementById("inventory").innerHTML += `<h5>${product.id} | ${product.price} | ${product.quantity}</h5>`
    })
    alert(totalPrice())
}

function totalPrice(){
    let totalPrice = 0
    inventory.forEach(product => {
        totalPrice += product.price * product.quantity
    })
    return 'Total Price: ' + totalPrice
}




localStorage.setItem("inventory", JSON.stringify(inventory))