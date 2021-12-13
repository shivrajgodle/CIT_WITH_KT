import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loginForm!: FormGroup;
  errorMsg!:string;
  
  constructor(private router:Router,) { 
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  });
  }

  ngOnInit(): void {
  }

  onSubmit(){

      if(this.loginForm.value.userName==='ashinde1760@gmail.com' && this.loginForm.value.password==="Akki@123")
      {
          this.router.navigate(['/home']);
      }
      // else{
      //   this.errorMsg= {severity:'success', summary:'Success', detail:'Message Content'},
      // }

  }

  createAccount(){
    this.router.navigate(['#']);
  }
}
