import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'portfolio/src/model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

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
    private cookieService: CookieService
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
      (response: HttpResponse<any>) => {
        console.log(response);

        if (response.status === 200) {
          // Aspetta un momento per essere sicuro che il cookie sia stato impostato
          setTimeout(() => {
            this.sessionId = this.cookieService.get('JSESSIONID');
            console.log('Session ID:', this.sessionId);
          }, 100);
        }
      },
      (error: any) => {
        console.log(error.error);
      }
    );
  }
//   onSubmit() {
//     this.persona.email = this.loginForm.get('email')?.value || null;
//     this.persona.password = this.loginForm.get('password')?.value || null;

//     this.service.login(this.persona).subscribe(
//       (response: HttpResponse<any>) => {
//         if (response.status === 200) {
//           const headers = response.headers;
//           this.jwt = headers.get('Authorization');
//           this.service.setJwt(this.jwt);
//           sessionStorage.setItem('jwt', this.jwt);



//           // Naviga verso la homepage
//           this.router.navigate(['/home-page']);
//         }
//       },
//       (error: any) => {
//         this.errorMessage = error;
//         console.log(error.error);
//       }
//     );
//   }
// }

}
