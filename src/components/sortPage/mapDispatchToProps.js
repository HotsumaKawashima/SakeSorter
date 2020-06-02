import * as Action from './action';

import { getRandomSakes } from '../app/selectors';
import { moveResultPage } from '../resultPage/operation';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    if(getState().sortPage.isPrepared) {
      dispatch(Action.openPage());
      dispatch(Action.openSake());
      return;
    }

    const base = getRandomSakes(getState().app.sakes).map(v => [v]);
    const n = base.length;
    const max = n * (Math.floor(Math.log2(n)) + 1);
    const progress = 0;
    const count = 0;
    const merged = [[]];
    if(base.length % 2 > 0) {
      merged[0] = base.shift();
      merged.push([]);
    }
    const left = base.shift();
    const right = base.shift();

    dispatch(Action.finishPrepared());
    dispatch(Action.setMerge({
      n,
      max,
      count,
      progress,
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
          merge.progress += 1;
          dispatch(Action.setLeftSake(merge.left[0]));
          dispatch(Action.setRightSake(merge.right[0]));
          dispatch(Action.setMerge(merge));
        } else if(merge.merged.length > 1) {
          merge.count += 1;
          merge.progress = merge.count * merge.n;
          merge.base = merge.merged;
          merge.merged = [[]];
          if(merge.base.length % 2 > 0) {
            merge.merged[0] = merge.base.shift();
            merge.merged.push([]);
          }
          merge.left = merge.base.shift();
          merge.right = merge.base.shift();
          dispatch(Action.setLeftSake(merge.left[0]));
          dispatch(Action.setRightSake(merge.right[0]));
          dispatch(Action.setMerge(merge));
        } else {
          // finish merge
          dispatch(Action.closeSake());
          dispatch(Action.resetPrepared())
          dispatch(Action.setMerge(merge));
          setTimeout(() => {
            dispatch(moveResultPage(merge.merged[0]));
          }, 200)
        }
      } else {
        merge.progress += 1;
        dispatch(Action.setLeftSake(merge.left[0]));
        dispatch(Action.setRightSake(merge.right[0]));
        dispatch(Action.setMerge(merge));
      }


      setTimeout(() => {
        dispatch(Action.openSake());
      }, 300)

    }, 100)

  }
}
