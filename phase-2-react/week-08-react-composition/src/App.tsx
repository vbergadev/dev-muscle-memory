import { Component, type ReactNode } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Panel } from './exercises/01-card-children';
import { Modal } from './exercises/02-modal-compound';
import { ControlledForm } from './exercises/03-controlled-form';
import { UncontrolledForm } from './exercises/04-uncontrolled-form';
import { LiftingState } from './exercises/05-lifting-state';

// App shell — INFRA, not an exercise. Lists each exercise on its own route.
const exercises = [
  { path: '01', label: '01 — Panel', el: <Panel header={<b>Header</b>}>panel body</Panel> },
  { path: '02', label: '02 — Modal (compound)', el: <Modal><Modal.Header>Head</Modal.Header><Modal.Body>Body</Modal.Body><Modal.Footer>Foot</Modal.Footer></Modal> },
  { path: '03', label: '03 — Controlled form', el: <ControlledForm /> },
  { path: '04', label: '04 — Uncontrolled form', el: <UncontrolledForm /> },
  { path: '05', label: '05 — Lifting state', el: <LiftingState /> },
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
      <h1>Week 08 — Composition</h1>
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
