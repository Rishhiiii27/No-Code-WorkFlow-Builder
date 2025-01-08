import React, { createContext, useReducer, useContext } from 'react';

const WorkflowContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return { ...state, nodes: [...state.nodes, action.payload] };
    case 'REMOVE_NODE':
      return { ...state, nodes: state.nodes.filter((node) => node.id !== action.payload.id) };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const WorkflowProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { name: '', nodes: [] });
  return (
    <WorkflowContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkflowContext.Provider>
  );
};

const useWorkflowContext = () => useContext(WorkflowContext);

export { WorkflowProvider, useWorkflowContext };
