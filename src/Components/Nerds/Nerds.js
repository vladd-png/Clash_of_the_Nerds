import React from 'react';
import './Nerds.scss';
import dali from '../../assets/dali.png';
import davinci from '../../assets/davinci.png';
import isaac from '../../assets/isaac.png';
import newton from '../../assets/newton.png';
import plato from '../../assets/plato.png';
import roman1 from '../../assets/roman-guy.png';
import roman2 from '../../assets/roman-guy-2.png';
import vangogh from '../../assets/vangogh.png';

const Nerds = () => {

  return (
    <section>
      <img id='dali' className='bg-img-nerd' src={ dali } />
      <img id='davinci' className='bg-img-nerd' src={ davinci } />
      <img id='isaac' className='bg-img-nerd' src={ isaac } />
      <img id='newton' className='bg-img-nerd' src={ newton } />
      <img id='plato' className='bg-img-nerd' src={ plato } />
      <img id='roman1' className='bg-img-nerd' src={ roman1 } />
      <img id='roman2' className='bg-img-nerd' src={ roman2 } />
      <img id='vangogh' className='bg-img-nerd' src={ vangogh } />
    </section>
  )
}

export default Nerds
