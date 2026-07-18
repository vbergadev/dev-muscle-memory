import { Component, type ReactNode } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Counter } from './exercises/01-counter';
import { TodoList } from './exercises/02-todo-list';
import { ToggleButton } from './exercises/03-toggle-button';
import { ControlledCheckbox } from './exercises/04-controlled-checkbox';
import { ControlledInput } from './exercises/05-controlled-input';
import { Card } from './exercises/06-card';
import { ItemList } from './exercises/07-list-with-key';

// App shell — INFRA, not an exercise. Lists each exercise on its own route.
const exercises = [
  { path: '01', label: '01 — Counter', el: <Counter /> },
  { path: '02', label: '02 — Todo list', el: <TodoList /> },
  { path: '03', label: '03 — Toggle button', el: <ToggleButton /> },
  { path: '04', label: '04 — Controlled checkbox', el: <ControlledCheckbox /> },
  { path: '05', label: '05 — Controlled input', el: <ControlledInput /> },
  { path: '06', label: '06 — Card', el: <Card title="Demo">card body</Card> },
  { path: '07', label: '07 — List with key', el: <ItemList items={[{ id: 1, label: "one" }, { id: 2, label: "two" }]} /> },
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
      <h1>Week 06 — React Basics</h1>
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
