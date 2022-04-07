import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../global/redux";
import { decrease, increase, increaseBy } from "../global/redux/counter";

export const Redux = () => {
  const [reduxIncBy, setReduxIncBy] = useState(0);
  const reduxCnt = useSelector((state: RootState) => state.counter.count);
  const reduxDph = useDispatch();
  const reduxIncrease = () => {
    reduxDph(increase());
  };
  const reduxDecrease = () => {
    reduxDph(decrease());
  };
  const reduxIncreaseBy = (diff: number) => {
    reduxDph(increaseBy(diff));
  };
  const reduxhandleChange = (e: any) => {
    setReduxIncBy(Number(e.target.value));
  };
  return (
    <>
      <h3>Redux</h3>
      <h5>redux: {reduxCnt}</h5>
      <input type={"number"} value={reduxIncBy} onChange={reduxhandleChange} />
      <hr />
      <button onClick={reduxIncrease}>redux plus</button>
      <button onClick={reduxDecrease}>redux minus</button>
      <button onClick={() => reduxIncreaseBy(reduxIncBy)}>redux plusBy</button>
    </>
  );
};
