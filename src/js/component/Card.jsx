import React from 'react'
import PropTypes from 'prop-types'


const Card = ( {imgUrl= 'https://picsum.photos/id/350/350/350',title= 'Pérdida de Biodiversidad', description = 'La caza descontrolada reduce drásticamente la diversidad de especies en la naturaleza. Esto provoca la desaparición de animales clave, afectando negativamente los ecosistemas que dependen de ellos para mantener el equilibrio.'}) => {
    return (
    <div class="card h-100 border border-2">
        <img src={imgUrl} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
          <div className='button'>
          <a href="#" class="btn btn-primary">Call to action!</a>
          </div>
      </div>
    )
}


Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Card;