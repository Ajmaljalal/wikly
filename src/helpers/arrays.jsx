export const findInArrayOfObjects = (array, key, value) => {
      return array.some((item) => {
        return item[key] === value
    });
}