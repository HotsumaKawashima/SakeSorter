import * as Action from './action';

import { getRandomSakes } from '../app/selectors';
import { moveSortPage } from '../sortPage/operation';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    if(getState().frontPage.isPrepared) {
      dispatch(Action.openPage());
      return;
    }
    dispatch(Action.finishPrepared());
    dispatch(Action.setSakes(getRandomSakes(getState().app.sakes)));
    dispatch(Action.openPage());
  }
}

export const onClickStartButton = () => {
  return (dispatch, getState) => {
    dispatch(Action.closePage());
    setTimeout(() => dispatch(moveSortPage()), 300)
  }
}
