import { GET_USER, ActionUserType } from '../actionTypes/user'

export const getUser = (action: ActionUserType): ActionUserType => {
  return {
    type: GET_USER,
    payload: action.payload
  }
};
