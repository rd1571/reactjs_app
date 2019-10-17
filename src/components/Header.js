import React, { Component } from 'react'
import logo from '../assets/img/logo192.png'

class Header extends Component {
    render() {
        return (
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="!#">
                  <img src={logo} width="60" height="60" alt="logo_image" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav mr-auto"></ul>
                  <a href="!#" className="navbar-text">Login</a>
                </div>
              </nav>
            </div>
        )
    }
}

export default Header
