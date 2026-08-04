function romanToInt(s: string): number {
    // 1. Create a typed object for mapping (Fixed lowercase 'V' and 'X')
    const map: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
  
    let ans = 0;
    
    // 2. Used s.length without parenthesis
    for (let i = 0; i < s.length; i++) {
        // 3. Used bracket notation s[i] instead of charAt
        const current = map[s[i]];
        const next = map[s[i + 1]];

        if (i < s.length - 1 && current < next) {
            ans -= current;
        } else {
            ans += current;
        }
    }
    return ans;
}
