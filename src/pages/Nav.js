import { Outlet, Link } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <nav>
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

      <Outlet />
    </>
  );
}