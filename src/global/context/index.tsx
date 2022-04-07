import React from "react";

type State = {
  counter: number;
};

type Action =
  | {
      type: "PLUS_COUNTER";
      counter: number;
    }
  | {
      type: "MINUS_COUNTER";
      counter: number;
    };

type Dispatch = React.Dispatch<Action>;

const StateContext = React.createContext<State | null>(null);
const DispatchContext = React.createContext<Dispatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "PLUS_COUNTER":
      return {
        ...state,
        counter: action.counter + 1,
      };
    case "MINUS_COUNTER":
      return {
        ...state,
        counter: action.counter - 1,
      };
  }
};

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    counter: 0,
  });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useGState = () => {
  const state = React.useContext(StateContext);
  if (!state) throw new Error("Cannot find ContextProvider");
  return state;
};

export const useDispatch = () => {
  const dispatch = React.useContext(DispatchContext);
  if (!dispatch) throw new Error("Cannot find ContextProvider");
  return dispatch;
};
