export const PASSWORD_MIN_LENGTH = 9;

export const API_BASE_URL = process.env.SOROHA_WEB_API_ENDPOINT;
// ############# Auth
export const SIGN_UP_URL = API_BASE_URL + "/users/signup";

export const SIGN_IN_URL = API_BASE_URL + "/users/signin";

export const ME_URL = API_BASE_URL + "/user";

// ################ Settings
export const CREATE_TEAM = API_BASE_URL + "/teams";

export const TEAM_LIST = API_BASE_URL + "/teams";

// ################# Expenses
export const SEND_EXPENSE = API_BASE_URL + "/expenses";

export const UPDATE_EXPENSE = (slug: string) =>
  API_BASE_URL + "/expenses/" + slug;

export const DELETE_EXPENSE = (slug: string) =>
  API_BASE_URL + "/expenses/" + slug;

export const TEAM_EXPENSES = (teamName: string) =>
  API_BASE_URL + "/teams/" + teamName + "/expenses";

export const TEAM_MY_EXPENSES = (teamName: string) =>
  API_BASE_URL + "/teams/" + teamName + "/user" + "/expenses";

export const CALCULATE = (teamName: string) =>
  API_BASE_URL + "/teams/" + teamName + "/calculations";
