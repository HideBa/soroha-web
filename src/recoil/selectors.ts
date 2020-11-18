import { selector } from "recoil";
import { userState } from "./atoms";

export const currentUser = selector({
  key: "currentUser",
  get: ({ get }) => get(userState),
});
