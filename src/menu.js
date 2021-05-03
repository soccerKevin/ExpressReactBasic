import React from 'react';

import { Link } from "react-router-dom";

const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;