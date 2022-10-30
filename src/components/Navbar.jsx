import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="/logo.png" alt="" className="logoimg" />
        <h1 className="h">airbnb</h1>
      </div>
      <div className="nav-item">
        <p className="host">Become a host</p>

        <div className="world">
          <span class="material-symbols-outlined">language</span>
        </div>

        <div className="last-item">
          <span
            className="material-symbols-outlined "
            style={{ fontSize: "25px" }}
          >
            menu
          </span>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "35px" }}
          >
            account_circle
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
//<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXbAhq3XHw259UveJxpX891AMJOGQaBfa_Q&usqp=CAU" alt="" className='logoimg'/>
