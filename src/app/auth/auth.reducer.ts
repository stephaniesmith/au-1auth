import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function reducer(state = initialAuthState, { type, payload }: AuthActions): AuthState {
  switch (type) {
    case AuthActionTypes.LoginAction:
      return { loggedIn: true, user: payload.user };
    case AuthActionTypes.LogoutAction:
      return { loggedIn: false, user: null };
    default:
      return state;
  }
}
