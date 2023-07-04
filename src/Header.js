import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to='/' ><img className='header-logo' alt='' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
      </Link>
      <div className='header-search'>
        <input className='header-searchinput'/>
        <SearchIcon className='header-searchicon' />
      </div>


      <div className='header-nav'>
        <Link to="/login">
            <div className='header-option'>
              <span className='header-optionlineone'>Hello user</span>
              <span className='header-optionlinetwo'>Sign In</span>
            </div>
        </Link>

        <div className='header-option'>
        <span className='header-optionlineone'>Returns</span>
           <span className='header-optionlinetwo'>Orders</span>
        </div>


        <div className='header-option'>
        <span className='header-optionlineone'>Your</span>
           <span className='header-optionlinetwo'>Prime</span>
        </div>
        <Link to='/Checkout'> 
        <div className='header-optionbasket'>
          <ShoppingBasketIcon />
          <span className='header-opyionlinetwo header-basketcount'>{basket.length}</span>
        </div>
        </Link>
      </div>


    </div>
  )
}

export default Header
