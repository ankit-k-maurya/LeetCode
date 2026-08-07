function fullJustify(words: string[], maxWidth: number): string[] {
    let ans: string[] = [];
    let i = 0;
    
    while (i < words.length) {
        let currentLineWords: string[] = [];
        let currentLength = 0;
        
        // Find how many words fit in the current line
        while (i < words.length && currentLength + words[i].length + currentLineWords.length <= maxWidth) {
            currentLineWords.push(words[i]);
            currentLength += words[i].length;
            i++;
        }
        
        // If it is the last line, left-justify it
        if (i === words.length) {
            let lastLine = currentLineWords.join(' ');
            while (lastLine.length < maxWidth) {
                lastLine += ' ';
            }
            ans.push(lastLine);
        } else {
            // Otherwise, fully justify the line
            ans.push(addSpaces(currentLineWords, currentLength, maxWidth));
        }
    }
    return ans;
}

function addSpaces(arr: string[], currentLength: number, width: number): string {
    let count = arr.length - 1;
    
    // Case 1: Line contains only one word
    if (count === 0) {
        let str = arr[0];
        while (str.length < width) {
            str += ' ';
        }
        return str;
    }
    
    // Case 2: Distribute spaces evenly
    let totalPadding = width - currentLength;
    let equalSpaceCount = Math.floor(totalPadding / count);
    let extraSpaceCount = totalPadding % count;
    
    let res = "";
    for (let j = 0; j < arr.length; j++) {
        res += arr[j];
        if (j < count) {
            // Add base equal spaces
            res += ' '.repeat(equalSpaceCount);
            // Add extra space to the left-most slots if available
            if (j < extraSpaceCount) {
                res += ' ';
            }
        }
    }
    return res;
}
