var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
return array
}

function addElementToEndOfArray(array, element) {
const addElementToEndOfArray = [...array, 'foo'];
return addElementToEndOfArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var destructivelyAddElementToEndOfArray = [ 1, 'foo'];
  destructivelyAddElementToEndOfArray.push
  return destructivelyAddElementToEndOfArray.push;
}

function accessElementInArray(array, index) {
  console.log(accessElementInArray[1]);
}
