import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Client, ClientData } from "../model/client";
import { ClientServiceService } from "../services/client-service.service";

@Component({
    selector : 'catalogue',
    templateUrl:'./catalogue.component.html',
    styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

    checked1: boolean = false;
  checked2: boolean = true;

  //variable for fetching data
  client1:ClientData[] = [];

  client!: Client;

  submitted?:boolean;
  clientDialogue?:boolean;
  clientEditDialogue?:boolean;

  selectedClients!:boolean;

  constructor(private cls:ClientServiceService,private formBuilder: FormBuilder) {}

  

  ngOnInit(): void {

    //fetching data from service method and display all data here...
    
    this.cls.getClientData().subscribe((result:any)=>{
      this.client1 = result['content'];
      console.log(this.client1);
      
    })
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
      if(this.client.id){
        this.cls.updateClient(this.client.id,this.client).subscribe((result)=>{
        window.location.reload();
      })  
    }
    else 
    {
        this.client.id = parseInt(this.createId());
        this.cls.postClient(this.client).subscribe((result)=>{
          window.location.reload();
        })
    }
    
    this.clientDialogue = false;
  }   
}


  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }


  findIndexById(id:number)
  {
    let index = -1;
    for (let i = 0; i < this.client1.length; i++) {
        if (this.client1[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
  }

  //Edit client information
    editClient(client:Client){
    this.client={...client};
    // this.submitted=false;
    this.clientDialogue=true;
    console.log(client);
    
  }
}