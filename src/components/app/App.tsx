import { CSSProperties } from 'react';
import logo from './logo.svg';
import Counter from '../counter/Counter';

const appLink: CSSProperties = {
  color: `rgb(112, 76, 182)`,
};

const App = () => {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-3xl">
        <img
          src={logo}
          className="animate-[bounce_infinite_3s_ease-in-out] h-52"
          alt="logo"
        />
        <Counter />
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <a
            style={appLink}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            style={appLink}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            style={appLink}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            style={appLink}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;
