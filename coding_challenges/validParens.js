'use strict'

// given a string, return a boolean whether it is valid with the number of open and closed
// parens '(sdhdf(fdsdf)sdfsd)' == true or '(sdfsdf(sdfsdfsdf)' =  false

function validParens(str){
	let counter = 0;

	for (let i = 0; i < str.length; i++){
		if (str[i] === '('){
			counter++;
		} else if (str[i] == ')'){
			counter--;
		}
		if (counter < 0){
			return false;
		}
	}
	if (counter === 0) {
		return true;
	} else {
		return false;
	}
}

const str = '(sdhdf(fdsdf)sdfsd)';
console.log(validParens(str));

