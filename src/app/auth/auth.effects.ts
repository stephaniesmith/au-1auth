import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, Logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of, Observable } from 'rxjs';


@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login> (AuthActionTypes.LoginAction),
    tap(({ payload }) => localStorage.setItem('user', JSON.stringify(payload)))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Login> (AuthActionTypes.LogoutAction),
    tap(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  init$ = defer((): Observable<any> => {
    const userData = localStorage.getItem('user');

    if (userData) {
      return of(new Login(JSON.parse(userData).user));
    } else {
      return of(new Logout());
    }
  });

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
