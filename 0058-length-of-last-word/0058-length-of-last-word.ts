function lengthOfLastWord(s: string): number {
    s = s.trim();
    let length = 0;

    for(let i = s.length - 1; i >= 0; i--){
        if(s.charAt(i) != ' ') length++;
        else break;
    }
    return length;
};