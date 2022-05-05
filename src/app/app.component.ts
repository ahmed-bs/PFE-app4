import { Component, OnInit, ViewChild } from '@angular/core';
import { ethers } from 'ethers';
import { async, Observable, of } from 'rxjs';
import { AgrsOperation } from './Models/agrsOperation';
import { OperationTank } from './Models/operationTank';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { __await, __values } from 'tslib';
import { Operation } from './Models/operation';
import {ActivatedRoute} from '@angular/router';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { query } from '@angular/animations';
declare let require: any;
declare let window: any;
let RetraitCentreAdress = require('../../build/contracts/RetraitCol.json');
let RetraitFarmerAdresse = require('../../build/contracts/RemplissageAgric.json');
let RemplissageUsineAdress = require('../../build/contracts/RemplissageUsine.json');
let RemplissageCentreAdress = require('../../build/contracts/RemplissageCol.json');
let TransferAdress = require('../../build/contracts/Transformation.json');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!: MatSort;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['idOperation', 'poidsLait', 'dateOperation'];

  constructor(private dialog: MatDialog,private rout :ActivatedRoute,private http:HttpClient
   ) {
    
   }

  reloadData() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort =this.matSort;
  }



//**************************trandfer usine ************************************************* */
OperationsT!: OperationTank[];
async reloadDataTranfer0() {
  const depKEY = Object.keys(TransferAdress.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      TransferAdress.networks[depKEY].address,
      TransferAdress.abi,
      signer
    );
    this.OperationsT = await contract.getOperationTanks();
    console.log(
      '**************************0000000000000000000000000 /////////////////////////////'
    );
    console.log(this.OperationsT);
  }
}
//**************************transfer usine ************************************************* */
agrsOperations0T!: Observable<OperationTank[]>;
reloadDataTranfer01() {
  const depKEY = Object.keys(TransferAdress.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      TransferAdress.networks[depKEY].address,
      TransferAdress.abi,
      signer
    );
    this.agrsOperations0T = contract.getOperationTanks();
    console.log(
      '**************************0000000000000000000000000 /////////////////////////////'
    );
    console.log(this.agrsOperations0T);
  }
}
//************************************************************************************** */



































































/********************************remplissage centre********************************************************* */

  operationsRemplissageCol!: Observable<OperationTank[]>;
  reloadDataRemplissageCentre0() {  
    const depKEY=Object.keys(RemplissageCentreAdress.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
   const provider = new ethers.providers.Web3Provider(window.ethereum);
   const signer = provider.getSigner()
   const contract = new ethers.Contract(RemplissageCentreAdress.networks[depKEY].address, RemplissageCentreAdress.abi, signer)
   this.operationsRemplissageCol = contract.getOperationTanks();}
   console.log('**************************4471441714144');
   console.log(this.operationsRemplissageCol);
  }
/*************************************************************************************** */

/********************************remplissage centre********************************************************* */

operationsRemplissageCol1!: OperationTank[];
async reloadDataRemplissageCentre01() {  
  const depKEY=Object.keys(RemplissageCentreAdress.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
 const provider = new ethers.providers.Web3Provider(window.ethereum);
 const signer = provider.getSigner();
 const contract = new ethers.Contract(RemplissageCentreAdress.networks[depKEY].address, RemplissageCentreAdress.abi, signer);
  this.operationsRemplissageCol1 = await contract.getOperationTanks();
}
 console.log('**************************4471441714144');
 console.log(this.operationsRemplissageCol1);
}
/*************************************************************************************** */


























//**************************remplissage usine ************************************************* */
  OpTankRemplissageUsineTabs!: OperationTank[];
  async reloadDataUinseRemplissage01() {
    const depKEY = Object.keys(RemplissageUsineAdress.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        RemplissageUsineAdress.networks[depKEY].address,
        RemplissageUsineAdress.abi,
        signer
      );
      this.OpTankRemplissageUsineTabs = await contract.getOperationTanksUsine();
      console.log(
        '**************************0000000000000000000000000 /////////////////////////////'
      );
      console.log(this.OpTankRemplissageUsineTabs);
    }
  }
