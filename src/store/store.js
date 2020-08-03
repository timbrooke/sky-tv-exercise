import React, {createContext, useReducer} from 'react';

const initialState = {anchors:new Map()};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'registerAnchor':
        const anchors = new Map(state.anchors);
        anchors.set(action.payload.name,action.payload.ref)
        const newState = {...state,anchors};
        return newState;
      default:
        throw new Error();
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
