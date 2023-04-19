function max(nums, strict = true) {
    // Define o número máximo inicialmente como o primeiro número no array
    let maxNum = nums[0];
  
    // Loop pelos números restantes no array
    for (let i = 1; i < nums.length; i++) {
      if (strict) {
        if (nums[i] > maxNum) {
          maxNum = nums[i];
        }
      } else {
        if (nums[i] >= maxNum) {
          maxNum = nums[i];
        }
      }
    }
      return maxNum;
  }
  console.log(max([1, 5, 2, 9, 3], false));