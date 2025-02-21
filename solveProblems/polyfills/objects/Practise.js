Object.prototype.customObject = function (proto) {
  if (proto === null || typeof proto !== "Object") {
    throw new Error("Argument is an object");
  }
  function F(){};
   F.prototype = proto;
   return new F();
};
