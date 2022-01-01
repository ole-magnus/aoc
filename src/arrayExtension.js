"use strict";
exports.__esModule = true;
Array.prototype.sumThrees = function () {
    var windows = [];
    if (this.length < 3)
        return windows;
    for (var i = 2; i < this.length; i++) {
        windows.push(this[i - 2] + this[i - 1] + this[i]);
    }
    return windows;
};
