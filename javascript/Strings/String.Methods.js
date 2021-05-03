// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");/// 7

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string 

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");//21

// Both indexOf(), and lastIndexOf() return -1 if the text is not found.

// Both methods accept a second parameter as the starting position for the search:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);    //21

// The search() method searches a string for a specified value and returns the position of the match

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate"); /// 7

// The two methods, indexOf() and search(), are equal?

// They accept the same arguments (parameters), and return the same value?

// The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// slice() method

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);///Banana

// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included)

// This example slices out a portion of a string from position 7 to position 12 (13-1):
// If a parameter is negative, the position is counted from the end of the string.
// This example slices out a portion of a string from position -12 to position -6:

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);///Banana


// The substring() Method
// substring() is similar to slice().

// The difference is that substring() cannot accept negative indexes.

var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);///Banana

// If you omit the second parameter, substring() will slice out the rest of the string.


// The substr() Method
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);///Banana


// If the first parameter is negative, the position counts from the end of the string.

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);//Kiwi


// Replacing String Content

// The replace() method replaces a specified value with another value in a string:

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");///
// The replace() method does not change the string it is called on. It returns a new string and is  case sensitive

// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

// concat() joins two or more strings:

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);///Hello World


// The trim() method removes whitespace from both sides of a string:

var str = "       Hello World!        ";
alert(str.trim());

// The charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
str.charAt(0);            // returns H


// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H


// A string can be converted to an array with the split() method:

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe