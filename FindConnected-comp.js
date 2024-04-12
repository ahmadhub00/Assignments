function countConnectedComponents(graph) {
    let visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(graph, node, visited);
            count++;
        }
    }
    
    return count;
}

console.log(countConnectedComponents(graph));
