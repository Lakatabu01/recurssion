//Merge and sort using recursion
function mergeAndSort(array) {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const firstPart = mergeAndSort(array.slice(0, mid));
  const secondPart = mergeAndSort(array.slice(mid));

  return merge(firstPart, secondPart);
}

const merge = (leftArray, rightArray) => {
  const mergedCollection = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
    const mergeElement = arrayWithMin.shift();
    mergedCollection.push(mergeElement);
  }

  return mergedCollection.concat(leftArray, rightArray);
};

console.log(mergeAndSort([2, 3, 4, 5, 7, 1, 6, 8]));
