calculate the frequency  
input => array = [1, 1, 2, 2, 2, 3];
output => [ 2, 2, 2, 1, 1, 3 ]

const array = [1, 1, 2, 2, 2, 3];

// 222113

// Function to calculate frequency and sort
const frequency = (arr) => {
  const obj = {};
  const result = [];

  // Count frequency of each element
  arr.forEach((val) => (obj[val] = (obj[val] || 0) + 1));

  // Push elements and their frequencies into the result array
  for (let i in obj) {
    result.push([parseInt(i), obj[i]]);
  }

  // Sort by frequency in descending order
  result.sort((a, b) => b[1] - a[1]);
  
  console.log(result,"result")

  // Return the sorted elements
  return result.flatMap(([val, freq]) => Array(freq).fill(val));
};

// Test the function
console.log(frequency(array));
