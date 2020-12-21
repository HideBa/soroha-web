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

export const isExpenseModalOpen = atom({
  key: "expenseModal",
  default: false,
});

export type Notification =
  | {
      type: "alert" | "warning" | "notice";
      message: string;
    }
  | undefined;

export const notificationState = atom<Notification>({
  key: "notification",
  default: undefined,
});

export const loading = atom({ key: "loading", default: false });
