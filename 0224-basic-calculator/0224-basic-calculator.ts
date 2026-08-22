function calculate(s: string): number {
    let stack: number[] = [];
    let result: number = 0;
    let num: number = 0;
    let sign: number = 1;

    for (let i = 0; i < s.length; i++) {
        let c: string = s[i];

        if (c >= '0' && c <= '9') {
            num = 10 * num + parseInt(c);
        }
        else if (c === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        }
        else if (c === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        }
        else if (c === '(') {
            stack.push(result);
            stack.push(sign);
            sign = 1;
            result = 0;
        }
        else if (c === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop()!;
            result += stack.pop()!;
        }
    }
    result += sign * num;
    return result;
}
