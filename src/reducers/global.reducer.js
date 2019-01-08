const initialState = { menuOpened: false };

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { menuOpened: !state.menuOpened };
    default:
      return state;
  }
}

export default globalReducer;
