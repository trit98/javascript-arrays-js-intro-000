var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
const addElementToBeginningOfArray.unshift = ['foo', ...array];
return addElementToBeginningOfArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
const destructivelyAddElementToBeginningOfArray = ['foo', ...array];
return destructivelyAddElementToBeginningOfArray;
}

function addElementToEndOfArray(array, element) {
const addElementToEndOfArray = [...array, "foo"];
return addElementToEndOfArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  const destructivelyAddElementToEndOfArray = [...array, "foo"];
  return destructivelyAddElementToEndOfArray;
}

function accessElementInArray(array, index) {
  console.log(accessElementInArray[1]);
}
