function wordPattern(pattern: string, s: string): boolean {
    let arr: string[] = s.split(' ');
    if (pattern.length !== arr.length) return false;

    const patternToWord = new Map<string, string>();
    const wordToPattern = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = arr[i];

        // Check pattern -> word mapping
        if (patternToWord.has(char)) {
            if (patternToWord.get(char) !== word) return false;
        } else {
            patternToWord.set(char, word);
        }

        // Check word -> pattern mapping (ensures bi-directional uniqueness)
        if (wordToPattern.has(word)) {
            if (wordToPattern.get(word) !== char) return false;
        } else {
            wordToPattern.set(word, char);
        }
    } 

    return true;
};
