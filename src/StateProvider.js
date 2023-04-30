import React,{createContext,useContext,useReducer } from "react";

//prepares the dataLayer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, Children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)} >
    {Children}
    </StateContext.Provider>
);
//pull info from the data layer
export const useStateValue = () => useContext(StateContext);