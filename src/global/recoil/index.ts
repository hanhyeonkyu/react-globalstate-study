import { atom, selector } from "recoil";

export const atomText = atom({
  key: "atomText",
  default: "",
});

export const reportAtomText = selector({
  key: "reportAtomText",
  get: ({ get }) => {
    const text = get(atomText);
    return `atomText: ${text}, length is ${text.length}`;
  },
});
