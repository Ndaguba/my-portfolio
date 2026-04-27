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
import PoppyAI from './pages/PoppyAI';
import SkipWestJet from './pages/SkipWestJet';
import OrderTracker from './pages/OrderTracker';
import Forella from './pages/Forella';
import reportWebVitals from './reportWebVitals';

import { AudioProvider } from './context/AudioContext';
import { FlagsProvider } from './context/FlagsContext';
import FloatingAudioPlayer from './components/FloatingAudioPlayer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development-pathways" element={<DevelopmentPathways />} />
        <Route path="/echo-design-system" element={<EchoDesignSystem />} />
        <Route path="/design-systems" element={<DesignSystems />} />
        <Route path="/poppy-ai" element={<PoppyAI />} />
        <Route path="/skip-westjet" element={<SkipWestJet />} />
        <Route path="/order-tracker" element={<OrderTracker />} />
        <Route path="/forella" element={<Forella />} />
      </Routes>
      <FloatingAudioPlayer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AudioProvider>
        <FlagsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FlagsProvider>
      </AudioProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
