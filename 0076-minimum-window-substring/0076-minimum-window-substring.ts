function minWindow(s: string, t: string): string {
    if (!s || !t || s.length < t.length) {
        return '';
    }

    // Use a standard JavaScript Map with string keys and number values
    const map = new Map<string, number>();
    for (const c of t) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    let count = t.length;
    let start = 0;
    let end = 0;
    let minLen = Infinity; // JavaScript uses 'Infinity' with a lowercase 'y'
    let startInd = 0;

    while (end < s.length) {
        const endChar = s[end];

        // If the character is part of target string 't'
        if (map.has(endChar)) {
            if (map.get(endChar)! > 0) {
                count--;
            }
            map.set(endChar, map.get(endChar)! - 1);
        }
        end++;

        // When a valid window is found
        while (count === 0) {
            if (end - start < minLen) {
                minLen = end - start;
                startInd = start;
            }

            const startChar = s[start];
            if (map.has(startChar)) {
                map.set(startChar, map.get(startChar)! + 1);
                if (map.get(startChar)! > 0) {
                    count++;
                }
            }
            start++;
        }
    }

    return minLen === Infinity ? '' : s.substring(startInd, startInd + minLen);
}
