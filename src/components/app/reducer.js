import sakes from './sakes.json';

const defaultState = {
  sakes: sakes,
}

export default (state = defaultState, action) => {
  switch (action.type) {

    default: {
      return state
    }

  }
}
