import React from 'react'
import './header.css'
import Categories from '../categories/Categories'

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>Quick Times</h1>
      </div>
      <div className="categories">
        <Categories />
      </div>
    </header>
  )
}

export default Header
