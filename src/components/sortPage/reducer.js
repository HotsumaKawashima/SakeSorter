import * as Action from './action';

const defaultState = {
  isPrepared: false,
  isOpen: false,
  openSake: false,
  merge: {},
  leftSake: {},
  rightSake: {},
}

export default (state = defaultState, action) => {
  switch (action.type) {

    case Action.FINISH_PREPARED: {
      return {
        ...state,
        isPrepared: true,
      }
    }

    case Action.RESET_PREPARED: {
      return {
        ...state,
        isPrepared: false,
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

    case Action.OPEN_SAKE: {
      return {
        ...state,
        openSake: true,
      }
    }

    case Action.CLOSE_SAKE: {
      return {
        ...state,
        openSake: false,
      }
    }

    case Action.SET_LEFT_SAKE: {
      return {
        ...state,
        leftSake: action.payload.sake,
      }
    }

    case Action.SET_RIGHT_SAKE: {
      return {
        ...state,
        rightSake: action.payload.sake,
      }
    }

    case Action.SET_MERGE: {
      return {
        ...state,
        merge: action.payload.merge,
      }
    }

    default: {
      return state
    }

  }
}
