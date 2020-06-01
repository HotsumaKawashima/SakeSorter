import * as Action from './action';

const defaultState = {
  isOpen: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {

    case Action.OPEN_PAGE: {
      return {
        ...state,
        isOpen: true,
      }
    }

    case Action.CLOSE_PAGE: {
      return {
        ...state,
        isOpen: false,
      }
    }

    default: {
      return state
    }

  }
}
