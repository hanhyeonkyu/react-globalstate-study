import { useRecoilState, useRecoilValue } from "recoil";
import { atomText, reportAtomText } from "../global/recoil";

export const Recoil = () => {
  const [recoilText, setRecoilText] = useRecoilState(atomText);
  const recoilValue = useRecoilValue(reportAtomText);
  const handleRecoilText = (e: any) => {
    setRecoilText(e.target.value);
  };
  return (
    <>
      <h3>Recoil</h3>
      <h5>{recoilText}</h5>
      <h5>{recoilValue}</h5>
      <input type="text" value={recoilText} onChange={handleRecoilText} />
    </>
  );
};
