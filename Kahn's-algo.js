function topologicalSort(graph) {
    let inDegree = {}, queue = [], result = [];
    
    for (let node in graph) {
        inDegree[node] = 0;
    }
    
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            inDegree[neighbor]++;
        }
    }
    
    for (let node in inDegree) {
        if (inDegree[node] === 0) queue.push(node);
    }
    
    while (queue.length) {
        let node = queue.shift();
        result.push(node);
        
        for (let neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    
    return result.length === Object.keys(graph).length ? result : "Cycle detected!";
}

