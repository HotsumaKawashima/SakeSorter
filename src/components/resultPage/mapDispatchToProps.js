import * as Action from './action';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    if(getState().frontPage.isPrepared) {
      dispatch(Action.openPage());
      return;
    }
    dispatch(Action.finishPrepared());
    dispatch(Action.openPage());
  }
}