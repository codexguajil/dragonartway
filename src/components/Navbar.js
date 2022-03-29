import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/about">ABOUT</Link>
        <Link to="/collections">COLLECTIONS</Link>
        <Link to="/">
          <h1>DRAGON ART WAY</h1>
        </Link>
        <Link to="/checkout">CHECKOUT</Link>
      </div>
    </nav>
  )
}
