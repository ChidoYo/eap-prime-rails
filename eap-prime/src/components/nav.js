import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navOptions = [
  {name: 'Home', link: '/'},
  {name: 'Me Mine and Ours', link: '/me'},
  {name: 'Collection', link: '/collection'},
  {name: 'Yo Random Stuff!', link: '/yo'}
];

class Nav extends React.Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto">
        {
          navOptions.map((item, index) =>
            <li className="nav-item" key={index}>
              <NavLink exact className="nav-link" activeClassName="active"  to={item.link}>{item.name}</NavLink>
            </li>
          )
        }
      </ul>
    )
  }
}

export default Nav;
