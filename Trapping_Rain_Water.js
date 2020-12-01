/*
 Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 
 Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 Output: 6
 The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.
*/
// OPTION 2 --> Two Pointers
// Time: O(n), Space: O(1)
var trap = function(heights){
  let trapped = 0, low = 0, high = heights.length-1;
  let leftMax = 0, rightMax = 0;
  while (low < high){
    if (heights[low] <= heights[high]){ 
      // we know that there is wall in the right that is either equal to
      // or higher than our tallest wall in the left
      // that's why our index has moved so far and we are in this conditional statement
      if (leftMax > heights[low]) trapped += leftMax - heights[low];
      else leftMax = heights[low];
      low++;
    } else {
      // we know that there is wall in the left that is either equal to
      // or higher than our tallest wall in the right
      // that's why our index has moved so far and we are in this conditional statement
      if (rightMax > heights[high]) trapped += rightMax - heights[high];
      else rightMax = heights[high];
      high--;
    }
  }
  return trapped;
}

// OPTION 2 --> Dynamic Programming
// Time: O(n), Space: O(n)
var trap = function(height){
  const size = height.length;
  const leftMax = new Array(size);
  const rightMax = new Array(size);
  let water = 0;
    
  leftMax[0] = height[0];
  rightMax[size - 1] = height[size - 1];
    
  // find the height of left wall for each elevation
  for (let i = 1; i < size; i++){
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  // find the height of right wall for each elevation
  for (let i = size - 2; i >= 0; i--){
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  // the height of the water for each elevation would be the 
  // the height of the shorter wal minus the elevation height
  for (let i = 1; i < size - 1; i++){
    water += Math.min(leftMax[i], rightMax[i]) - height[i]);
  }
  return water;
};
