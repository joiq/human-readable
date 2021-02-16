const button = document.querySelector('#ok');
const input = document.querySelector('#nums');
const elem = document.querySelector('#numInHuman');

button.addEventListener('click', r);

function r() {
  let inputValue = +input.value;

	let listOfNum = {
  	0: 'zero',
  	1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million'
  };
  
  let str = '';
  
  let thousand = Math.trunc(inputValue / 1000);
  let hundred = Math.trunc(inputValue % 1000 / 100);
  let tens = (inputValue % 1000 % 100) - (inputValue % 1000 % 100 % 10);
  let nums = inputValue % 1000 % 100 % 10;
  
  console.log('-------------');
  console.log(inputValue);
  console.log(thousand);
  console.log(hundred);
  console.log(tens);
  console.log(nums);
  console.log('-------------');
  
  if (inputValue < 1000 && inputValue >= 100) {
  	str += listOfNum[hundred] + ' hundred';
    
    if (tens + nums >= 1 && tens + nums <= 29) {
    	str += ' ' + listOfNum[tens + nums];
    } 
    
    else if (tens >= 30) {
    	if (nums > 0) {
      	str += ' ' + listOfNum[tens] + ' ' + listOfNum[nums];
      } else {
      	str += ' ' + listOfNum[tens];
      }
    }
  }
  
  else if (inputValue < 100 && inputValue >= 30) {
  	if (nums === 0) {
    	str += listOfNum[tens];
    } else {
    	str += listOfNum[tens] + ' ' + listOfNum[nums];
    }
  	
  }
  
  else if (inputValue < 30 && inputValue >= 0) {
  	str += listOfNum[inputValue];
  }
  
  elem.textContent = str;
}