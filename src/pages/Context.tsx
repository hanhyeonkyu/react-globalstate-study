import { useDispatch, useGState } from "../global/context";

export const Context = () => {
  const ctxState = useGState();
  const ctxDispatch = useDispatch();
  const contextIncrease = () => {
    ctxDispatch({
      type: "PLUS_COUNTER",
      counter: ctxState.counter,
    });
  };
  const contextDecrease = () => {
    ctxDispatch({
      type: "MINUS_COUNTER",
      counter: ctxState.counter,
    });
  };
  return (
    <>
      <h2>Context</h2>
      <h5>{ctxState.counter}</h5>
      <button onClick={contextIncrease}>context plus</button>
      <button onClick={contextDecrease}>context minus</button>
    </>
  );
};
