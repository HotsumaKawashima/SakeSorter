import * as Action from './action';

const defaultState = {
  isPrepared: false,
  isOpen: false,
  sakes: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {

    case Action.FINISH_PREPARED: {
      return {
        ...state,
        isPrepared: true,
      }
    }

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

    case Action.SET_SAKES: {
      return {
        ...state,
        sakes: action.payload.sakes,
      }
    }

    default: {
      return state
    }

  }
}
