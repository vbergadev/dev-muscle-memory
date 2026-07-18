import { Component, type ReactNode } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Tabs } from './exercises/01-compound-tabs';
import { Toggle } from './exercises/02-headless-toggle';
import { Layout } from './exercises/03-slot-pattern';

// App shell — INFRA, not an exercise. Lists each exercise on its own route.
const exercises = [
  { path: '01', label: '01 — Compound Tabs', el: <Tabs><Tabs.List><Tabs.Tab index={0}>A</Tabs.Tab><Tabs.Tab index={1}>B</Tabs.Tab></Tabs.List><Tabs.Panel index={0}>Panel A</Tabs.Panel><Tabs.Panel index={1}>Panel B</Tabs.Panel></Tabs> },
  { path: '02', label: '02 — Headless Toggle', el: <Toggle>{({ on, toggle }) => <button onClick={toggle}>{on ? "ON" : "OFF"}</button>}</Toggle> },
  { path: '03', label: '03 — Slot pattern', el: <Layout header={<b>Header</b>} sidebar={<b>Sidebar</b>}>content</Layout> },
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
      <h1>Week 11 — Patterns</h1>
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
