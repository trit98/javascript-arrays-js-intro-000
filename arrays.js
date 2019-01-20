var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
const addElementToBeginningOfArray = ['foo', ...array];
return addElementToBeginningOfArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
var destructivelyAddElementToBeginningOfArray
destructivelyAddElementToBeginningOfArray.unshiftt = ['foo', 1 ];
return destructivelyAddElementToBeginningOfArray;
}

function addElementToEndOfArray(array, element) {
const addElementToEndOfArray = [...array, 'foo'];
return addElementToEndOfArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var destructivelyAddElementToEndOfArray
  destructivelyAddElementToEndOfArray.push = [ 1, 'foo'];
  return destructivelyAddElementToEndOfArray;
}

function accessElementInArray(array, index) {
  console.log(accessElementInArray[1]);
}
