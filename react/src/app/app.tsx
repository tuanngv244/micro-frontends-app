// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import ReactDOM, { Root } from 'react-dom/client';

export function App() {
  return (
    <div>
      <NxWelcome title="react application" />
    </div>
  );
}

class ReactRootApp extends HTMLElement {
  root!: Root;

  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />);
  }
  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('app-react-root', ReactRootApp);
