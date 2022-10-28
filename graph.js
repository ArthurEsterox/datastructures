const Queue = require('./queue.js');

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    // get the list for vertex v and put the vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);
 
    // since graph is undirected, add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  print() {
    const keys = this.AdjList.keys();

    for (const i of keys) {
      const values = this.AdjList.get(i);
      let conc = '';

      for (const j of values) {
        conc += j + ' ';
      }

      console.log(i + ' -> ' + conc);
    }
  }

  // Breadth First Traversal
  bfs(startingNode) {
    const visited = {};

    const q = new Queue();

    visited[startingNode] = true;
    q.enqueue(startingNode);

    while (!q.isEmpty()) {
      const getQueueElement = q.dequeue();

      console.log(getQueueElement);

      const getList = this.AdjList.get(getQueueElement);

      for (const i in getList) {
        const neigh = getList[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }

  // Depth First Traversal
  dfs(startingNode) {
    const visited = {};

    this.DFSUtil(startingNode, visited);
  }

  DFSUtil(vert, visited) {
    visited[vert] = true;

    console.log(vert);
 
    const getNeighbours = this.AdjList.get(vert);
 
    for (const i in getNeighbours) {
      const getElement = getNeighbours[i];
      
      if (!visited[getElement]) {
        this.DFSUtil(getElement, visited);
      }
    }
  }
}
