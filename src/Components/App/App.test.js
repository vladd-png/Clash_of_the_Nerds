import React from 'react';
import { render } from '@testing-library/react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';


describe('App', () => {

  describe('fetchData', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />)
    })

    it('should call fetchData when component mounts with the correct url', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({})
        });
      })
      let mockTeam = '25';
      let mockLevel = 'easy';
      wrapper.instance().fetchData(mockTeam, mockLevel)
      expect(window.fetch).toHaveBeenCalledWith(`https://opentdb.com/api.php?amount=10&category=${mockTeam}&difficulty=${mockLevel}`)
    })
  })

  describe('mapStateToProps', () => {
    it('should be able to update state', () => {
      let mockState = {}

      const expected = {}
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the loadMovies action when loadMoviesToStore is called', () => {
      const mockDispatch = jest.fn();
      const movies = []
      const actionToDispatch = loadMovies(movies)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.loadMoviesToStore(movies)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
