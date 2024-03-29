class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v); // Undirected graph
    }

    printGraph() {
        for (let [vertex, edges] of this.adjList) {
            console.log(`${vertex} -> ${edges.join(", ")}`);
        }
    }
}

let g = new Graph(5);
["A", "B", "C", "D", "E"].forEach(v => g.addVertex(v));
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.printGraph();
