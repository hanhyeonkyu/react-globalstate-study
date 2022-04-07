import React from "react";
import {
  useDispatch as reduxDispatch,
  useSelector as reduxSelector,
} from "react-redux";
import observableTodoStore from "../global/mobx";
import { RootState as reduxRootState } from "../global/redux";
import {
  decrease as rdxDec,
  increase as rdxInc,
  increaseBy as rdxIncBy,
} from "../global/redux/counter";

export const Home = () => {
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;
  const [reduxIncBy, setReduxIncBy] = React.useState(0);
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
  const mobxIncrease = () => {
    observableTodoStore.plus();
    forceUpdate();
  };
  const mobxDecrease = () => {
    observableTodoStore.minus();
    forceUpdate();
  };
  return (
    <div className="home">
      <h2>Use Global State</h2>
      <div>
        <div>
          <h2>Redux</h2>
          <h5>redux: {reduxCnt}</h5>
          <input
            type={"number"}
            value={reduxIncBy}
            onChange={reduxhandleChange}
          />
          <div style={{ width: "100%", marginBottom: "0.5rem" }} />
          <button onClick={reduxIncrease}>redux plus</button>
          <button onClick={reduxDecrease}>redux minus</button>
          <button onClick={() => reduxIncreaseBy(reduxIncBy)}>
            redux plusBy
          </button>
        </div>
        <hr />
        <div>
          <h2>Mobx</h2>
          <h5>count: {observableTodoStore.count}</h5>
          <h5>report: {observableTodoStore.report}</h5>
          <button onClick={mobxIncrease}>mobx plus</button>
          <button onClick={mobxDecrease}>mobx minus</button>
        </div>
        <hr />
        <div>
          <h3>Recoil</h3>
          <h5>recoil: {0}</h5>
          <button>recoil plus</button>
        </div>
      </div>
    </div>
  );
};
