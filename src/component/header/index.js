import './_header.sass'
import React from 'react'
import {Link} from 'react-router-dom'

const NavLink = ({to, location}) => {
  let className = to === location.pathname ? 'selected' : undefined
  return <li className={className}> <Link to={to}> {to} </Link></li>
}

class Header extends React.Component {
  render(){
    console.log(this.props.location)
    return (
      <header className='header'>
        <main>
          <div className='logo'>
            <h1> slugb<span className='flip'>λ</span>te </h1>
          </div>
          <nav className='nav'> 
            <ul> 
              <NavLink location={this.props.location} to='/slash' />
              <NavLink location={this.props.location} to='/article' />
              <NavLink location={this.props.location} to='/project' />
              <NavLink location={this.props.location} to='/contact' />
            </ul>
          </nav>
        </main>
      </header>
    )
  }
}

export default Header
