function lengthOfLongestSubstring(s: string): number {
    let maxLen: number = 0;
    let map: Map<string, number> = new Map();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right]; 
        // If the character is inside the current window, move the left pointer
        if (map.has(char) && map.get(char)! >= left) {
            left = map.get(char)! + 1;
        }
        
        map.set(char, right); // Updates or inserts the character's index
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
