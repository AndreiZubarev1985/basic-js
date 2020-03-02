module.exports = function repeater(str, options) {
    let result = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition + options.separator).repeat(options.repeatTimes-1) + str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition;
    return result;
};