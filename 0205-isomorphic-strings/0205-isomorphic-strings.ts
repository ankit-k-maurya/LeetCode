function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const sToT = new Map<string, string>();
    const tToS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const original = s[i];
        const replacement = t[i];

        // Check s -> t mapping
        if (sToT.has(original)) {
            if (sToT.get(original) !== replacement) return false;
        } else {
            sToT.set(original, replacement);
        }

        // Check t -> s mapping to ensure no two s characters map to the same t character
        if (tToS.has(replacement)) {
            if (tToS.get(replacement) !== original) return false;
        } else {
            tToS.set(replacement, original);
        }
    } 

    return true;
}
