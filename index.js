// Write your solution in this file!

let driver = {}

let updateDriverWithKeyAndValue = (driver, key, value) => {

    return Object.assign({}, driver, {[key]: value})

}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {

    driver[key] = value
    return driver

}

let deleteFromDriverByKey = (driver, key) => {

    const newObj = {...driver}
    delete newObj[key]
    return newObj

}

let destructivelyDeleteFromDriverByKey = (driver, key) => {

    delete driver[key]
    return driver
}