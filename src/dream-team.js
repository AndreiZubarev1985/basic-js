module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
} else {
  let arrOfNames = members.filter( item => (typeof(item) === 'string') ? item : false);
   let secretName = arrOfNames.map( (item) => item.trim().slice(0, 1).toUpperCase()).sort().join('');
   return secretName; 
}
};