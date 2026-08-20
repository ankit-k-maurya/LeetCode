function simplifyPath(path: string): string {
    // 1. Use a standard TypeScript array as a stack
    let stack: string[] = [];
    // 2. Fix type definition: split() returns an array of strings (string[])
    let components: string[] = path.split('/');

    for(let component of components){
        // 3. Use '===' instead of '.equals()'
        if(component === '' || component === '.') continue;
        if(component === '..'){
            if(stack.length > 0) stack.pop();
        }
        else stack.push(component);
    }
    
    if(stack.length === 0) return '/';
    
    // 4. Use array join instead of StringBuilder
    return '/' + stack.join('/');
}
