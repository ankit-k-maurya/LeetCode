function evalRPN(tokens: string[]): number {
  
    let stack: number[] = [];

    for (let i = 0; i < tokens.length; i++) {
        let token: string = tokens[i];

        if (token === '+') {
            stack.push(stack.pop()! + stack.pop()!);
        } 
        else if (token === '-') {
            let a = stack.pop()!;
            let b = stack.pop()!;
            stack.push(b - a);
        } 
        else if (token === '*') {
            stack.push(stack.pop()! * stack.pop()!);
        } 
        else if (token === '/') {
            let a = stack.pop()!;
            let b = stack.pop()!;
           
            stack.push(Math.trunc(b / a));
        } 
        else {
           
            stack.push(Number(token));
        }
    }
    
    return stack.pop()!; 
}
