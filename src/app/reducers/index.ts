import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';

interface AuthState {
  loggedIn: boolean;
  user: User;
}

const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export interface AppState {
  router: any;
  auth: AuthState;
  // courses: CoursesState;
  // lessons: LessonsState;
}

function authReducer(state: AuthState = initialAuthState, { type, payload }): AuthState {
  switch (type) {
    case AuthActionTypes.LoginAction:
      return { loggedIn: true, user: payload.user };
    case AuthActionTypes.LogoutAction:
      return { loggedIn: false, user: null };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
