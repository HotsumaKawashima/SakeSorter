import * as Action from './action';

import { moveFrontPage } from '../frontPage/operation';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    if(getState().resultPage.sakes.length === 0) {
      dispatch(moveFrontPage());
      return;
    }

    if(getState().resultPage.isPrepared) {
      dispatch(Action.openPage());
      return;
    }
    dispatch(Action.finishPrepared());
    dispatch(Action.openPage());
  }
}
