class MinStack {
    
    private stack: number[] = [];
    private min: number = Infinity; 

    push(value: number): void {
        
        if (value <= this.min) {
            this.stack.push(this.min);
            this.min = value;
        }
        this.stack.push(value); 
    }

    pop(): void {
       
        const poppedValue = this.stack.pop();
        
        if (poppedValue === this.min) {
            this.min = this.stack.pop()!;
        }
    }

    top(): number {
        
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min;
    }
}
