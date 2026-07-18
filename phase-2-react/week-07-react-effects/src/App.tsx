import { Component, type ReactNode } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FetchWithCleanup } from './exercises/01-fetch-with-cleanup';
import { FocusInput } from './exercises/02-focus-input';
import { IntervalCounter } from './exercises/03-interval-counter';
import { LocalStorageSync } from './exercises/04-localstorage-sync';
import { IntersectionReveal } from './exercises/05-intersection-observer';

/**
 * App shell — this is INFRA, not an exercise. It just lists each exercise on its
 * own route so you can run it in the browser (`pnpm dev`) while you implement.
 * Until an exercise is implemented it throws "not implemented"; the error
 * boundary below catches it and shows a hint instead of a blank screen.
 */

const exercises = [
  { path: '01', label: '01 — Fetch with cleanup', el: <FetchWithCleanup url="https://api.github.com/users/octocat" /> },
  { path: '02', label: '02 — Focus input with ref', el: <FocusInput /> },
  { path: '03', label: '03 — Interval counter', el: <IntervalCounter /> },
  { path: '04', label: '04 — localStorage sync', el: <LocalStorageSync storageKey="week07-demo" /> },
  { path: '05', label: '05 — IntersectionObserver reveal', el: <IntersectionReveal /> },
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
          This exercise isn't implemented yet: <code>{this.state.error.message}</code>
        </p>
      );
    }
    return this.props.children;
  }
}

export function App() {
  return (
    <BrowserRouter>
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
            <Route
              key={e.path}
              path={`/${e.path}`}
              element={<ErrorBoundary>{e.el}</ErrorBoundary>}
            />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
