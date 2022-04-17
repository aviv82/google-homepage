import "./header.css";

export const Header = () => {
  return (
    <header>
      <h1 className="header-title">
        <span className="g">G</span>
        <span className="o">O</span>
        <span className="o2">O</span>
        <span className="g2">G</span>
        <span className="l">L</span>
        <span className="e">E</span>
      </h1>
      <div className="input-form">
        <input type="search" />
      </div>
      <div className="header-btn">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </header>
  );
};
