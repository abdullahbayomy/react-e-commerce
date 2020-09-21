import React from 'react';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const navbar = (props) => {
  return (
    <header className={classes.Container}>
      <h4>SideBar</h4>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default navbar;
