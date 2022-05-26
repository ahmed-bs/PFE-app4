import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { __await, __values } from 'tslib';
import { QrCodeReader } from './../qr-code-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  subscription!: Subscription;

  constructor(private qrReader: QrCodeReader,private route:Router) { }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
str !: string;
  onFileChange(event:any) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file)
      .subscribe(
        decodedString => {
          window.location.href = decodedString;
        });

  }
//************************************************************************************* */


  //************************************************************************************* */
  scannerEnabled: boolean = false ;


onClick(){
  if (this.scannerEnabled == true) {
    this.scannerEnabled=false;
  }else{
    this.scannerEnabled=true;
  }

}

public scanSuccessHandler($event: any) {
  this.scannerEnabled = false;
  this.information = $event;
  window.location.href = this.information;// navigate to other page
}
information: string = '';

}
