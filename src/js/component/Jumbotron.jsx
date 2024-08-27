import React from "react";
import PropTypes from "prop-types"

const Jumbotron = ({title="A warm welcome!", paragrapgh="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    boton= { title: "Call to action!", url: "/#" }

 }) => {
    return (


        <div className="jumbotron bg-light p-4">
            <h1 className="display-4">{title}</h1>
            <p>{paragrapgh}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href={boton.url} role="button">{boton.title}</a>
            </p>
        </div>




    );
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    paragrapgh: PropTypes.string,
    boton: PropTypes.object,
}


export default Jumbotron