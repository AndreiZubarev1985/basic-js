module.exports = function countCats(matrix) {
  if(matrix.length) {
  let result = matrix.reduce((accum, currentValue) => {
       return accum.concat(currentValue);
   });
   
   let result123 = result.filter( (item) => {
       if(item === '^^') return item;
   });
   let finalRes = result123.length;
   return finalRes;
  } else {
      return 0;
  }
 };
