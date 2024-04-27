import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link,useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const navbar = ({setShowLogin}) => {
  const[menu, setMenu] = useState("Menu")
  const{getTotalCartAmount,token,setToken} = useContext(StoreContext)
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}><Link to='/'>Home</Link></li>
        <li  onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li  onClick={() => setMenu("Mobile")} className={menu==="Mobile"?"active":""}>Mobile</li>
        <li onClick={() => setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>:<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
            </div>}
        
      </div>
    </div>
  )
}

export default navbar