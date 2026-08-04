//Binary search assumes the array is sorted.
//  If it isn’t, it may discard the half that actually contains the target.
const arr = [10, 2, 8, 5, 15];
//Search for 5:
// Middle element is 8.
//Since 5 < 8, binary search goes left.
//The value 5 is actually on the right side.

//So the algorithm returns -1 even though 5 exists in the array.