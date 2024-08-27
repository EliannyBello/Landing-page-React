import React from "react";
import PropTypes from "prop-types"

const Navbar = ({ logo = { title: "Start Bootstrap", url: "/#" }, home = { title: "Home", url: "/#" }, about = { title: "About", url: "/#" }, services = { title: "Services", url: "/#" }, contact = { title: "Contact", url: "/#" } }) => {
    return (
        <nav className="navbar navbar-expand-lg mb-2 bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href={logo.url}>{logo.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{home.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{about.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{services.title}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{contact.title}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.object,
    home: PropTypes.object,
    about: PropTypes.object,
    services: PropTypes.object,
    contact: PropTypes.object
};


export default Navbar