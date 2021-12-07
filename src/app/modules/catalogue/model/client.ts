// export interface Client{
//     id?:string;
//     companyName?:string;
//     pan?:string;
//     groupCompany?:string;
//     precisionId?:string;
//     approver?:string;
//   }

  export interface Client{
    id?:number;
    companyName?:string;
    pan?:string;
    tan?:string;
    groupCompany?:string;
    precisionId?:string;
    approver?:string;
    status?:boolean;
  }



  export interface ClientData{
    companyName?:string;
    pan?:string;
    tan?:string;
    groupCompany?:string;
    precisionId?:string;
    approver?:string;
    status?:boolean;
    id?:number;
    createdAt?:Date;
    updatedAt?:Date;
  }
  	