//**************************remplissage usine ************************************************* */
  agrsOperations0U!: Observable<OperationTank[]>;
  reloadDataUinseRemplissage00() {
    const depKEY = Object.keys(RemplissageUsineAdress.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        RemplissageUsineAdress.networks[depKEY].address,
        RemplissageUsineAdress.abi,
        signer
      );
      this.agrsOperations0U = contract.getOperationTanksUsine();
      console.log(
        '**************************0000000000000000000000000 /////////////////////////////'
      );
      console.log(this.agrsOperations0U);
    }
  }
//************************************************************************************** */


















//*********************************retrait  agrics***************************************************** */

AllOperationsFarmerTab!: AgrsOperation[];
async reloadDataFarmerRetrait01() {
  const depKEY = Object.keys(RetraitFarmerAdresse.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      RetraitFarmerAdresse.networks[depKEY].address,
      RetraitFarmerAdresse.abi,
      signer
    );
    this.AllOperationsFarmerTab = await contract.getOperations();
    console.log(
      '**************************0000000000000000000000000 /////////////////////////////'
    );
    console.log(this.AllOperationsFarmerTab);
  }
}
agrsOperations0!: Observable<AgrsOperation[]>;
reloadDataFarmerRetrait00() {
  const depKEY = Object.keys(RetraitFarmerAdresse.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      RetraitFarmerAdresse.networks[depKEY].address,
      RetraitFarmerAdresse.abi,
      signer
    );
    this.agrsOperations0 = contract.getOperations();
    console.log(
      '**************************0000000000000000000000000 /////////////////////////////'
    );
    console.log(this.AllOperationsFarmerTab);
  }
}
//************************************************************************************** */























/***************************************retrait centre******************************************* */



operationss!: Observable<OperationTank[]>;
reloadDataRetraitCentre00() {
  const depKEY = Object.keys(RetraitCentreAdress.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(
      RetraitCentreAdress.networks[depKEY].address,
      RetraitCentreAdress.abi,
      signer
    );
    this.operationss = contract.getOperationTanks();
  }
  console.log('**************************4471441714144');
  console.log(this.operationss);
}
jj!: number;

OpTankRetraitCentreTab01!: OperationTank[];
async reloadDataRetraitCentre01() {
  const depKEY = Object.keys(RetraitCentreAdress.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(
      RetraitCentreAdress.networks[depKEY].address,
      RetraitCentreAdress.abi,
      signer
    );
    this.OpTankRetraitCentreTab01 = await contract.getOperationTanks();

    this.jj = this.OpTankRetraitCentreTab01.length;
  }
  console.log('**************************4471441714144');
  console.log(this.OpTankRetraitCentreTab01);
}

/**************************************************************************** */
















































//from agriculteuurs find one agriculteur

codeFarmer!: number;
operationsFarmer!: Operation;

// async fromAgriculteurGetOneOp(codeFarmer: any) {
//   const depKEY = Object.keys(RetraitCentreAdress.networks)[0];
//   if (typeof window.ethereum !== 'undefined') {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     this.codeFarmer = parseInt(codeFarmer);
//     const contract = new ethers.Contract(
//       RetraitCentreAdress.networks[depKEY].address,
//       RetraitCentreAdress.abi,
//       signer
//     );
//     this.operationsFarmer = await contract.GetOperationFarmerByCode(this.codeFarmer);
//   }
// }



//this to find operationTank from usine  USING A CODE de transfer

codeTransfer0!: number;
operationsTransferResult!: Operation;

async FindByCodeTransfer(codeTransfer0: any) {
  const depKEY = Object.keys(TransferAdress.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.codeTransfer0 =parseInt(codeTransfer0) ;
    const contract = new ethers.Contract(
      TransferAdress.networks[depKEY].address,
      TransferAdress.abi,
      signer
    );
    this.operationsTransferResult = await contract.getOperationusinebycode(this.codeTransfer0);
  }
}

//this to find operationTank from retrait list de centre USING A CODE 


codeRetraitCentre!: number;
OperationTankRetraitResultCode!: OperationTank;

async ReturnRetraitCentreOPT(codeRetraitCentre: any) {
  const depKEY = Object.keys(RetraitCentreAdress.networks)[0];
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.codeRetraitCentre = parseInt(codeRetraitCentre);
    const contract = new ethers.Contract(
      RetraitCentreAdress.networks[depKEY].address,
      RetraitCentreAdress.abi,
      signer
    );
    this.OperationTankRetraitResultCode = await contract.getOperationFromAgrsbycode(
      this.codeRetraitCentre
    );
  }

}





