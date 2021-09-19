import React from "react";
import NavList from "./components/NavList.js";

function App() {
  return (
    <div>
      <nav>
        <div className="nav-mobile">
          <a id="nav-toggle" href="#!">
            <span></span>
          </a>
        </div>
        <NavList />
      </nav>
    </div>
  );
}
export default App;
