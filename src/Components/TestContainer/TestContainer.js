import React from 'react';
import './TestContainer.scss';

const TestContainer = () => {
  return (
    <section>
      <article className='test-question'>
        <h1>Hello</h1>
      </article>
      <article className='test-choice'>
        <h1>Hello</h1>
      </article>
      <article className='test-progress'>
        <h1>Hello</h1>
      </article>
    </section>
  )
}

export const mapStateToProps = state => ({
  trivia: state.trivia
})

export default TestContainer;
