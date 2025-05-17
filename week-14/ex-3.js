function findMax(nums) {
   //Start Coding Here
   let maxNum = nums[0]
   for(let i = 0; i < nums.length; i++){
    if(nums[i] > maxNum){
        maxNum = nums[i]
    }
   }
   return maxNum

};

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2