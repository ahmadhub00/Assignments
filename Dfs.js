function dfs(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    console.log(start);
    visited.add(start);
    
    for (let neighbor of graph[start]) {
        dfs(graph, neighbor, visited);
    }
}

dfs(graph, "A");
