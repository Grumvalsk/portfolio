import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'portfolio/src/model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sessionId!:any
 loginForm:FormGroup;
  user:User = new User();
  constructor(private userService:UserService,
    private form:FormBuilder,
    private cookieService: CookieService,
    private rotte: Router
  ){
     this.loginForm=form.group({
      email:['',Validators.required],
      password:['',Validators.required]
     })

  }
  ngOnInit(): void {
    this.sessionId = this.cookieService.get('JSESSIONID');
            console.log('Session ID:', this.sessionId);
  }

  login() {
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.userService.login(this.user).subscribe(
      (responseData) => {
        console.log('Login successful', responseData);
        this.user = responseData;
        this.user.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails", JSON.stringify(this.user));

        // Assicurati che xsrf non sia undefined
        const xsrf = getCookie("XSRF-TOKEN") || ''; // Imposta un valore di fallback
        window.sessionStorage.setItem("XSRF-TOKEN", xsrf);

        this.rotte.navigate(['area-riservata']);
      },
      (error) => {
        console.error('Login error', error);
      }
    );
  }

}

