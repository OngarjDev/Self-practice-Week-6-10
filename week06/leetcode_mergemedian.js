
/**
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

 * โจทย์จาก Leetcode "median-of-two-sorted-arrays" Hard
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merge = [...nums1,...nums2].sort((a,b) => a - b)
    let len = merge.length
    if(len % 2 === 0){
        let mid1 = merge[len / 2 - 1];
        let mid2 = merge[len / 2];
        return (mid1 + mid2) / 2;
    }else{
        return merge[parseInt(len / 2)];
    }
    // return Number.isInteger(position)?merge[position]: position
};