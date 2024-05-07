// Your tests here
// src/__tests__/utils.test.js
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test"; // 2 + 1 + 2 + 2 = 7
    const expectedPoints = 7;

    const points = pointsForWord(word);

    expect(points).toBe(expectedPoints);
  });
});
