import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'ngstarter';
  constructor(private _authService: AuthService) {}

  public ngAfterViewInit(): void {
    this._authService.isAuthenticated$.subscribe({
      next: console.log,
      error: console.error,
    });
  }
}
