import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        
        <div className="brand">
            <span className='brand-name'>EMEKA NDAGUBA</span>
            <span className='brand-rols'>PRODUCT DESIGNER + ENGINEER</span>
            </div>
     <nav className="nav">
          <a href="/">Home</a>
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
