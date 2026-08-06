function strStr(haystack: string, needle: string): number {
    let haylen = haystack.length;
    let needlelen = needle.length;

    if(haylen < needlelen) return -1;

    for(let i = 0; i <= haylen - needlelen; i++){
        let j = 0;
       while (j < needlelen && haystack[i + j] === needle[j]) {
            j++;
        }
        if(j === needlelen) return i;
    }
    return -1;
};