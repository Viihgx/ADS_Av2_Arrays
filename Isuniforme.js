function isUniform(arr) {
    let primeiroElemento = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== primeiroElemento) {
        return false;
      }
    }

    return true;
  }
    console.log(isUniform([1, 1, 1, 1])); // true
    console.log(isUniform([2, 1, 1, 1])); // false
    console.log(isUniform(['a', 'a', 'a'])); // true
    console.log(isUniform(['a', 'b', 'a'])); // false

  