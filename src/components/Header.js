import { useState, useEffect } from 'react';
import { Nav } from './Nav';

export function Header() {
  const getMobile = () => !window.matchMedia('(min-width: 38rem)').matches;
  const [mobile, setMobile] = useState(getMobile());
  const [nav, setNav] = useState(!mobile);

  useEffect(() => {
    window.addEventListener('resize', () => setMobile(getMobile()));
  }, []);

  useEffect(() => {
    setNav(!mobile);
  }, [mobile]);

  return (
    <header className="primary-header">
      <h1 className="header-title">Simon Johansson</h1>
      {
        mobile ? (
          <button className={`primary-navigation-toggle${nav ? " close-button" : ""}`} onClick={() => setNav(!nav)}>
            <span />
          </button>
        ) : null
      }
      {
        nav ? (
          <Nav {...{ mobile, setNav }} />
        ) : null
      }
    </header>
  );
};