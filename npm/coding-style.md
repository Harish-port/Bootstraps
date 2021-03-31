NPM's unconventional coding style
URL : https://docs.npmjs.com/misc/coding-style.html


# Line Length
< 80 characters

# Curly braces

...same line...
function () {

...bad..
if (foo) { bar() }

...good...
if (foo) bar()

# Semicolons
Don't use them except :
1. for (;;)
2. while (something) ;
3. case 'foo': doSomething(); break
4. In front of a leading ( or [ at the start of the line like below:
  ;(x || y).doSomething() //prevent the interpretation to be a function call
  ;[a, b, c].forEach(doSomething) // prevent the interpretation to be a prop access.

# Comma First
Put the comma at the start of the next line.

var magicWords = [ 'abracadabra'
                 , 'gesundheit'
                 , 'ventrilo'
                 ]
  , spells = { 'fireball' : function () { setOnFire() }
             , 'water' : function () { putOut() }
             }
  , a = 1
  , b = 'abc'
  , etc
  , somethingElse

# Quotes
...bad...
var notOk = "Just double quotes"

...good...
var ok = 'String contains "double" quotes'
var alsoOk = "String contains 'single' quotes or apostrophe"

# Whitespace
1. Put a single space in front of ( for anything other than a function call.
2. Don’t leave trailing whitespace at the end of lines.
3. Don’t indent empty lines.
4. Don’t use more spaces than are helpful.

# Callbacks, Sync/async Style
1. Use async versions of functions
2. The callback should always be the last argument in the list.
3. Never to ever ever throw anything. Just send the error message back as the first argument to the callback.

# Errors
Always create a new Error object with your message. Don’t just return a string message to the callback.

# Logging
Done using npmlog utility.
Use appropriate log levels.

# Cases
1. Use CAPS_SNAKE_CASE for constants
2. Use lowerCamelCase for multiword identifiers
3. Use UpperCamelCase for class names
4. Use all-lower-hyphen-css-case for multiword filenames and config keys.
5. Use a single uppercase letter for anonymous function names ( where recursivity is needed )



