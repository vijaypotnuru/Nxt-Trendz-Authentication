import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          className="logout-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </button>
    </div>
    <div className="nav-mobile-menu">
      <button type="button" className="nav-mobile-menu-button">
        <img
          className="nav-mobile-menu-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
      </button>
      <button type="button" className="nav-mobile-menu-button">
        <img
          className="nav-mobile-menu-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
      </button>
      <button type="button" className="nav-mobile-menu-button">
        <img
          className="nav-mobile-menu-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </button>
    </div>
  </nav>
)

export default Header
