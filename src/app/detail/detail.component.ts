import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { Observable } from 'rxjs';
import { AgrsOperation } from '../Models/agrsOperation';
import { OperationTank } from '../Models/operationTank';
import { MatDialog } from '@angular/material/dialog';
import { __await, __values } from 'tslib';
import { Operation } from '../Models/operation';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
declare let require: any;
declare let window: any;
let RetraitCentreAdress = require('/build/contracts/RetraitCol.json');
let RetraitFarmerAdresse = require('/build/contracts/RemplissageAgric.json');
let RemplissageUsineAdress = require('/build/contracts/RemplissageUsine.json');
let RemplissageCentreAdress = require('/build/contracts/RemplissageCol.json');
let TransferAdress = require('/build/contracts/Transformation.json');

type tankss = {
  code: any;
  idtank: any;
  qte: any;
};

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private rout: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) { }

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
      // console.log(
      //   '**************************0000000000000000000000000 /////////////////////////////'
      // );
      // console.log(this.OperationsT);
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
      // console.log(
      //   '**************************0000000000000000000000000 /////////////////////////////'
      // );
      // console.log(this.agrsOperations0T);
    }
  }
  //************************************************************************************** */

  /********************************remplissage centre********************************************************* */

  operationsRemplissageCol!: Observable<OperationTank[]>;
  reloadDataRemplissageCentre0() {
    const depKEY = Object.keys(RemplissageCentreAdress.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        RemplissageCentreAdress.networks[depKEY].address,
        RemplissageCentreAdress.abi,
        signer
      );
      this.operationsRemplissageCol = contract.getOperationTanks();
    }
    // console.log('**************************4471441714144');
    // console.log(this.operationsRemplissageCol);
  }
  /*************************************************************************************** */

  /********************************remplissage centre********************************************************* */

  operationsRemplissageCol1!: OperationTank[];
  async reloadDataRemplissageCentre01() {
    const depKEY = Object.keys(RemplissageCentreAdress.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        RemplissageCentreAdress.networks[depKEY].address,
        RemplissageCentreAdress.abi,
        signer
      );
      this.operationsRemplissageCol1 = await contract.getOperationTanks();
    }
    // console.log('**************************4471441714144');
    // console.log(this.operationsRemplissageCol1);
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
      // console.log(
      //   '**************************0000000000000000000000000 /////////////////////////////'
      // );
      // console.log(this.OpTankRemplissageUsineTabs);
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
      // console.log(
      //   '**************************0000000000000000000000000 /////////////////////////////'
      // );
      // console.log(this.agrsOperations0U);
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
      // console.log(
      //   '**************************0000000000000000000000000 /////////////////////////////'
      // );
      // console.log(this.AllOperationsFarmerTab);
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
      // console.log(
      //   '**************************0000000000000000000000000 /////////////////////////////'
      // );
      // console.log(this.AllOperationsFarmerTab);
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
      // console.log(signer);
      const contract = new ethers.Contract(
        RetraitCentreAdress.networks[depKEY].address,
        RetraitCentreAdress.abi,
        signer
      );
      this.operationss = contract.getOperationTanks();
    }
    // console.log('**************************4471441714144');
    // console.log(this.operationss);
  }
  jj!: number;

  OpTankRetraitCentreTab01!: OperationTank[];
  async reloadDataRetraitCentre01() {
    const depKEY = Object.keys(RetraitCentreAdress.networks)[0];
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // console.log(signer);
      const contract = new ethers.Contract(
        RetraitCentreAdress.networks[depKEY].address,
        RetraitCentreAdress.abi,
        signer
      );
      this.OpTankRetraitCentreTab01 = await contract.getOperationTanks();

      this.jj = this.OpTankRetraitCentreTab01.length;
    }
    // console.log('**************************4471441714144');
    // console.log(this.OpTankRetraitCentreTab01);
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
      this.codeTransfer0 = parseInt(codeTransfer0);
      const contract = new ethers.Contract(
        TransferAdress.networks[depKEY].address,
        TransferAdress.abi,
        signer
      );
      this.operationsTransferResult = await contract.getOperationusinebycode(
        this.codeTransfer0
      );
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
      this.OperationTankRetraitResultCode =
        await contract.getOperationFromAgrsbycode(this.codeRetraitCentre);
    }
  }

  //from retrait centre to remplissage centre + retrait farmer

  OperationFarmerResultsTab: AgrsOperation[] = [];
  operationsRemplissageColResultsTab: OperationTank[] = [];
  operationsRemplissageColResultsTab2: OperationTank[] = [];
  async Compare_FarmerOP_RetraitCentreOPT(codeRetraitCentre: any) {
    await this.ReturnRetraitCentreOPT(codeRetraitCentre);
    var ss = 0;
    var dd = 0;
    var kk = 0;
    for (let i = 0; i < this.OperationTankRetraitResultCode.operation.codeRemplissage.length; i++) {
      for (let f = 0; f < this.AllOperationsFarmerTab.length; f++) {
        if (Number(this.OperationTankRetraitResultCode.operation.codeRemplissage[i]) == Number(this.AllOperationsFarmerTab[f].code)) 
          {
          if (this.OperationFarmerResultsTab[0] == null) {
            this.OperationFarmerResultsTab[0] = this.AllOperationsFarmerTab[f]
          }
          if (!this.OperationFarmerResultsTab.some(food => food === this.AllOperationsFarmerTab[f])
          ) {
            this.OperationFarmerResultsTab.push(this.AllOperationsFarmerTab[f]);
          }
        }
      }
      for (let r = 0; r < this.operationsRemplissageCol1.length; r++) {
        if (
          Number(this.OperationTankRetraitResultCode.operation.codeRemplissage[i]) == Number(this.operationsRemplissageCol1[r].operation.code)
        ) {

          if (this.operationsRemplissageColResultsTab[0] == null) {
            this.operationsRemplissageColResultsTab[0] = this.operationsRemplissageCol1[r]
          }

          if (!this.operationsRemplissageColResultsTab.some(food => food === this.operationsRemplissageCol1[r])
          ) {
            this.operationsRemplissageColResultsTab.push(this.operationsRemplissageCol1[r]);
            dd++;
          }
        }
      }

    }
    if(this.Tab_Centre_Remplissage_Tank[0] == null){
      this.Tab_Centre_Remplissage_Tank[0] = this.operationsRemplissageColResultsTab[0];
    }
    for (let i = 0; i < this.operationsRemplissageColResultsTab.length; i++) {
      if (
        i != 0 &&
        Number(this.operationsRemplissageColResultsTab[i].operation.code) !=
        Number(this.operationsRemplissageColResultsTab[i - 1].operation.code)
      ) {
        this.Tab_Centre_Remplissage_Tank[kk] = this.operationsRemplissageColResultsTab[i - 1];
        kk++;
        this.Tab_Centre_Remplissage_Tank[kk] = this.operationsRemplissageColResultsTab[i];
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
    // console.log(this.operationsTransferResult.codeRemplissage.length);
    for (
      let i = 0;
      i < this.operationsTransferResult.codeRemplissage.length;
      i++
    ) {
      for (let j = 0; j < this.OpTankRemplissageUsineTabs.length; j++) {
        if (
          Number(this.operationsTransferResult.codeRemplissage[i]) ==
          Number(this.OpTankRemplissageUsineTabs[j].operation.code)
        ) {
          this.tankOpUsineRemplissageResultsTab[tt] =
            this.OpTankRemplissageUsineTabs[j];
          tt++;
        }
      }

      for (let f = 0; f < this.OpTankRetraitCentreTab01.length; f++) {
        if (
          Number(this.operationsTransferResult.codeRemplissage[i]) == Number(this.OpTankRetraitCentreTab01[f].operation.code)
        ) {
          this.tankOperationTranferResultsTab[ss] = this.OpTankRetraitCentreTab01[f];
          this.Compare_FarmerOP_RetraitCentreOPT(this.OpTankRetraitCentreTab01[f].operation.code);
          ss++;
        }
      }
    }
    var tt = 0;
    var jj = 0;



    if(this.Tab_Usine_Remplissage_Tank[0] == null){
      this.Tab_Usine_Remplissage_Tank[0] = this.tankOpUsineRemplissageResultsTab[0];
    }
    for (let i = 0; i < this.tankOpUsineRemplissageResultsTab.length; i++) {
      if (
        i != 0 &&
        Number(this.tankOpUsineRemplissageResultsTab[i].operation.code) !=
        Number(this.tankOpUsineRemplissageResultsTab[i - 1].operation.code)
      ) {
        this.Tab_Usine_Remplissage_Tank[tt] = this.tankOpUsineRemplissageResultsTab[i - 1];
        tt++;
        this.Tab_Usine_Remplissage_Tank[tt] = this.tankOpUsineRemplissageResultsTab[i];
      }
    }
    if(this.Tab_Centre_Retrait_Tank[0] == null){
      this.Tab_Centre_Retrait_Tank[0] = this.tankOperationTranferResultsTab[0];
    }

    for (let i = 0; i < this.tankOpUsineRemplissageResultsTab.length; i++) {
      if (
        i != 0 &&
        Number(this.tankOperationTranferResultsTab[i].operation.code) !=
        Number(this.tankOperationTranferResultsTab[i - 1].operation.code)
      ) {
        this.Tab_Centre_Retrait_Tank[jj] = this.tankOperationTranferResultsTab[i - 1];
        jj++;
        this.Tab_Centre_Retrait_Tank[jj] = this.tankOperationTranferResultsTab[i];
      }
    }
  }

  Tab_Usine_Remplissage_Tank: OperationTank[] = [];
  Tab_Centre_Retrait_Tank: OperationTank[] = [];
  Tab_Centre_Remplissage_Tank: OperationTank[] = [];

  //      Last_Tab() {
  //       var tt = 0;

  // for (let i = 0; i < this.tankOpUsineRemplissageResultsTab.length; i++) {
  //   if (i != 0  && Number(this.tankOpUsineRemplissageResultsTab[i].operation.code) == Number(this.tankOpUsineRemplissageResultsTab[i-1].operation.code)  ) {
  //     this.Tab_Usine_Remplissage_Tank[tt]=this.tankOpUsineRemplissageResultsTab[i-1]

  //    tt++
  //    this.Tab_Usine_Remplissage_Tank[tt]=this.tankOpUsineRemplissageResultsTab[i]
  //    console.log(this.Tab_Usine_Remplissage_Tank[tt])
  //   }

  // }

  //     }

  tabhj: tankss[] = [];

  //this to filter the repeated code

  Last_Tab() {



  }
















  compare_code(op1: OperationTank, op2: OperationTank) {
    if (Number(op1.operation.code) == Number(op2.operation.code)) {
      return true
    } else {
      return false
    }
  }

  theGivenCode!: number;

  ddd!: any;

  async requestAccount() {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
  }

  async ngOnInit(): Promise<void> {
    await this.requestAccount();
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
    this.theGivenCode = this.rout.snapshot.params['id'];
    this.Compare_TransferOP_RetraitCentreOPT(this.theGivenCode);
    // console.log(this.rout.snapshot.params['id']);
    // console.log(this.rout.snapshot.paramMap.get('id'));
  }
  imageSrc = '../../assets/book-img.svg';
  imageSrcfarmer = '../../assets/Farming 01.jpg';
  imageSrcentre = '../../assets/Milk 05.jpg';
  imageSrcentre2 = '../../assets/Milk 02.jpg';
  title = 'PFE-FrontEnd';
}
