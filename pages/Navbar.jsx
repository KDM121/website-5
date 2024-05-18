import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mt-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a className="text-lg underline mx-2 my-1 w-screen" href="/projects">Projects</a></li>
      <li><a className="text-lg underline mx-2 my-1 w-screen" href="https://docs.kieranmcdonnell.com">Documents</a></li>
      <li><a className="text-lg underline mx-2 my-1 w-screen" href="/support">Support</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl underline text-secondary font-bold mx-12 " href="/">Kieran McDonnell</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li><a className="text-lg underline mx-2" href="/projects">Projects</a></li>
      <li><a className="text-lg underline mx-2" href="https://docs.kieranmcdonnell.com">Documents</a></li>
      <li><a className="text-lg underline mx-2" href="/support">Support</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a href="https://github.com/KDM121/" className="btn-circle btn">
    <img src="/github.png" className="w-9 h-9"></img>
    </a>
  </div>
</div>
  )
}

export default Navbar