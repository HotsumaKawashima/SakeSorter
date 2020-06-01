export const OPEN_PAGE  = 'FrontPageAction.OPEN_PAGE';
export const CLOSE_PAGE = 'FrontPageAction.CLOSE_PAGE';

export const openPage = () => {
  return {
    type: OPEN_PAGE
  }
}

export const closePage = () => {
  return {
    type: CLOSE_PAGE
  }
}
