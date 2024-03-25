export type ActionUserType = {
  type: string,
  payload: {
    firstName: string,
    lastName: string,
    id: string,
    email: string
  }
};

export const GET_USER = 'GET_USER';
export const LOGOUT = 'LOGOUT';