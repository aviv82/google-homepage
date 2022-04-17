import "./App.css";
import { NavBar } from "./components/navbar/nav-bar";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
