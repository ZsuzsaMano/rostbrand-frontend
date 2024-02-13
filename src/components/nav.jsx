import { useState, useEffect } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    // update the nav list
    // when the component is rendered for the first time
    get();
  }, []);

  // This function updates the component with the
  // current navigation menu data stored in the server
  function get() {
    fetch(`${process.env.REACT_APP_BACKEND}api/navigations`)
      .then((res) => res.json())
      .then((nav) => {
        setNavItems(nav.data[0].attributes.NavItems);
      });
  }


  return (
    <nav>
      <div className="logo">
        <a href={"/"}>
          <h4>Péter Tauber</h4>
        </a>
      </div>
      <ul className={`nav-links ${navActive ? "nav-active" : ""}`}>
        {navItems.map((item, i ) => (
          <li key={i}>
            <a href={item.href}>{item.displayText}</a>
          </li>
        ))}
      </ul>
      <div
        className={`burger ${navActive ? "toggle" : ""}`}
        onClick={toggleNav}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;
