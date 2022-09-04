import React from "react";

const NavbarMenu = () => {
  return (
    <div className="App">
      <header className="ini-header">
        <h1 className="pt-3">Final-Exam</h1>
        <div className="header">
          <a href="/" className="home">
            Home
          </a>
        </div>
        <div className="header-right">
          <a href="/fruits">Fruit</a>
          <a href="/brands">Brand</a>
          <a href="/categories">Category</a>
        </div>
      </header>
    </div>
  );
};

export default NavbarMenu;
