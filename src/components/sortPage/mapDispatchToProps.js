import * as Action from './action';

import { getRandomSakes } from '../app/selectors';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    if(getState().sortPage.isPrepared) {
      dispatch(Action.openPage());
      dispatch(Action.openSake());
      return;
    }

    const base = getRandomSakes(getState().app.sakes).map(v => [v]);
    console.log([...base])
    const merged = [[]];
    if(base.length % 2 > 0) {
      merged[0] = base.shift();
      merged.push([]);
    }
    const left = base.shift();
    const right = base.shift();

    dispatch(Action.finishPrepared());
    dispatch(Action.setMerge({
      base,
      left,
      right,
      merged,
    }))
    dispatch(Action.setLeftSake(left[0]));
    dispatch(Action.setRightSake(right[0]));
    dispatch(Action.openSake());
    dispatch(Action.openPage());
  }
}

export const onClickSake = (sake) => {
  return (dispatch, getState) => {

    dispatch(Action.closeSake());

    setTimeout(() => {
      const merge = getState().sortPage.merge;

      if(sake.id === merge.left[0].id) {
        merge.merged[merge.merged.length - 1].push(merge.left.shift());
      } else {
        merge.merged[merge.merged.length - 1].push(merge.right.shift());
      }

      if(merge.left.length === 0 || merge.right.length === 0) {
        merge.merged[merge.merged.length - 1] = merge.merged[merge.merged.length - 1].concat(merge.left).concat(merge.right);
        merge.left = [];
        merge.right =[];

        if(merge.base.length > 0) {
          merge.merged.push([]);
          merge.left = merge.base.shift();
          merge.right = merge.base.shift();
          dispatch(Action.setLeftSake(merge.left[0]));
          dispatch(Action.setRightSake(merge.right[0]));
          dispatch(Action.setMerge(merge));
        } else if(merge.merged.length > 1) {
          merge.base = merge.merged;
          merge.left = merge.base.shift();
          merge.right = merge.base.shift();
          merge.merged = [[]];
          dispatch(Action.setLeftSake(merge.left[0]));
          dispatch(Action.setRightSake(merge.right[0]));
          dispatch(Action.setMerge(merge));
        } else {
          dispatch(Action.closeSake());
          dispatch(Action.setMerge(merge));
          setTimeout(() => {
            dispatch(moveResultPage(merge.merged[0]));
          }, 200)
        }
      } else {
        dispatch(Action.setLeftSake(merge.left[0]));
        dispatch(Action.setRightSake(merge.right[0]));
        dispatch(Action.setMerge(merge));
      }


      setTimeout(() => {
        dispatch(Action.openSake());
      }, 200)

    }, 100)

  }
}
