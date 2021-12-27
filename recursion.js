//Balance Parenthesis result as true or false
function balancedParenthesis(str){
    const array = [];
      
    const open = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
      
    const closed = {
      '}': true,
      ']': true,
      ')': true
    }
      
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (open[char]) {
        array.push(char);
      } else if (closed[char]) {
        if (open[array.pop()] !== char){
            return false;
        }
      }
    }
  
    return array.length === 0;  
  }
  console.log(balancedParenthesis("((())))"))
  console.log(balancedParenthesis("[()()]"))

//convert decimal to binary
const test = 11
const result = test.toString(2);
console.log('Binary:' + ' ' + result);

//GCD
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(7, 14));
  console.log(gcd_two_numbers(9, 3));