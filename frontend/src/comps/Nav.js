const React = require('react')
const NavLink = require('react-router-dom').NavLink

class Nav extends React.Component {

render() {
  return (
    <ul className ='nav'>

    <li>
      <NavLink exact activeClassName='active' to='/'>
      Home
      </NavLink>
    </li>
    <li>
    <NavLink activeClassName='active' to='/projects'>
    projects
    </NavLink>
    </li>

    <li>
    <NavLink activeClassName='active' to='/about'>
    about
    </NavLink>
    </li>

    </ul>
  )
}
}


export default Nav
