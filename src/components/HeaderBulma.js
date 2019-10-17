import React, { Component } from 'react'

class HeaderBulma extends Component {
    render() {
        return (
            <section class="hero is-info is-large">
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand">
                                <a href="!#" class="navbar-item">
                                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                                </a>
                                <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div id="navbarMenuHeroB" class="navbar-menu">
                                <div class="navbar-end">
                                    <a href="!#" class="navbar-item is-active">
                                    Home
                                    </a>
                                    <a href="!#" class="navbar-item">
                                    Examples
                                    </a>
                                    <a href="!#" class="navbar-item">
                                    Documentation
                                    </a>
                                    <span class="navbar-item">
                                    <a href="!#" class="button is-info is-inverted">
                                        <span class="icon">
                                        <i class="fab fa-github"></i>
                                        </span>
                                        <span>Download</span>
                                    </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class="hero-body">
                    <div class="container has-text-centered">
                    <p class="title">
                        Title
                    </p>
                    <p class="subtitle">
                        Subtitle
                    </p>
                    </div>
                </div>

                
            </section>
        )
    }
}

export default Header
