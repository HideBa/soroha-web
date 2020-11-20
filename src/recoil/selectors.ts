import { selector } from "recoil";
import { loading, userState } from "./atoms";

export const currentUser = selector({
  key: "currentUser",
  get: ({ get }) => get(userState),
});

export const isLoading = selector({
  key: "isLoading",
  get: ({ get }) => get(loading),
});
