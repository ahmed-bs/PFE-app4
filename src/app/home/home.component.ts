import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ethers } from 'ethers';
import { __await, __values } from 'tslib';

import { QrCodeReader } from './../qr-code-reader.service';
declare let window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy ,OnInit {
  @ViewChild('fileinput', { static: false })
  private _fileinput: ElementRef | undefined;
  subscription!: Subscription;

  constructor(private qrReader: QrCodeReader,private route:Router) { }
  ngOnInit(): void {
  //  this.appIsOnline = false ;
   // this.requestAccount()
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
str !: string;
  onFileChange(event:any) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file)
      .subscribe(
        decodedString => {
         // window.open(decodedString, '_system', 'location=yes');
         // window.location.href = decodedString;
        });
        console.log(this.qrReader.decode(file).subscribe(
          decodedString => {
            this.scanResult =decodedString
           // window.open(decodedString, '_system', 'location=yes');
           // window.location.href = decodedString;
          }))

  }


  
//************************************************************************************* */


  //************************************************************************************* */
  scannerEnabled: boolean = false ;
  public scanFailureHandler($event: any) {
   
    this.failedToReadQRCode = $event;
   // window.location.href = this.scanResult;// navigate to other page
  }
public scanSuccessHandler($event: any) {
  this.scannerEnabled = false;
  this.scanResult = $event;
 
}
/********************************************* */
scanResult: string = '';
appIsOnline: boolean | undefined;
failedToReadQRCode = false;

// async requestAccount() {
//   await isMetaMaskConnected().then((connected) => {
//     if (connected) {
//         // metamask is connected
//     } else {
//         // metamask is not connected
//     } }
    
//   if (typeof window.ethereum === 'undefined') {
//     this.appIsOnline = false ;
//   }
//   if (typeof window.ethereum !== 'undefined') {
//     this.appIsOnline = true ;
//   }

// }



//this to make an element clickkable
captureImage() {
  this._fileinput?.nativeElement.click();
}


//this to start the camera 
startScan(){
  if (this.scannerEnabled == false){
    this.scannerEnabled=true;
  }

}
stopScan(){
  if (this.scannerEnabled == true) {
    this.scannerEnabled=false;
  }

}

reset(){
location.reload()

}

//this is to test the qr code if it is an url
readQRCodeIsURL(qrCodeValue: string): boolean {
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
  return regex.test(qrCodeValue);
}





//this is to redirect u to the link
openQrCodeLink() {
  window.open(this.scanResult, '_system', 'location=yes');
}


//this is to share the url resulted from the scan of the qr code
sharePropertyUsingTheWebShareApi() {
  const navigator = window.navigator as any;

  if (navigator.share) {
    let shareOptions: any = undefined;
    if (this.readQRCodeIsURL(this.scanResult)) {
      const removedURLProtocol = this.scanResult.replace(/(^\w+:|^)\/\//, '');
      shareOptions = {
        url: this.scanResult,
        text: 'Check out ' + removedURLProtocol,
        title: removedURLProtocol
      };
    } else {
      if (this.scanResult?.trim()?.length) {
        shareOptions = { title: this.scanResult, text: this.scanResult };
      }
    }

    if (!shareOptions) { return; }
    navigator.share(shareOptions)
      .then(() => {
        console.log('Thanks for sharing!');
      })
      .catch((err: { message: any; }) => {
        console.log(`Couldn't share because of`, err.message);
      });
  } else {
    console.log('web share not supported');
  }
}


















}
