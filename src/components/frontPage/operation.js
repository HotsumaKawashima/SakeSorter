import { push } from 'connected-react-router';

export const moveFrontPage = () => {
  return (dispatch, getState) => {
    dispatch(push('/front'));
  }
}
