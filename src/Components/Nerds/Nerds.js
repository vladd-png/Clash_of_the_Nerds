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

export const Nerds = () => {

  return (
    <section className='nerd-pile'>
      <img id='dali' src={ dali } alt='Salvador Dali' />
      <img id='davinci' src={ davinci } alt='Leonardo DaVinci' />
      <img id='isaac' src={ isaac } alt='Isaac Newton' />
      <img id='newton' src={ newton } alt='Albert Einstein' />
      <img id='plato' src={ plato } alt='Plato' />
      <img id='roman1' src={ roman1 } alt='Roman Man with Spear' />
      <img id='roman2' src={ roman2 } alt='Roman Man with Green Cape' />
      <img id='vangogh' src={ vangogh } alt='Vincent Van Gogh' />
    </section>
  )
}

export default Nerds
