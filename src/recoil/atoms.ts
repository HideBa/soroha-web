import { atom } from "recoil";

export type User = {
  userName: string;
  teamId: string;
};

const initialUser: User = {
  userName: "",
  teamId: "",
};

export const userState = atom({
  key: "user",
  default: initialUser,
});
