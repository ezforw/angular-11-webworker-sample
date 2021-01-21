import { Injectable } from '@angular/core';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth0Client$: Observable<Auth0Client> = of(
    new Auth0Client({
      domain: '',
      client_id: '',
      redirect_uri: '',
      scope: '',
    })
  );
  public isAuthenticated$: Observable<boolean> = this._auth0Client$.pipe(
    switchMap((client: Auth0Client) => from(client.isAuthenticated())),
    catchError((data) => {
      return throwError(data);
    })
  );

  constructor() {}
}
