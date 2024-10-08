const nested = {
  a: "12",
  b: 23,
  c: {
    p: 23,
    z: {
      l: [24, 34],
    },
  },
}

const objectFlat = (obj, prefix = "", result = {}) => {

  for (let i in obj) {
    let fullfilled = prefix ? prefix + "." + i : i
    	if(typeof obj[i] === "object" && obj[i] !== null) {
      	objectFlat(obj[i], fullfilled, result)
      }else {
      	result[fullfilled] = obj[i]
      }
   }
  return result
}

console.log(objectFlat(nested))
