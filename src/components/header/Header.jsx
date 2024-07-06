import React from 'react'
import './header.css'
import Categories from '../categories/Categories'

const Header = ({onCategoryClick}) => {
  return (
    <header>
      <nav>
        <div className="title">
          <h1>Quick Times</h1>
        </div>
        <Categories onCategoryClick={onCategoryClick} />
      </nav>
    </header>
  )
}

export default Header
