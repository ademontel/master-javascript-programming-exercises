function isRotated(str1, str2) {
  let concatenatedStr = str1 + str1;
  return concatenatedStr.includes(str2);
}

let output = isRotated("Hello World", "orldHello W")
console.log(output) // --> true
 