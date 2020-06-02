import { push } from 'connected-react-router';

import * as Action from './action';

export const moveSortPage = (sortedSakes) => {
  return (dispatch, getState) => {
    dispatch(Action.setSakes(sortedSakes))
    dispatch(push('/result'));
  }
}
