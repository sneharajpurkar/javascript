// Q. Find count of number 45 from given Array.
// [12,13,45,67,43,45,76,89,54,23,7,8797,243,23234]

// var count = 0;
// var array = [12,13,45,67,43,45,76,89,54,23,7,8797,243,23234];
// for(var i = 0; i < array.length ; i++){
//     if( array[i] === 45){
//     count++;
// }
// }
// console.log(count);

// Q. find addition of every second number from  57689 - 346578.

// var firstdigit = 57689
// var secondtdigit = 346578
// var add = 0;
// for(var i = firstdigit + 1; i < secondtdigit; i+=2 ){
//     add = add + i
// }
// console.log(add, "add here")

// Q. find numbers which addition is Target 
// nums = [2,7,11,15], target=9

// var nums = [2,7,11,15]
// var target = 9
// for(var i=0; i<nums.length - 1; i++){ // 0, 1, 2, 3, 3<3
//         for(var j= i + 1; j<nums.length; j++){ // 1, 2, 3, 3<3
//        if((nums[i] + nums[j]) === target){
//           console.log(nums[i],nums[j])
//           //2+7
//           //2+11

//           //7+11
//        }
//     }
// }

// Q. find 3 numbers which addition is Target
// [2,4,6,8,9,10,13,78,12,34,23]
// target = 35

// var nums = [2, 4, 6, 8, 9, 10, 13, 78, 12, 34, 23]
// var target = 35
// for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//         for (var k = j; k < nums.length; k++){
//             if((nums[i] + nums[j] + nums[k]) === target){
//                 console.log(nums[i],nums[j],nums[k])
//             }
//         }
//     }
// }
