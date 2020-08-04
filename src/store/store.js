import React, {createContext, useReducer} from 'react';

const initialState = {anchors:new Map(),menu:"Home"};
const store = createContext(initialState);
const { Provider } = store;

function updateMenuState(state,action){
  const newState = { ...state, menu:action.payload.menu}
  return newState;
}

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'menuUpdate':
        return updateMenuState(state,action);
      default:
        throw new Error();
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
