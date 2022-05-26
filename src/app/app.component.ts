import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { __await, __values } from 'tslib';
import { QrCodeReader } from './qr-code-reader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';

  subscription!: Subscription;

  constructor(private qrReader: QrCodeReader,private route:Router) { }

  go(link : string){
		this.route.navigate([link]); // navigate to other page
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
          window.location.href = decodedString;
        });
       
       
  }

}
