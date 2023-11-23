// Combining Datatypes
// Question 1
const crayonBox = {
    colors:['red', 'blue', 'brown', 'purple]']
}
console.log(crayonBox.colors[2])


// Question 2
const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'
    }
}
console.log(bottle.cap.material)

// Question 3
const recipt = {
    bdaygift: {
        gift1: {
            name: 'car',
            make: 'Honda',
            model: 'Civic',
            year: '2020',
            price: 23000
        },
        gift2: {
            name: 'smartphone',
            make: 'Google',
            mode: 'Pixel 6',
            year: '2021',
            price: 899
        }
    }
}

console.log(recipt.bdaygift.gift1.name)

// Question 4
const apartmentBuilding = {
    floor1: {
        tenant1: {
            name: 'Dan',
            unitnumber: 101,
            rent: 700,
        },
        tenant2: {
            name: 'Dave',
            unitnumber: 102,
            rent: 600,
        },
    }
}

console.log(apartmentBuilding.floor1.tenant1.name)





// Combine objects, arrays, and functions more than one level deep
// Question 1
const knit = (item, size) => {
    return {
        item: item,
        size: size
    }
}

console.log(knit('scarf', '6ft'))

// Question 2
const crayonSelector = (color) => {
    return {
        crayonBox
    }
}
console.log(crayonSelector())

// Question 3
const powerButton = () => {
        const options = () => {
            console.log('select a song')
        }
        options()
}
powerButton()