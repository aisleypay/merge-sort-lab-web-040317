function findMinAndRemoveSorted(a) {
  let minNum = a[0]
  let minIndex = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] < minNum) {
      minNum = a[i]
      minIndex = i
    }
  }

  a.splice(minIndex, 1)
  return minNum
}

function findMinAndRemove(a1, a2) {
  let minA1 = a1[0]
  let minA2 = a2[0]

  return minA1 < minA2 ? a1.shift() : a2.shift()
}

function merge(a1, a2) {
  let currentMin;
  let sorted = [];

  while (a1.length !== 0 && a2.length !== 0) {
    currentMin = findMinAndRemove(a1, a2)
    sorted.push(currentMin)
  }

  return sorted.concat(a1).concat(a2);
}

function mergeSort(array) {
  let midPoint = array.length / 2
  let firstHalf = array.slice(0, midPoint)
  let secondHalf = array.slice(midPoint, array.length)
  let sorted;

  if(array.length < 2){
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
