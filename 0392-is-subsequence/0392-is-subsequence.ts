function isSubsequence(s: string, t: string): boolean {
    let l1: number = s.length;
    let l2: number = t.length;
    
    if(l1 > l2) return false;
    if(l1 == 0) return true;

    let i: number = 0;
    let j: number = 0;
    
    while(i < l1 && j < l2){
        let c: string = s[i];
        if(c == t[j]) i++;
        j++;
        if(i == l1)return true;
    }
    return false;
};