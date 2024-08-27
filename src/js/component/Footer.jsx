import React from 'react'
import PropTypes from 'prop-types'


const Footer = ({parrafo = 'Copyright © Your Website'}) => {
    return (<footer class="bg-dark text-white text-center">
        <div class="container">
          <p class="mb-0 my-5 py-5">{parrafo}</p>
        </div>
      </footer>)
}

Footer.propTypes = {
    parrafo: PropTypes.string,
}

export default Footer;