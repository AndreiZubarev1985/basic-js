module.exports = function transform(arr) {
    arr.map((item, index) => {
        if(item === '--double-next') {
            return arr[index] = arr[index + 1];
        } else if(item === '--double-prev') {
            return arr[index] = arr[index - 1];
        } else if(item === '--discard-prev') {
            arr.splice([index - 1], 2);           
        } else if(item === '--discard-next') {
           arr.splice(index, 2); 
        } else {
            return item;
        }
    });
    return arr;
};

