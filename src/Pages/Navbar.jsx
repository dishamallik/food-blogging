import { Link, NavLink } from "react-router-dom";
import logo  from "../assets/logo.png"
import useAuth from "../hook/useAuth";


const Navbar = () => {
    const  {logout, user} = useAuth()
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/add">Add Blog</NavLink></li>
    <li><NavLink to="/all"> All blogs</NavLink></li>
    <li><NavLink to="/Featured"> Featured Blogs</NavLink></li>
    <li><NavLink to="/Wishlist"> Wishlist</NavLink></li>
    
    
    </>




    return (
        
        
            <div className="navbar bg-emerald-50">
              <div className="navbar-start">
                <div className="dropdown">
                  <div className="lg:hidden ml-auto"> {/* Move dropdown icon to right */}
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                      </svg>
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-rose-100 rounded-box w-52">
                    {navLinks}
                  </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-Display font-bold">
                  <div className="flex">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                    <h1>C<span className="text-orange-600">r</span>ave</h1>
                  </div>
                </a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold">
                  {navLinks}
                </ul>
              </div>
              <div className="navbar-end hidden lg:flex items-center gap-3">
                {user ? (
                  <div className="flex items-center gap-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
                      <div className="w-10 rounded-full">
                        <img alt="User" src={user?.photoURL || "https://i.ibb.co/df04xnj/user.jpg"} />
                        <div className="absolute top-7 left-0 right-0 bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 hover:bg-rose-100 hover:rounded-lg hover:text-white">
                          <div className="text-black text-center py-2">{user?.displayName || "user not found"}</div>
                        </div>
                      </div>
                    </div>
                    <button onClick={logout} className="btn btn-outline bg-rose-400">Log Out</button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Link to="/login"><button className="btn btn-outline bg-rose-400">Log In</button></Link>
                    <Link to="/register"><button className="btn btn-outline bg-rose-400">Register</button></Link>
                  </div>
                )}
              </div>
              <div className="dropdown lg:hidden ml-auto"> {/* Move dropdown to right */}
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-rose-100 rounded-box w-32 right-0"> 
                  {user ? (
                    <>
                      <li>
                        <div className="flex items-center gap-3">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar relative">
                            <div className="w-10 rounded-full">
                              <img alt="User" src={user?.photoURL || "https://i.ibb.co/df04xnj/user.jpg"} />
                              <div className="absolute top-7 left-0 right-0 bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 hover:bg-rose-100 hover:rounded-lg hover:text-white">
                                <div className="text-black text-center py-2">{user?.displayName || "user not found"}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button onClick={logout} className="btn btn-outline bg-rose-400 w-full">Log Out</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login">
                          <button className="btn btn-outline bg-rose-400 w-full">Log In</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">
                          <button className="btn btn-outline bg-rose-400 w-full">Register</button>
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
      
    );
};

export default Navbar;