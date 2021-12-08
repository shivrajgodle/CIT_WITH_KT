import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import Swal from 'sweetalert2';
import { User, UserData } from '../../model/team';
import { TeamService } from '../../service/team.service';

interface Role {
  role?: string
}


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [MessageService]
})
export class TeamComponent implements OnInit {

 //for activation part
//  checked1: boolean = false;
checked2: boolean = true;

//variable for fetching data
user1:UserData[] = [];

user!: User;

submitted?:boolean;

userDialogue?:boolean;
userEditDialogue?:boolean;

selectedUser!:boolean;

roles!:any[];

selectedRole!:string;

loader:boolean=true;


constructor(private obj:TeamService,private messageService: MessageService, private primengConfig:PrimeNGConfig) {

 
}



ngOnInit(): void {

  //fetching data from service method and display all data here...

  this.obj.getUserData().subscribe((result:any)=>{
   if (result) 
   {
     this.hideloader();
   }
   this.user1 = result['content'];
  })
  this.primengConfig.ripple = true;
}
hideloader() {
 this.loader=false;
}

//to open dialog box
addUser(){
  this.user={};
  this.submitted=false;
  this.userDialogue=true;
}
//to hide dialog box
hideDialog(){
  this.userDialogue=false;
  this.submitted=false;
}



saveUser(){  
 this.submitted=true;
  if(this.user.name?.trim())
  {
     if(this.user.memberid)
     {
       //swal fire code starts here
       this.hideDialog();
       Swal.fire({
         title: 'Do you want to save the changes?',
         showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: 'Save',
         denyButtonText: `Don't save`,
       }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
           if (result.isConfirmed) 
           {
               Swal.fire('Saved!', '', 'success')
               //Logic for Update
               this.obj.updateUser(this.user.memberid,this.user).subscribe((result)=>{
                   window.location.reload();
               })          
           }
           else if (result.isDenied) 
           {
             Swal.fire('Changes are not saved', '', 'info')
           }
       })
     }
     else 
     {
    
      this.obj.postUser(this.user).subscribe((result)=>{
       this.messageService.add({severity:'success', summary:'Success', detail:'Client Created Successfully'});
           window.location.reload();
      })
      this.userDialogue = false;
     }
   }   
 }



//Edit client information
  editUser(user:User){
  this.user={...user};
  // this.submitted=false;
  this.userDialogue=true;
  console.log(user);
  
}

}
