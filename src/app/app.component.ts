import { Component, OnInit, ViewChild } from '@angular/core';
import { ethers } from 'ethers';
import { async, Observable, of } from 'rxjs';
import { AgrsOperation } from './Models/agrsOperation';
import { OperationTank } from './Models/operationTank';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { __await } from 'tslib';
declare let require: any;
declare let window: any;
let Remplissage = require('../../build/contracts/RetraitCol.json');
let Remplissage2 = require('../../build/contracts/RemplissageAgric.json');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;

  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['idOperation','poidsLait', 'dateOperation','agriculteur','code', 'typeOp'];

  constructor( private dialog:MatDialog) { }



  ngOnInit(): void {
    this.reloadData00();
    this.reloadData002();
    this.reloadData00A();
    this.reloadData00B();
  }
   imageSrc = '../assets/book-img.svg'
  title = 'PFE-FrontEnd';



  agrsOperations!: AgrsOperation[];
  async reloadData00A() {
    const depKEY = Object.keys(Remplissage2.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        Remplissage2.networks[depKEY].address,
        Remplissage2.abi,
        signer
      );
      this.agrsOperations = await contract.getOperations();
      console.log(
        '**************************0000000000000000000000000 /////////////////////////////'
      );
      console.log(this.agrsOperations);
    }
  }
  agrsOperations0!: Observable<AgrsOperation[]>;
   reloadData00B() {
    const depKEY = Object.keys(Remplissage2.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        Remplissage2.networks[depKEY].address,
        Remplissage2.abi,
        signer
      );
      this.agrsOperations0 = contract.getOperations();
      console.log(
        '**************************0000000000000000000000000 /////////////////////////////'
      );
      console.log(this.agrsOperations);
    }
  }

  codeagrs!: number;
  operations0agrs!: OperationTank;
  async fincdbycodeagrs(codeagrs: any) {
    const depKEY = Object.keys(Remplissage.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      this.codeagrs = parseInt(codeagrs);
      const contract = new ethers.Contract(
        Remplissage.networks[depKEY].address,
        Remplissage.abi,
        signer
      );
      this.operations0agrs = await contract.getOperationFromAgrsbycode(
        this.codeagrs
      );
    }
    console.log(
      '**************************444444444/////////////////////////////'
    );
    console.log(this.operations0agrs);
    console.log(this.operations0agrs.tank.codeTank);
  }

  agrsOperations00A!: AgrsOperation[];
  compare() {
    this.agrsOperations00A = [];
    var ss=0;
    console.log(this.operations0agrs.tank.codeTank.length);
    for (let i = 0;i < this.operations0agrs.tank.codeTank.length;i++) {
      for (let f = 0; f < this.agrsOperations.length; f++) {

        if (Number(this.operations0agrs.tank.codeTank[i]) == Number(this.agrsOperations[f].code)) {
          console.log("***********sq**************qs********dqs**************************");
         // console.log(this.agrsOperations00A[ss]);
          console.log(this.agrsOperations[f]);
          this.agrsOperations00A[ss]=this.agrsOperations[f];
            ss++;
        }

      }
    }
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk0000000");
    console.log(this.agrsOperations00A);
  }

  operations!: OperationTank[];
  operationss!: Observable<OperationTank[]>;
  reloadData002() {
    const depKEY = Object.keys(Remplissage.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contract = new ethers.Contract(
        Remplissage.networks[depKEY].address,
        Remplissage.abi,
        signer
      );
      this.operationss = contract.getOperationTanks();
    }
    console.log('**************************4471441714144');
    console.log(this.operationss);
  }
  jj!: number;

  async reloadData00() {
    const depKEY = Object.keys(Remplissage.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contract = new ethers.Contract(
        Remplissage.networks[depKEY].address,
        Remplissage.abi,
        signer
      );
      this.operations = await contract.getOperationTanks();

      this.jj = this.operations.length;
    }
    console.log('**************************4471441714144');
    console.log(this.operations);
  }

  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }
}
