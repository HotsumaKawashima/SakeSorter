export default (state, props) => {
  return {
    ...state.sortPage,
    progress: Math.floor(state.sortPage.merge.progress * 100 / state.sortPage.merge.max)
  }
}
