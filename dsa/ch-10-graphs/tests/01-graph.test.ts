import { describe, it, expect } from 'vitest';
import { Graph } from '../src/01-graph';

describe('01-graph', () => {
  it('bfs reaches all connected vertices, start first', () => {
    const g = new Graph();
    ['a', 'b', 'c', 'd'].forEach((v) => g.addVertex(v));
    g.addEdge('a', 'b');
    g.addEdge('a', 'c');
    g.addEdge('b', 'd');
    const order = g.bfs('a');
    expect(order[0]).toBe('a');
    expect([...order].sort()).toEqual(['a', 'b', 'c', 'd']);
  });

  it('dfs reaches all connected vertices', () => {
    const g = new Graph();
    ['a', 'b', 'c', 'd'].forEach((v) => g.addVertex(v));
    g.addEdge('a', 'b');
    g.addEdge('a', 'c');
    g.addEdge('b', 'd');
    expect([...g.dfs('a')].sort()).toEqual(['a', 'b', 'c', 'd']);
  });
});
