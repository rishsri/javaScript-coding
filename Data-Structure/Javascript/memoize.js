const memoize = (func) => {
  const cache = {};
  return (num) => {
    if (cache[num]) {
      return cache[num]
    } else {
      const result = func(num)
      cache[num] = result
      return result
    }
  }
}

const expensiveFunction = (num) => {
  return num * 2;
};

const memozieFunction = memoize(expensiveFunction)


// ______________- Advance version  with Time to leave 

function memoize(func, ttl = 5000) {
  let cache = new Map()
  return (...nums) => {
    let keys = JSON.stringify(nums)
    let now = Date.now()

    if (cache.has(keys)) {
      const { value, timeStamp } = cache.get(keys)
      if (now - timeStamp < ttl) {
        return value
      } else {
        cache.delete(keys)
      }
    } else {
      let result = func(...nums)
      cache.set(keys, { value: result, timeStamp: now })
      return result
    }
  }
}

const expensiveFunction = (num) => {
  return num * 2
}

const memozieFunction = memoize(expensiveFunction)

console.log(memozieFunction(2))

