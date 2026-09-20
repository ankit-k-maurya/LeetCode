function combine(n: number, k: number): number[][] {
    const ans: number[][] = [];
    const temp: number[] = [];

    function fun(i: number): void {
        if (temp.length === k) {
            ans.push([...temp]);
            return;
        }
        if (i > n) return;

        for (let ind = i; ind <= n; ind++) {
            temp.push(ind);
            fun(ind + 1);
            temp.pop();
        }
    }

    fun(1);
    return ans;
}