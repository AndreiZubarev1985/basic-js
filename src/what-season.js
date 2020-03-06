module.exports = function getSeason(date) {
  if(!date) {
      return 'Unable to determine the time of year!';
  } else if(typeof date !== 'object' || date.hasOwnProperty('toString')) {
    throw new Error('Error');
  } else {
  let result = date.getMonth();
  if(result >= 0 && result <= 1 || result == 11) return 'winter';
  if(result >= 2 && result <= 4) return 'spring';
  if(result >= 5 && result <= 7) return 'summer';
  if(result >= 8 && result <= 10) return 'autumn/fall';
  } 

  
};