//from retrait centre to remplissage centre + retrait farmer


  
OperationFarmerResultsTab!: AgrsOperation[];
operationsRemplissageColResultsTab!: OperationTank[];


async Compare_FarmerOP_RetraitCentreOPT(codeRetraitCentre: any) {
 await this.ReturnRetraitCentreOPT(codeRetraitCentre);
  this.OperationFarmerResultsTab = [];
  this.operationsRemplissageColResultsTab = [];
  var ss = 0;
  var dd = 0;
  for (let i = 0; i < this.OperationTankRetraitResultCode.operation.codeRemplissage.length; i++) {
    for (let f = 0; f < this.AllOperationsFarmerTab.length; f++) {
      if (Number(this.OperationTankRetraitResultCode.operation.codeRemplissage[i]) == Number(this.AllOperationsFarmerTab[f].code)) {
        this.OperationFarmerResultsTab[ss] = this.AllOperationsFarmerTab[f];
        ss++;
      }
    }
    for (let r = 0; r < this.operationsRemplissageCol1.length; r++) {
      if (Number(this.OperationTankRetraitResultCode.operation.codeRemplissage[i]) == Number(this.operationsRemplissageCol1[r].operation.code)) {
        this.operationsRemplissageColResultsTab[dd] = this.operationsRemplissageCol1[r];
        dd++;
      }
    }
  }
}




//from Transfer usine to remplissage usine + retrait centre


tankOperationTranferResultsTab!: OperationTank[];
tankOpUsineRemplissageResultsTab!: OperationTank[];

async Compare_TransferOP_RetraitCentreOPT(codeTransfer0: any) {
 await this.FindByCodeTransfer(codeTransfer0);
  this.tankOperationTranferResultsTab = [];
  this.tankOpUsineRemplissageResultsTab = [];
  var ss = 0;
  var tt = 0;
  console.log(this.operationsTransferResult.codeRemplissage.length);
  for (let i = 0; i < this.operationsTransferResult.codeRemplissage.length; i++) {
    for (let j = 0; j < this.OpTankRemplissageUsineTabs.length; j++) {
      if (Number(this.operationsTransferResult.codeRemplissage[i]) == Number(this.OpTankRemplissageUsineTabs[j].operation.code)) {
        this.tankOpUsineRemplissageResultsTab[tt] = this.OpTankRemplissageUsineTabs[j];
        tt++;
      }
    }
    for (let f = 0; f < this.OpTankRetraitCentreTab01.length; f++) {
      if (Number(this.operationsTransferResult.codeRemplissage[i]) == Number(this.OpTankRetraitCentreTab01[f].operation.code)) {
        this.tankOperationTranferResultsTab[ss] = this.OpTankRetraitCentreTab01[f];
         this.Compare_FarmerOP_RetraitCentreOPT(this.OpTankRetraitCentreTab01[f].operation.code);
        ss++;
      }
    }
  
  }
}


































ddd !: any ;



  ngOnInit(): void {
    //centre -
    this.reloadDataRetraitCentre01();
    this.reloadDataRetraitCentre00();
    //centre + 
    this.reloadDataRemplissageCentre0();
    this.reloadDataRemplissageCentre01();
    //agrics
    this.reloadDataFarmerRetrait01();
    this.reloadDataFarmerRetrait00();
    //usine
    this.reloadDataUinseRemplissage01();
    this.reloadDataUinseRemplissage00();
    //transfer
    this.reloadDataTranfer01();
    this.reloadDataTranfer0();
    //
    this.reloadData();

    // let queryParams = new HttpParams();
    // queryParams = queryParams.append("",11); //VERY IMPORTANT
 
    // this.ddd= this.http.get<any>(this.url,{params:queryParams}).pipe(res => {
    //   console.log(res)
    //   return res;
    //   }).subscribe(ss=>{
    //     console.log(ss)
    //     return ss;
    //   })
    
    //   console.log(this.ddd)


  }
  imageSrc = '../assets/book-img.svg'
  imageSrcfarmer = '../assets/Farming 01.jpg'
  imageSrcentre = '../assets/Milk 05.jpg'
  imageSrcentre2 = '../assets/Milk 02.jpg'
  title = 'PFE-FrontEnd';
  



  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }
}
