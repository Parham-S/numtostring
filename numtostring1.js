//declare test input on line 2
let testNumber = 5;

function inputNumStr() {
	if (isNaN(testNumber)) {
		console.log(testNumber, "is not a number, returning as is.");
		return testNumber;
	}
	{
		console.log(testNumber, "is a number type, returning as string.");
		return String(testNumber);
	}
}
console.log(inputNumStr(testNumber));
