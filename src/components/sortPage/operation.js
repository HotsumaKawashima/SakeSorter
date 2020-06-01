import { push } from 'connected-react-router';

export const moveSortPage = () => {
  return (dispatch, getState) => {
    dispatch(push('/sort'));
  }
}
