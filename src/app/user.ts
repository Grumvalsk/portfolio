export class User {
  email: string;
  password: string;
  authStatus:string;


  constructor() {
    this.email = '';
    this.password = '';
    this.authStatus='';
  }
}

