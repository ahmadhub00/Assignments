function hasCycle(graph, node, visited = new Set(), parent = null) {
    visited.add(node);
    
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            if (hasCycle(graph, neighbor, visited, node)) return true;
        } else if (neighbor !== parent) {
            return true;
        }
    }
    
    return false;
}

console.log(hasCycle(graph, "A"));
