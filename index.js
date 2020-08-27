let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    const newDriver = { ...object };

    newDriver[key] = value;

    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromDriverByKey(object, key) {
    const newObj = Object.assign({}, object)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key]
    return object
}