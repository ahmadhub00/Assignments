class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }
    
    dequeue() {
        return this.queue.shift().node;
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, start) {
    let distances = {};
    let pq = new PriorityQueue();
    
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        let current = pq.dequeue();
        
        for (let [neighbor, weight] of Object.entries(graph[current])) {
            let distance = distances[current] + weight;
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        }
    }
    
    return distances;
}

