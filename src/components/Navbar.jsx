import React from 'react'


const Navbar = ({ session }) => {



  return (

    <nav>
      <ul>

        <li><strong> &#128141; Marriage Saver</strong></li>
      </ul>
      <ul>
        <li><a href="./">Homepage</a></li>
        {session ? <li>Logout</li> : <li><a href="./Login">Login</a></li>}
        <li><a href="./Dashboard">Dashboard</a></li>
      </ul>
    </nav>
  )
}

export default Navbar