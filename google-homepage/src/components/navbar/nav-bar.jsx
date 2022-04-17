import "./nav-bar.css";

export const NavBar = () => {
  return (
    <nav>
      <div>
        <ul className="nav-bar-first-item">
          <a
            className="navbar-child-item"
            href="https://github.com/aviv82/component-based-design/blob/main/1-rendering-static-pages/html-to-components/exercises/google-home-page/final-code/style.css"
          >
            <li>About</li>
          </a>
          <a
            className="navbar-child-item"
            href="https://github.com/aviv82/component-based-design/blob/main/1-rendering-static-pages/html-to-components/exercises/google-home-page/final-code/style.css"
          >
            <li>Store</li>
          </a>
        </ul>
      </div>

      <div>
        <ul className="nav-bar-second-item">
          <a
            className="navbar-second-item"
            href="https://github.com/aviv82/component-based-design/blob/main/1-rendering-static-pages/html-to-components/exercises/google-home-page/final-code/style.css"
          >
            <li>Gmail</li>
          </a>
          <a
            className="navbar-second-item"
            href="https://github.com/aviv82/component-based-design/blob/main/1-rendering-static-pages/html-to-components/exercises/google-home-page/final-code/style.css"
          >
            <li>Images</li>
          </a>
          <a
            className="navbar-second-item"
            href="https://github.com/aviv82/component-based-design/blob/main/1-rendering-static-pages/html-to-components/exercises/google-home-page/final-code/style.css"
          >
            <i className="fas fa-beer"></i>
          </a>
          <a
            className="navbar-second-item"
            href="https://github.com/aviv82/component-based-design/blob/main/1-rendering-static-pages/html-to-components/exercises/google-home-page/final-code/style.css"
          >
            <img src="./assets/navbar-img.jpg" alt="user" />
          </a>
        </ul>
      </div>
    </nav>
  );
};
