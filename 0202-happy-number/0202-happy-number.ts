function isHappy(n: number): boolean {
    const hs: Set<number> = new Set<number>();
    
    while (!hs.has(n)) {
        hs.add(n);
        let sqrSum: number = 0;
        
        while (n > 0) {
            let rem: number = n % 10;
            sqrSum += rem * rem;
            n = Math.floor(n / 10); 
        }
        
        if (sqrSum === 1) return true;
        else n = sqrSum;
    }
    
    return false;
}
