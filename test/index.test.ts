import { describe, expect, it } from "vitest";

import { toFixedLengthArray } from "../src/index";

describe("toFixedLengthArray", () => {
    it("should pad the array with the default value if it is too short", () => {
        const input = [1, 2];
        const result = toFixedLengthArray(input, 5, 0);
        expect(result).toEqual([1, 2, 0, 0, 0]);
        // Also check type safety (this is a compile-time check, but we can verify at runtime)
        expect(result.length).toBe(5);
    });

    it("should trim the array if it is too long", () => {
        const input = [1, 2, 3, 4, 5];
        const result = toFixedLengthArray(input, 3, 0);
        expect(result).toEqual([1, 2, 3]);
        expect(result.length).toBe(3);
    });

    it("should return the original array if it has the correct length", () => {
        const input = [1, 2, 3];
        const result = toFixedLengthArray(input, 3, 0);
        expect(result).toEqual([1, 2, 3]);
        expect(result.length).toBe(3);
    });

    it("should handle different data types like strings", () => {
        const input = ["a", "b"];
        const result = toFixedLengthArray(input, 4, "z");
        expect(result).toEqual(["a", "b", "z", "z"]);
        expect(result.length).toBe(4);
    });

    it("should handle an empty input array", () => {
        const input: number[] = [];
        const result = toFixedLengthArray(input, 3, 0);
        expect(result).toEqual([0, 0, 0]);
        expect(result.length).toBe(3);
    });

    it("should handle an array with a length of zero", () => {
        const input = [1, 2, 3];
        const result = toFixedLengthArray(input, 0, 0);
        expect(result).toEqual([]);
        expect(result.length).toBe(0);
    });
});
