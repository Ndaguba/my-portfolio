import React from 'react';
import './home.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="home-page">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
      </main>
    </div>
  );
}
