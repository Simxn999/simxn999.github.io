import { Link } from 'react-router-dom';

export function Nav({ mobile, setNav }) {
  const close = () => setNav(false);

  return (
    <>
      {
        mobile ? (
          <button onClick={close} className="primary-navigation-close-background" />
        ) : null
      }
      <nav id="aria-nav" className="primary-navigation">
        <ul onClick={mobile ? close : null}>
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
    </>
  );
};