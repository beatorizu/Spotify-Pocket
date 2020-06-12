import AuthConstants from "../constants/auth";


export const authCallbackError = erroMessage => ({
  type: AuthConstants.AUTH_CALLBACK_ERROR,
  payload: erroMessage
})

export const authCallbackSucess = credentials => ({
  type: AuthConstants.AUTH_CALLBACK_SUCCESS,
  payload: {...credentials}
})
