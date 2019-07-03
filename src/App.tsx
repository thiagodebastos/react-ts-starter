import React from 'react';
import './index.css';
import { SiteHeader } from './components';

const App: React.FC = () => {
  return (
    <div className="h-screen">
      <SiteHeader />
      <h1>
        Hello World!
      </h1>
    </div>
  );
};

export default App;
