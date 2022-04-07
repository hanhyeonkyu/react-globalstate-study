import { useState } from "react";
import {
  useDispatch as reduxDispatch,
  useSelector as reduxSelector,
} from "react-redux";
import { RootState as reduxRootState } from "../global/redux";
import {
  decrease as rdxDec,
  increase as rdxInc,
  increaseBy as rdxIncBy,
} from "../global/redux/counter";

export const Home = () => {
  const [reduxIncBy, setReduxIncBy] = useState(0);
  const reduxCnt = reduxSelector(
    (state: reduxRootState) => state.counter.count
  );
  const reduxDph = reduxDispatch();
  const reduxIncrease = () => {
    reduxDph(rdxInc());
  };
  const reduxDecrease = () => {
    reduxDph(rdxDec());
  };
  const reduxIncreaseBy = (diff: number) => {
    reduxDph(rdxIncBy(diff));
  };
  const reduxhandleChange = (e: any) => {
    setReduxIncBy(Number(e.target.value));
  };
  return (
    <div className="home">
      <h2>Use Global State</h2>
      <div>
        <div>
          <h3>Redux</h3>
          <h5>redux: {reduxCnt}</h5>
          <input
            type={"number"}
            value={reduxIncBy}
            onChange={reduxhandleChange}
          />
          <hr />
          <button onClick={reduxIncrease}>redux plus</button>
          <button onClick={reduxDecrease}>redux minus</button>
          <button onClick={() => reduxIncreaseBy(reduxIncBy)}>
            redux plusBy
          </button>
        </div>
        <div>
          <h3>Mobx</h3>
          <h5>mobx: {0}</h5>
          <button>mobx plus</button>
        </div>
        <div>
          <h3>Recoil</h3>
          <h5>recoil: {0}</h5>
          <button>recoil plus</button>
        </div>
      </div>
    </div>
  );
};
