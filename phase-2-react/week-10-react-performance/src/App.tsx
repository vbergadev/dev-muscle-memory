import { Component, type ReactNode } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { BigList } from './exercises/01-big-list';
import { Child } from './exercises/02-apply-memo';
import { ExpensiveList } from './exercises/03-apply-use-memo';
import { SearchBox } from './exercises/04-apply-use-callback';
import { VirtualList } from './exercises/05-virtualized-list';

// App shell — INFRA, not an exercise. Lists each exercise on its own route.
const exercises = [
  { path: '01', label: '01 — Big list', el: <BigList items={["a", "b", "c"]} /> },
  { path: '02', label: '02 — React.memo', el: <Child label="demo" onRender={() => {}} /> },
  { path: '03', label: '03 — useMemo', el: <ExpensiveList numbers={[1, 2, 3]} /> },
  { path: '04', label: '04 — useCallback', el: <SearchBox items={["apple", "banana"]} /> },
  { path: '05', label: '05 — Virtualized list', el: <VirtualList items={Array.from({ length: 1000 }, (_, i) => `row ${i}`)} height={300} itemHeight={30} /> },
];

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  override state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  override render() {
    if (this.state.error) {
      return (
        <p role="alert">
          Exercise not implemented yet: <code>{this.state.error.message}</code>
        </p>
      );
    }
    return this.props.children;
  }
}

export function App() {
  return (
    <BrowserRouter>
      <h1>Week 10 — Performance</h1>
      <nav>
        <Link to="/">Home</Link>
        {exercises.map((e) => (
          <span key={e.path}>
            {' · '}
            <Link to={`/${e.path}`}>{e.path}</Link>
          </span>
        ))}
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ul>
                {exercises.map((e) => (
                  <li key={e.path}>
                    <Link to={`/${e.path}`}>{e.label}</Link>
                  </li>
                ))}
              </ul>
            }
          />
          {exercises.map((e) => (
            <Route key={e.path} path={`/${e.path}`} element={<ErrorBoundary>{e.el}</ErrorBoundary>} />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
