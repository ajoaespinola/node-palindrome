var app = require(../app.js);

describe('Given a string', function(){
	it('returns if palindrome string or not', function(){
		var val = "AMANAPLANACANALPANAMA";
		var revVal = "AMANAPLANACANALPANAMA";
		expect(app.controlPalindrome(val)).toBe(revVal);
	})