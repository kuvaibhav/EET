import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  public role: string;

  constructor(private router: Router) { }

  canActivate(): boolean {
    // invoke a authorization service to determine roles

    this.role = 'enduser';

    if (this.role === 'admin') {
      console.log('valid user!');
      return true;
    } else {
      console.log('Invalid user!');
      this.router.navigate(['']);
    }

  }

}
