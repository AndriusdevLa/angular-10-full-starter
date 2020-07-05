import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN = 'auth-token';

  constructor() { }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.AUTH_TOKEN);
    }
  }

  setToken(val: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.AUTH_TOKEN, val);
    }
  }
}
