import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav className='flex items-center justify-between h-20 max-6xl mx-auto'>
        <Link to={'/'}>
          <div>
            <h1 className='text-red-900 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide p-10'>React redux shopping cart</h1>

          </div>
        </Link>
        <ul className='flex list-none items-center space-x-6 text-gray-800 font-semibold p-10'>
          <Link to={'/'}>
            <li className='cursor-pointer font-bold text-2xl'>Home</li>
          </Link>
          <Link to={'/cart'}>
            <li className='cursor-pointer font-bold text-2xl'>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
