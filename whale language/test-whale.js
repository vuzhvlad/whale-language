const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for ( i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  if ( input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for ( j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      //console.log(input[i]);
      resultArray.push(input[i]);
      //console.log(resultArray);
    }
  }
}

const resultString = resultArray.join("").toUpperCase();
console.log(resultString);