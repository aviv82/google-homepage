export const navBar = () => {
  return (
    <nav>
      <div>
        <ul class="nav-bar-first-item">
          <a class="navbar-child-item" href="#">
            <li>About</li>
          </a>
          <a class="navbar-child-item" href="#">
            <li>Store</li>
          </a>
        </ul>
      </div>

      <div>
        <ul class="nav-bar-second-item">
          <a class="navbar-second-item" href="#">
            <li>Gmail</li>
          </a>
          <a class="navbar-second-item" href="#">
            <li>Images</li>
          </a>
          <a class="navbar-second-item" href="#">
            <i class="fas fa-beer"></i>
          </a>
          <a class="navbar-second-item" href="#">
            <img src="./assets/navbar-img.jpg" alt="user" />
          </a>
        </ul>
      </div>
    </nav>
  );
};
