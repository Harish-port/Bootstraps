if (!Object.customObjEntries) {
    Object.customObjEntries = function (obj) {
        if (typeof obj == null || (typeof obj !== "object" && typeof obj !== "function")) {
            throw new Error("Object.customObjEntires called on an non-object")
        }
        var values = [];
        for (let prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                values.push(obj[prop])
            }
        }
        return values
    }
}

var obj = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(Object.customObjEntries(obj));
