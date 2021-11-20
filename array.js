// Merge and shuffle multiple arrays to display only three values ​​in the array.

const a = ['a', 'b', 'c', 'd'];
const b = ['ab', 'bc', 'cd', 'de'];
const c = ['z', 'x', 'y', 'n'];

const mergeArray = a.concat(b).concat(c);

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const sliceArray = shuffle(mergeArray).slice(0, 3);

console.log(sliceArray);
