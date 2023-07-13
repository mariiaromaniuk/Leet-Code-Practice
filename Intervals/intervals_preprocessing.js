// Do a pre-processing to optimize the intervals array before passing it into a function
// Implement the function below to query if 'value' is contained in any of the intervals
const intervals = [[-4, 3], [20.1, 100], [2.5, 7]];

// Function to sort and merge overlapping intervals
function merge_intervals(intervals) {
    // Sort intervals by start value
    intervals.sort((a, b) => a[0] - b[0]);

    // Array to hold the merged intervals
    let merged = [];
    for (let i = 0; i < intervals.length; i++) {
        // If the array is empty, or if the current interval does not overlap with the previous, append it
        if (!merged.length || merged[merged.length-1][1] < intervals[i][0]) {
            merged.push(intervals[i]);
        } else {
            // Otherwise, there is overlap, so we merge the current and previous intervals 
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], intervals[i][1]);
        }
    }
    return merged;
}

// Updating intervals to the merged intervals.
intervals = merge_intervals(intervals);

// Rest of the code remains the same.
function is_contained(value) {
    for (let i = 0; i < intervals.length; i++) {
        if (value >= intervals[i][0] && value <= intervals[i][1]) {
            return true;
        }
    }
    return false;
}

console.log("Merged intervals: ", intervals);

console.log(is_contained(-5)); // Should return false.
console.log(is_contained(2)); // Should return true.
