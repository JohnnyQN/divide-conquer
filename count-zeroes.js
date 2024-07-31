function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === 0) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return arr.length - left;
}

module.exports = countZeroes;
