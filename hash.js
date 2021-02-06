var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Hash = /** @class */ (function () {
    function Hash(objects) {
        var _this = this;
        var keys = Object.keys(objects);
        console.log("keys:", keys);
        keys.forEach(function (key) {
            _this.push(key, objects["" + key]);
        });
        console.log("Hash:", this.hash);
    }
    // Take new key value pair and assing to hash
    Hash.prototype.push = function (key, value) {
        var target = {};
        var source = {};
        if (key === "step" || key === "min" || key === "max") {
            // Store new value to source
            source = this.assignValue(value, key);
            // copy ne source to target and assign target to hash
            console.log("source:", source);
            this.hash = __assign(__assign({}, this.hash), source);
        }
        return this.hash;
    };
    // Assigns hash key values
    Hash.prototype.assignValue = function (value, key) {
        var sourceHash = {};
        sourceHash[key] = value.toString();
        return sourceHash;
    };
    return Hash;
}());
var myObject = {
    step: 0.1,
    min: 0,
    max: 100
};
var myHash = new Hash(myObject);
