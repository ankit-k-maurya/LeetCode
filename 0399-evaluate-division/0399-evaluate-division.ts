function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const n = equations.length * 2; // not accurately, but faster
    // const n = new Set(equations.flat()).size * 2; // accurately, but slower
    const idx = new Map(); // value name to index
    const mtx = new Float64Array(n * n); // adjacency matrix
    { // BUILD THE GRAPH
        let i = 0;
        let j = 0;
        for (const [a, b] of equations) {
            const v = values[i++];
            const ai = idx.get(a) ?? j;
            if (ai === j) idx.set(a, j++);
            const bi = idx.get(b) ?? j;
            if (bi === j) idx.set(b, j++);
            mtx[ai * n + bi] = v;
            mtx[bi * n + ai] = 1 / v;
        }
    }
    let visited = 0; // bitset, coz size < 32
    // const visited = new Uint8Array(idx.size);
    const dfs = (i, t) => {
        visited |= 1 << i; // visited[i] = 1;
        if (mtx[i * n + t]) return mtx[i * n + t];
        for (let j = 0; j < n; ++j) {
            if (!(visited & (1 << j)) && mtx[i * n + j]) {
                const ret = dfs(j, t);
                if (ret > 0) { // UPDATE THE GRAPH
                    mtx[i * n + t] = ret * mtx[i * n + j];
                    return mtx[i * n + t];
                }
            }
        }
        return -1.0;
    };
    const ans = new Float64Array(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        const ai = idx.get(queries[i][0]);
        const bi = idx.get(queries[i][1]);
        if (ai !== undefined && bi !== undefined) {
            if (ai !== bi) {
                ans[i] = dfs(ai, bi);
                visited = 0; // visited.fill(0);
            } else {
                ans[i] = 1.0;
            }
        } else {
            ans[i] = -1.0;
        }
    }
    return Array.from(ans);
};