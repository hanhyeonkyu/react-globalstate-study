import React from "react";
import observableTodoStore from "../global/mobx";

export const Mobx = () => {
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;
  const increase = () => {
    observableTodoStore.plus();
    forceUpdate();
  };
  const decrease = () => {
    observableTodoStore.minus();
    forceUpdate();
  };
  return (
    <>
      <h2>Mobx</h2>
      <h5>count: {observableTodoStore.count}</h5>
      <h5>report: {observableTodoStore.report}</h5>
      <button onClick={increase}>mobx plus</button>
      <button onClick={decrease}>mobx minus</button>
    </>
  );
};
