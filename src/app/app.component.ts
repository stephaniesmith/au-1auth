import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { AuthState } from './auth/auth.reducer';
import { Logout } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AuthState>) {

  }

  ngOnInit() {


  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
