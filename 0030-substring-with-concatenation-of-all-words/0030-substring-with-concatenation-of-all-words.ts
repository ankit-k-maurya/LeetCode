function findSubstring(s: string, words: string[]): number[] {
    const ans: number[] = [];
    const n = s.length;
    const m = words.length;
    if (n === 0 || m === 0) return ans;
    
    const w = words[0].length;
    const totalLen = m * w;
    if (n < totalLen) return ans;

    // Build the master frequency map of required words
    const map = new Map<string, number>(); 
    for (const x of words) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    // Slide the window for each possible word offset
    for (let i = 0; i < w; i++) {
        const temp = new Map<string, number>();
        let count = 0;
        let k = i; // Left pointer of the sliding window

        for (let j = i; j + w <= n; j += w) {
            const word = s.substring(j, j + w);

            if (map.has(word)) {
                temp.set(word, (temp.get(word) || 0) + 1);
                count++;

                // If a word's count exceeds the allowed frequency, shrink the window from the left
                while ((temp.get(word) || 0) > (map.get(word) || 0)) {
                    const removeWord = s.substring(k, k + w);
                    temp.set(removeWord, temp.get(removeWord)! - 1);
                    count--;
                    k += w;
                }

                // If the number of matched words equals total required words, record the index
                if (count === m) {
                    ans.push(k);
                }
            } else {
                // Invalid word encountered: reset the window entirely
                temp.clear();
                count = 0;
                k = j + w;
            }
        }
    }
    return ans;
}
