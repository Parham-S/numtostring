//declare test input on line 2
let number = 6;

function numbtoStr(num) {
	try {
		if (
			isNaN(num) ||
			(typeof num !== "string" && typeof num !== "number") ||
			num === ""
		) {
			throw "Not a Number!";
		}

		return num.toString();
	} catch (err) {
		console.log(err);

		if (typeof num === "string") {
			return num;
		}
	}
	return "";
}

console.log(numbtoStr(number));
