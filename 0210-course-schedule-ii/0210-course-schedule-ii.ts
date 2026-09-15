function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const preMap = new Map();
    const inDegree = new Array(numCourses).fill(0);

    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, []);
    }

    for (const [a, b] of prerequisites) {
        preMap.get(b).push(a);
        inDegree[a]++;
    }

    const q = [];
    const orderOfCourse = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            q.push(i);
            orderOfCourse.push(i);
        }
    }

    let taken = 0;

    while (q.length > 0) {
        const course = q.shift();
        taken++;

        for (const next of preMap.get(course)) {
            inDegree[next]--;
            if (inDegree[next] === 0) {
                q.push(next);
                orderOfCourse.push(next);
            }
        }
    }

    return taken === numCourses ? orderOfCourse : [];
}