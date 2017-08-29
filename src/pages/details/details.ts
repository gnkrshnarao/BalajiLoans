import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
    item:any;
  constructor(public navCtrl: NavController, public params:NavParams,private sanitizer:DomSanitizer) {
    this.item = params.get('item');
    this.sanitizer=sanitizer;
  }

  sanitize(surl:string){
    return this.sanitizer.bypassSecurityTrustUrl(surl);
  }

}
