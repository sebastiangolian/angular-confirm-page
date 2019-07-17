import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RulesService } from '../services/rules.service';

@Injectable({
  providedIn: 'root'
})
export class RulesGuard implements CanActivate {
  constructor(private rulesService: RulesService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.rulesService.getRules() != '1')
    {
      this.router.navigate(['/confirm']);
    }

    return true
  }
}
