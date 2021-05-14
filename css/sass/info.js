// CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.

// 1. Variables

// Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Here's an example:

// $font-stack:    Helvetica, sans-serif;
// $primary-color: #333;

// body {
//   font: 100% $font-stack;
//   color: $primary-color;
// }

// This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

// 2. Partials

// You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading underscore. You might name it something like _partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @use rule.

// 3. Modules

// You don't have to write all your Sass in a single file. You can split it up however you want with the @use rule. This rule loads another Sass file as a module, which means you can refer to its variables, mixins, and functions in your Sass file with a namespace based on the filename. Using a file will also include the CSS it generates in your compiled output!

// Example

// _base.scss

// $font-stack:    Helvetica, sans-serif;
// $primary-color: #333;

// body {
//   font: 100% $font-stack;
//   color: $primary-color;
// }
// // styles.scss
// @use 'base';

// .inverse {
//   background-color: base.$primary-color;
// }

// 4. Mixins

// Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform.

// SCSSSassCSS
// SCSS SYNTAX
// @mixin transform($property) {
//   -webkit-transform: $property;
//   -ms-transform: $property;
//   transform: $property;
// }
// .box { @include transform(rotate(30deg)); }
// CSS OUTPUT
// .box {
//   -webkit-transform: rotate(30deg);
//   -ms-transform: rotate(30deg);
//   transform: rotate(30deg);
// }

// To create a mixin you use the @mixin directive and give it a name. We've named our mixin transform. We're also using the variable $property inside the parentheses so we can pass in a transform of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with @include followed by the name of the mixin.

// 5. Operators
// Doing math in your CSS is very helpful. Sass has a handful of standard math operators like +, -, *, /, and %. In our example we're going to do some simple math to calculate widths for an aside & article.

// SCSSSassCSS
// SCSS SYNTAX
// .container {
//   width: 100%;
// }

// article[role="main"] {
//   float: left;
//   width: 600px / 960px * 100%;
// }

// aside[role="complementary"] {
//   float: right;
//   width: 300px / 960px * 100%;
// }
// CSS OUTPUT
// .container {
//   width: 100%;
// }

// article[role="main"] {
//   float: left;
//   width: 62.5%;
// }

// aside[role="complementary"] {
//   float: right;
//   width: 31.25%;
// }
// We've created a very simple fluid grid, based on 960px. Operations in Sass let us do something like take pixel values and convert them to percentages without much hassle.