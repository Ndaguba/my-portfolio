import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/theme.css';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DevelopmentPathways from './pages/DevelopmentPathways';
import EchoDesignSystem from './pages/EchoDesignSystem';
import DesignSystems from './pages/DesignSystems';
import Loading from './components/Loading';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Shared one-time loader for the entire app session
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loading />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/development-pathways" element={<DevelopmentPathways />} />
      <Route path="/echo-design-system" element={<EchoDesignSystem />} />
      <Route path="/design-systems" element={<DesignSystems />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
