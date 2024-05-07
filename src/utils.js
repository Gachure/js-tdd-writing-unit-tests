// src/utils.js
export function pointsForWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let points = 0;
  
    for (const char of word) {
      if (vowels.includes(char.toLowerCase())) {
        points += 1;
      } else {
        points += 2;
      }
    }
  
    return points;
  }
  