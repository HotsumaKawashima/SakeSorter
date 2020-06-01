import * as Action from './action';

import { moveSortPage } from '../sortPage/operation';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    dispatch(Action.openPage());
  }
}

export const onClickStartButton = () => {
  return (dispatch, getState) => {
    dispatch(Action.closePage());
    setTimeout(() => dispatch(moveSortPage()), 300)
  }
}
