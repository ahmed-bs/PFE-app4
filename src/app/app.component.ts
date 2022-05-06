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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
