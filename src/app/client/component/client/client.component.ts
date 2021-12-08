import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Client, ClientData } from '../../model/client';
import { ClientService } from '../../service/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers:[MessageService]
})
export class ClientComponent implements OnInit {
  client1:ClientData[]=[];
 
  client!: Client;

  //for activation part
  checked1: boolean=true;
  loader:boolean=true;
  

  submitted?:boolean;
  clientDialogue?:boolean;
  clientEditDialogue?:boolean;

  selectedClients!:boolean;

  constructor(private cls:ClientService, private primengConfig : PrimeNGConfig,private messageService: MessageService) {}

  

  ngOnInit(): void {

    //fetching data from service method and display all data here...

    this.cls.getClientData().subscribe((result:any)=>{
     if (result) 
     {
       this.hideloader();
     }
      this.client1=result['content'];
    })

    this.primengConfig.ripple = true;
  }
  
  hideloader() {
   this.loader=false;
 }

  //to open dialog box
  addClient(){
    this.client={};
    this.submitted=false;
    this.clientDialogue=true;
  }

  //to hide dialog box
  hideDialog(){
    this.clientDialogue=false;
    this.submitted=false;
  }




  //save client information
  saveClient(){
    this.submitted=true;
    
      if(this.client.companyName?.trim()){
       if(this.client.id)
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
             this.cls.updateClient(this.client.id,this.client).subscribe((result)=>{
             window.location.reload();
           })          
         }else if (result.isDenied) {
           Swal.fire('Changes are not saved', '', 'info')
         }
       })
     }
      else 
      {

   //code for Saving New Client
       this.client.status = true;
         
       //this.client1.push(this.client);
       this.cls.postClient(this.client).subscribe((result)=>{
           window.location.reload();
           this.messageService.add({severity:'success', summary:'Success', detail:'Client Created Successfully'});
         })
         this.clientDialogue = false;
     }
   }
 }
   



 //  createId(): string {
 //    let id = '';
 //    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 //    for ( var i = 0; i < 5; i++ ) {
 //        id += chars.charAt(Math.floor(Math.random() * chars.length));
 //    }
 //    return id;
 //  }


 //  findIndexById(id:string)
 //  {
 //    let index = -1;
 //    for (let i = 0; i < this.client1.length; i++) {
 //        if (this.client1[i].id === id) {
 //            index = i;
 //            break;
 //        }
 //    }
 //    return index;
 //  }

  //Edit client information

    editClient(client:Client)
    {
     this.client={...client};
     // this.submitted=false;
     this.clientDialogue=true;
     console.log(client);
    }

  //method for changing the status of client
  changeStatus(client:Client)
  {

   this.client={...client};
     client.status=false;
     if(this.client.companyName)
     {        
       this.cls.updateClient(this.client.id,this.client).subscribe((result)=>{
         window.location.reload();
         console.log("status"+result);

         }) 
     }
 }
}
