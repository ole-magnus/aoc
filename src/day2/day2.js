"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var movement = function (line) {
    var _a = line.split(' '), direction = _a[0], value = _a[1];
    return {
        direction: direction === 'up' || direction === 'down'
            ? 'y' : 'x',
        value: direction === 'up' ? (Number("-".concat(value))) : Number(value)
    };
};
var part1 = function (lines) {
    var _a = lines.reduce(function (acc, curr) {
        var mov = movement(curr);
        var res = acc;
        res[mov.direction] = acc[mov.direction] + mov.value;
        return res;
    }, { x: 0, y: 0 }), x = _a.x, y = _a.y;
    return x * y;
};
var part2 = function (lines) {
    var _a = lines.reduce(function (acc, curr) {
        var mov = movement(curr);
        var aim = mov.direction === 'y' ? (acc.aim + mov.value) : acc.aim;
        var x = mov.direction === 'x' ? (acc.x + mov.value) : acc.x;
        var y = mov.direction === 'x' ? (acc.y + (aim * mov.value)) : acc.y;
        console.log({ aim: aim, x: x, y: y });
        return { aim: aim, x: x, y: y };
    }, { aim: 0, x: 0, y: 0 }), x = _a.x, y = _a.y;
    return x * y;
};
(function () {
    var lines = (0, fs_1.readFileSync)('src/day2/input.txt', 'utf-8')
        .split('\n');
    console.log(part1(lines));
    console.log(part2(lines.slice(0, 10)));
})();
