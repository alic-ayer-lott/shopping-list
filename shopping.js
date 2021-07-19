const groceries = 
[
    {
        id: 1,
        item: "milk",
        price: 3,
        department: "dairy",
        needToBuy: true
    },
    {
        id: 2,
        item: "eggs",
        price: 4,
        department: "dairy",
        needToBuy: false
    },
    {
        id: 3,
        item: "ham",
        price: 3.50,
        department: "deli",
        needToBuy: true
    },
    {
        id: 4,
        item: "ketchup",
        price: 2.50,
        department: "condiments",
        needToBuy: false
    }

]

// console.log(groceries)

const addingPickles ={
        item: "pickles",
        price: 11,
        department: "condiments",
        needToBuy: true
}

const addingPeanuts = {
    item: "Peanuts",
    price: 6,
    department: "snacks",
    needToBuy: false
}

const addingCrackers = {
    item: "Crackers",
    price: 12.5,
    department: "snacks",
    needToBuy: true
}

const addingSoap = {
    item: "Soap",
    price: 10,
    department: "Personal Care",
    needToBuy: false
}

const addingToothpaste = {
    item: "Toothpaste",
    price: 5.5,
    department: "personal care",
    needToBuy: true
}


const addToShoppingList = (groceryObject) => {
    const lastIndex = groceries.length - 1
    const currentLastGrocery = groceries [lastIndex]
    const maxId = currentLastGrocery.id
    const idForNewGrocery = maxId + 1


    groceryObject.id = idForNewGrocery;
    groceryObject.dateCreated = Date();
    groceries.push(groceryObject)
}

addToShoppingList(addingPickles)
addToShoppingList(addingPeanuts)
addToShoppingList(addingCrackers)
addToShoppingList(addingSoap)
addToShoppingList(addingToothpaste)

// console.log(groceries)

const maxPrice = 8;

for (const grocery of groceries) {
    if (grocery.price >= maxPrice) {
        console.log(grocery)
    }
}