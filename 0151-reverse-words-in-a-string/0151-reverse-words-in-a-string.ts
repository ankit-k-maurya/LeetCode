function reverseWords(s: string): string {
    if (s == null) return "";

    let a: string[] = s.split('');
    let n = a.length;

    reverse(a, 0, n - 1); // full array reverse
    reverseW(a, n);       // single word reverse

    return cleanSpace(a, n);  
}

function reverse(a: string[], i: number, j: number): void {
    while (i < j) {
        let t: string = a[i];
        a[i] = a[j];
        a[j] = t;
        i++;
        j--;
    }
}

function reverseW(a: string[], n: number): void {
    let i = 0, j = 0;
    
    while (i < n) {
        while (i < n && a[i] === ' ') i++; // skip spaces to find word start
        j = i;
        while (j < n && a[j] !== ' ') j++; // find word end
        
        if (i < j) {
            reverse(a, i, j - 1);
        }
        i = j;
    }
}

function cleanSpace(a: string[], n: number): string {
    let i = 0, j = 0;

    while (j < n) {
        while (j < n && a[j] === ' ') j++;             // skip leading/multiple spaces
        while (j < n && a[j] !== ' ') a[i++] = a[j++]; // copy valid word characters
        while (j < n && a[j] === ' ') j++;             // skip trailing spaces after word
        
        if (j < n) {
            a[i++] = ' ';                              // add a single space between words
        }
    }
    return a.slice(0, i).join('');
}
