import React from 'react';

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className='navbar-nav'>
            <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
            </li>
            <li className='navbar-nav'>
            <a className="nav-link" onClick={()=>setCategory("business")}>Business</a>
            </li>
            <li className='navbar-nav'>
            <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
            </li>
            <li className='navbar-nav'>
            <a className="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
            </li>
            <li className='navbar-nav'>
            <a className="nav-link" onClick={()=>setCategory("science")}>Science</a>
            </li>
            <li className='navbar-nav'>
            <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
