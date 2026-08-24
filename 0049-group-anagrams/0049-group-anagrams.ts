function groupAnagrams(strs: string[]): string[][] {
    const hash: Record<string, string[]> = {};
    
    for (const word of strs) {
        const key = [...word].sort().join('');
        hash[key] ||= []; 
        hash[key].push(word);
    }
    return Object.values(hash);
}
