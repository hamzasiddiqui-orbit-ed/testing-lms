// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  userInfo: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return { ...state, userInfo: action.payload };
    case 'LOGOUT':
      return { ...state, userInfo: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
