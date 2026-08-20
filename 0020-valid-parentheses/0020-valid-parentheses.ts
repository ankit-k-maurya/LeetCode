function isValid(s: string): boolean {
    let stack: Stack<string> = new Stack<string>();

    for(let i = 0; i < s.length; i++){
        let curr: string = s.charAt(i);
        if(!stack.isEmpty()){
           let last: string = stack.peek();
            if(isPair(last, curr)){
                stack.pop();
                continue;
            }
        }
        stack.push(curr);
    }
    return stack.isEmpty();
};

function isPair(last: string, curr: string):boolean{
    return(last === '(' && curr === ')')|| 
          (last === '{' && curr === '}')||
          (last === '[' && curr === ']');
}