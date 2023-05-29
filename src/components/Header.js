import React from 'react';
import { Link } from 'react-router-dom';
import {GiWorld} from 'react-icons/gi';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><GiWorld color='yellow'/>&nbsp; Catalog App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>

    </>
  )
}

export default Header
