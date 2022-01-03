import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                {props.navItem1}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.navItem2}
              </Link>
            </li>
          </ul>
            
            {/*color palate */}
            <div className="red" onClick={props.setRedColor} style={{width:'20px',height:'20px',backgroundColor:'red' , margin:'0 3px' , cursor:'pointer'}}></div>
            <div className="green" onClick={props.setGreenColor} style={{width:'20px',height:'20px',backgroundColor:'green', margin:'0 3px', cursor:'pointer'}}></div>
            <div className="blue" onClick={props.setBlueColor} style={{width:'20px',height:'20px',backgroundColor:'blue', margin:'0 25px 0 3px', cursor:'pointer'}}></div>
          
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {`${props.mode === 'dark' ? 'Disable' : 'Enable'} Dark Mode`}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string, // also add PropTypes.string.isRequired
  navItem1: PropTypes.string,
  navItem2: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Add Title Here",
  navItem1: "NavItem1",
  navItem2: "NavItem2",
};
