var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
const addElementToBeginningOfArray = ['foo', ...array];
return addElementToBeginningOfArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
const destructivelyAddElementToBeginningOfArray = ['foo', 1 ];
return destructivelyAddElementToBeginningOfArray;
}

function addElementToEndOfArray(array, element) {
const addElementToEndOfArray = [...array, 'foo'];
return addElementToEndOfArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  const destructivelyAddElementToEndOfArray = [ 1, 'foo'];
  return destructivelyAddElementToEndOfArray;
}

function accessElementInArray(array, index) {
  console.log(accessElementInArray[1]);
}
