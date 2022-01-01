"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
require("../arrayExtension");
var part1 = function (numbers) {
    return numbers
        .reduce(function (acc, curr) {
        if (acc.last) {
            return {
                count: curr > acc.last ? (acc.count + 1) : acc.count,
                last: curr
            };
        }
        return { last: curr, count: acc.count };
    }, { count: 0 })
        .count;
};
var part2 = function (numbers) {
    return part1(numbers.sumThrees());
};
(function () {
    var lines = (0, fs_1.readFileSync)('src/day1/input.txt', 'utf-8')
        .split('\n')
        .map(Number);
    console.log("Part 1: ".concat(part1(lines)));
    console.log("Part 2: ".concat(part2(lines)));
})();
