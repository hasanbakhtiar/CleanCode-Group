import React from "react";

const Header = () => {
  return (
    <div className="nav-con">
      <ol>
        <li className="main">
          <button>X</button>
          <ol className="menu">
            <li className="main1">
              <button>X</button>
              <ol className="menu1"></ol>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default Header;
