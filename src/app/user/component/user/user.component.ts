import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService]
})
export class UserComponent implements OnInit {

  loginForm!: FormGroup;
  errorMsg!:string;
  
  constructor(private router:Router,private messageService: MessageService) { 
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
          localStorage.setItem('token','akshay');
          this.router.navigate(['/home']);
      }
      else{
        this.messageService.add({severity:'error', summary:'Error', detail:'Incorrect Login Credentials'});
        this.router.navigate(['/user']);
      }

  }

  createAccount(){
    this.router.navigate(['#']);
  }


}
