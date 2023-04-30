"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// twoSum.test.ts
const twoSum_1 = __importDefault(require("./twoSum"));
describe('twoSum', () => {
    test('should return indices of two numbers that add up to the target', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const expectedResult = [0, 1];
        expect((0, twoSum_1.default)(nums, target)).toEqual(expect.arrayContaining(expectedResult));
    });
    test('should work with negative numbers', () => {
        const nums = [-3, 4, 3, 90];
        const target = 0;
        const expectedResult = [0, 2];
        expect((0, twoSum_1.default)(nums, target)).toEqual(expect.arrayContaining(expectedResult));
    });
    test('should work with unsorted numbers', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const expectedResult = [1, 2];
        expect((0, twoSum_1.default)(nums, target)).toEqual(expect.arrayContaining(expectedResult));
    });
    test('should throw an error if no solution is found', () => {
        const nums = [1, 2, 3, 4];
        const target = 10;
        expect(() => (0, twoSum_1.default)(nums, target)).toThrow("No two sum solution");
    });
});
