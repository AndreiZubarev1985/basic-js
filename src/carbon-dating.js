const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 
  if(typeof sampleActivity !== 'string' || sampleActivity.length === 0) {
      return false;
  } else {
     let result = parseFloat(sampleActivity);
     if(isNaN(result)) return false;
     if(result <= 0 || result > 15) return false;
     return Math.ceil(Math.log(MODERN_ACTIVITY/ result) * HALF_LIFE_PERIOD/ 0.693);
  }
  
   
  }





// function dateSample(sampleActivity) {
//   let result = +sampleActivity;
       
//     let res1 = Math.ceil(Math.log(MODERN_ACTIVITY/ parseFloat(result)) * HALF_LIFE_PERIOD/ 0.693);
//         if(typeof res1 !== 'number' || res1 == 'Infinity') {
//             return false;
//         } else {
//             return res1;
//         }
//     };

