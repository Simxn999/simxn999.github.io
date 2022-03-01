import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="primary-header">
      <h1 className="header-title">Simon Johansson</h1>
      <input type="checkbox" id="primary-navigation" tabIndex="0" aria-label="Toggle navigation" />
      <label htmlFor="primary-navigation" className="primary-navigation-close"></label>
      <label htmlFor="primary-navigation" className="primary-navigation-toggle" aria-controls="aria-nav">
        <span></span>
      </label>

      <nav id="aria-nav" className="primary-navigation" onClick={() => document.getElementById('primary-navigation').checked = false}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/wcag">WCAG</Link>
          </li>
          <li>
            <Link to="/contact-me">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};