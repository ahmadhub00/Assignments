class DisjointSet {
    constructor(n) {
        this.parent = Array(n).fill().map((_, i) => i);
    }

    find(x) {
        if (this.parent[x] === x) return x;
        return this.parent[x] = this.find(this.parent[x]);
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) this.parent[rootX] = rootY;
    }
}

function kruskal(edges, n) {
    edges.sort((a, b) => a[2] - b[2]);
    let ds = new DisjointSet(n);
    let mst = [], cost = 0;

    for (let [u, v, w] of edges) {
        if (ds.find(u) !== ds.find(v)) {
            ds.union(u, v);
            mst.push([u, v, w]);
            cost += w;
        }
    }

    return { mst, cost };
}

let edges = [
    [0, 1, 10], [0, 2, 6], [0, 3, 5],
    [1, 3, 15], [2, 3, 4]
];

console.log(kruskal(edges, 4));
