export const FINISH_PREPARED  = 'ResultPageAction.FINISH_PREPARED';
export const OPEN_PAGE        = 'ResultPageAction.OPEN_PAGE';
export const CLOSE_PAGE       = 'ResultPageAction.CLOSE_PAGE';
export const SET_SAKES        = 'ResultPageAction.SET_SAKES';

export const finishPrepared = () => {
  return {
    type: FINISH_PREPARED
  }
}

export const openPage = () => {
  return {
    type: OPEN_PAGE,
  }
}

export const closePage = () => {
  return {
    type: CLOSE_PAGE,
  }
}

export const setSakes = (sakes) => {
  return {
    type: SET_SAKES,
    payload: { sakes },
  }
}
