function isAnagram(s: string, t: string): boolean {
    let m: number = s.length;
    let n: number = t.length;

    if (m !== n) return false;

    let count: number[] = new Array(26).fill(0);

    for (let i = 0; i < m; i++) {
       
        count[s.charCodeAt(i) - 97]++;  
    } 
    for (let i = 0; i < n; i++) {
        
        count[t.charCodeAt(i) - 97]--;
    }
    for (let i = 0; i < count.length; i++) {
        if (count[i] !== 0) return false;
    }
    return true;
}
