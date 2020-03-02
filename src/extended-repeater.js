module.exports = function repeater(str, options) {
    if(options.addition === undefined && options.additionSeparator === undefined) {
        if(options.separator === undefined) {
         let result = (str+'+').repeat(options.repeatTimes-1) + str;
         return result;
        } else {
     let result = (str + options.separator).repeat(options.repeatTimes-1) + str;
     return result;
 }
    } else if(options.separator === undefined) {
       let result = (str+'+').repeat(options.repeatTimes-1) + str;
        return result;
    } else {
     let result = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition + options.separator).repeat(options.repeatTimes-1) + str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition;
     return result;
 }
 };