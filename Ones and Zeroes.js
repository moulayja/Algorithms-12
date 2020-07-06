
/*
Write a function that returns true if every consecutive sequence of ones is
followed by a consecutive sequence of zeroes of the same length.
*/

function sameLength(s) {
	let zeroes = s.match(/0+/g).map(x=>x.length);
	let ones = s.match(/1+/g).map(x=>x.length);
	return (zeroes.length === ones.length) ? zeroes.every((v,i)=> v===ones[i]) : false;
}