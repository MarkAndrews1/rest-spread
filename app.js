//1.
  const filterOutOdds = (...arguments) => arguments.filter((val) => val % 2 === 0);

//2.
  const findMin = (...nums) => {
    return Math.min(...nums)
  }

//3.
  const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2}
  }

//4.
  const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((val) => val *2)]

//5.
  const removeRandom =(items) => {
        let index = Math.floor(Math.random() * items.length)
        return [...items.slice(0, index), ...items.splice(index + 1)]
  }

//6.
  const extend = (arr1, arr2) => {
    return [...arr1, ...arr2]
  }

//7.
  const addKeyVal = (obj, key, val) => {
    let copyObj = {...obj}
    copyObj[key] = val
    return copyObj
  }

//8.
  const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
  }

//9.
  const combine = (obj1, obj2) => {
    return {...obj1, obj2}
  }

//10.
  const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj
  }