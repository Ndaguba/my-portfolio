import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <p>Your app content goes here.</p>
      </header>
    </div>
  );
}

export default App;
