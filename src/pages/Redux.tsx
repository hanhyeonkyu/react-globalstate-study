import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../global/redux";
import { decrease, increase } from "../global/redux/counter";

export const Redux = () => {
  const reduxCnt = useSelector((state: RootState) => state.counter.count);
  const reduxDph = useDispatch();
  const reduxIncrease = () => {
    reduxDph(increase());
  };
  const reduxDecrease = () => {
    reduxDph(decrease());
  };
  return (
    <>
      <h2>Redux</h2>
      <h5>redux: {reduxCnt}</h5>
      <button onClick={reduxIncrease}>redux plus</button>
      <button onClick={reduxDecrease}>redux minus</button>
    </>
  );
};
