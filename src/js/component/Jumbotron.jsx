import React from "react";
import PropTypes from "prop-types"

const Jumbotron = ({title="¡No a la caza descontrolada!", paragrapgh="La caza excesiva y descontrolada provoca no solo daños ecológicos importantes y desaparición de especies sino que también acelera la pérdida de recursos naturales de gran importancia para las comunidades humanas.",
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