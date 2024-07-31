function sortedFrequency(arr, num) {
    let leftIdx = findFirst(arr, num);
    if (leftIdx === -1) return -1;
    
    let rightIdx = findLast(arr, num);
    
    return rightIdx - leftIdx + 1;
}

function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < num) {
            left = mid + 1;
        } else if (arr[mid] > num || (mid > 0 && arr[mid - 1] === num)) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    
    return -1;
}

function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > num) {
            right = mid - 1;
        } else if (arr[mid] < num || (mid < arr.length - 1 && arr[mid + 1] === num)) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    
    return -1;
}

module.exports = sortedFrequency;
