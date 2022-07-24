mocha.setup('bdd');

let assert = chai.assert;

/*  Sum */
function sum (myArray){
	let sumValue = myArray.reduce( ( accumulator, currentValue ) => accumulator + currentValue);
	return sumValue;
}
console.log(sum ([10,20,30,40,50]));

/* Multiply */
function multiply(myArray) {
	let multiplyValue = myArray.reduce (( accumulator, currentValue) => accumulator * currentValue);
	return multiplyValue;
}
console.log(multiply ([10,20,30,40,50]));

/* Reverse */
function reverse(myStringParam){
	let reversedString = myStringParam.split('').reduce((reversed, character) => character + '' + reversed);
	return reversedString;
}
console.log(reverse("Our life is flat circle"));

/* Find the longest word than i parameter */
function findLogestWord(myArray, i){
	let longestWord = myArray.filter((element) => (element.length > i));
	return longestWord;
}
console.log(findLogestWord(["here","stands","Charles","Oliv"], 3));


/* Testing */
describe("Functional programming", function (){
	it ("1. Sum",
		function (){
			assert.equal (150, sum([10,20,30,40,50]));
		}
	)
	it ("2. Multiply", 
		function (){
			assert.equal (12000000, multiply([10,20,30,40,50]));
		}
	)
	it ("3. Reverse", 
		function(){
			assert.equal("elcric talf si efil ruO", reverse("Our life is flat circle"));
		}
	)
	it ("4. Find longest word than i parameter", 
		function (){
			assert.deepEqual(["steven", "harveys"], findLogestWord(["here","lies","steven","harveys"], 4));
		}
	)
});