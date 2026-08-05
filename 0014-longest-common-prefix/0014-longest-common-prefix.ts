function longestCommonPrefix(strs: string[]): string {
    let n = strs.length;
    if(n == 0) return '';
    let s: string = strs[0];
    let res = s.length;

    for(let i = 1; i < n; i++){
        let s1: string = strs[i];
        let j = 0;
        let count = 0;
        while(j < s.length){
            if(s.charAt(j) == s1.charAt(j)) count++ ;
            else break;
            j++;
        }
        if(count < res) res = count;
    }
    return strs[0].substring(0,res);
};