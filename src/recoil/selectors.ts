import { selector } from "recoil";
import { userState } from "./atoms";

export const username = selector({
  key: "username",
  get: ({ get }) => get(userState),
});
