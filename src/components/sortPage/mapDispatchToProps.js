import * as Action from './action';

import { getRandomSakes } from '../app/selectors';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    if(getState().sortPage.isPrepared) {
      dispatch(Action.openPage());
      dispatch(Action.openSake());
      return;
    }

    const sakes = getRandomSakes(getState().app.sakes, 2);

    dispatch(Action.finishPrepared());
    dispatch(Action.setLeftSake(sakes[0]));
    dispatch(Action.setRightSake(sakes[1]));
    dispatch(Action.openSake());
    dispatch(Action.openPage());
  }
}

export const onClickSake = (sake) => {
  return (dispatch, getState) => {

    dispatch(Action.closeSake());

    setTimeout(() => {
      const sakes = getRandomSakes(getState().app.sakes, 2);
      dispatch(Action.setLeftSake(sakes[0]));
      dispatch(Action.setRightSake(sakes[1]));

      setTimeout(() => {
        dispatch(Action.openSake());
      }, 200)

    }, 100)

  }
}
