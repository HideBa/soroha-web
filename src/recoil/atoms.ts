import { atom } from "recoil";

export type User = {
  username: string;
  teamId: string;
};

const initialUser: User = {
  username: "",
  teamId: "",
};

export const userState = atom({
  key: "user",
  default: initialUser,
});
