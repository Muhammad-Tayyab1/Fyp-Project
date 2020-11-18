import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import './header.css'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
import Countdown from './Timer'

function Navigation() {
  const cart = useSelector(state => state.cart);
  const { cartItem } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const history = useHistory();
  const signoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
  return (
    <div className="nav">

      <div className="container">
        <div className="thead">
          <div className="tit"><Link to="/">
            Shoe-Point
            </Link>

           </div>
           
         <div>
         <Countdown className="count" date={`${year}-12-24T00:00:00`} /></div></div>
        <ul className="row">
          <div className="head">
            <li>
              <Link to="/" >
                Home
                </Link>
            </li>
            <li>
              <Link to="/product" >
                Products
                </Link>
            </li>
            <li>
              <Link to="/about">
                About-Us
                </Link>
            </li>
            <li>
              <Link to="/faqs">
                FAQs
                </Link>
            </li></div>
          <div>
            <div className="header-links">
              <div className="drop">
                <div className="cartli">
                  <Link to='/cart' >
                    <AddShoppingCartIcon />
                    {cartItem.length > 0 && (
                      <span className="badge">{cartItem.length}</span>
                    )}</Link>
                </div>
                <div className="drop">
                  <div >
                    {userInfo ? (
                      <div className="dropdown">
                        <Link to="#">
                          {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/profile">User Profile</Link>
                          </li>
                          <li>
                            <Link to="/orderHistory">Order History</Link>
                          </li>
                          <li>
                            <Link to="/signin" onClick={signoutHandler}>
                              Sign Out
                    </Link>


                          </li>
                        </ul>
                      </div>
                    ) : (
                        <Link to="/signin">Sign In </Link>
                      )}</div>
                  <div className="drop">
                    {userInfo && userInfo.isAdmin && (
                      <div className="dropdown">
                        <Link to="#admin">
                          Admin <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                          <li>
                            <Link to="/products">Products</Link>
                          </li>
                          <li>
                            <Link to="/orders">Orders</Link>
                          </li>
                          <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Navigation
