export const FINISH_PREPARED  = 'SortPageAction.FINISH_PREPARED';
export const RESET_PREPARED   = 'SortPageAction.RESET_PREPARED';
export const OPEN_PAGE        = 'SortPageAction.OPEN_PAGE';
export const CLOSE_PAGE       = 'SortPageAction.CLOSE_PAGE';
export const OPEN_SAKE        = 'SortPageAction.OPEN_SAKE';
export const CLOSE_SAKE       = 'SortPageAction.CLOSE_SAKE';
export const SET_LEFT_SAKE    = 'SortPageAction.SET_LEFT_SAKE';
export const SET_RIGHT_SAKE   = 'SortPageAction.SET_RIGHT_SAKE';
export const SET_MERGE        = 'SortPageAction.SET_MERGE';

export const finishPrepared = () => {
  return {
    type: FINISH_PREPARED
  }
}

export const resetPrepared = () => {
  return {
    type: RESET_PREPARED
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

export const openSake = () => {
  return {
    type: OPEN_SAKE
  }
}

export const closeSake = () => {
  return {
    type: CLOSE_SAKE
  }
}

export const setRightSake = (sake) => {
  return {
    type: SET_RIGHT_SAKE,
    payload: { sake },
  }
}

export const setLeftSake = (sake) => {
  return {
    type: SET_LEFT_SAKE,
    payload: { sake },
  }
}

export const setMerge = (merge) => {
  return {
    type: SET_MERGE,
    payload: { merge },
  }
}
