import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private COOKIE_KEY: string = 'RulesService';
  constructor() { }

  public getRules()
  {
    return this.getCookie()
  }

  public setRules()
  {
    this.setCookie()
  }

  private setCookie()
  {
    Cookie.set(this.COOKIE_KEY, '1', 1);
  }

  private getCookie()
  {
    return Cookie.get(this.COOKIE_KEY)
  }
}
