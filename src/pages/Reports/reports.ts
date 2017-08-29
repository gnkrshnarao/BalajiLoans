import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BJdbService } from '../../app/services/db.service';

@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
items:any;
totalAmt:number;
  constructor(public navCtrl: NavController, private bJdbService:BJdbService) {
    this.bJdbService=bJdbService;
    this.navCtrl=navCtrl;
  }

  ngOnInit(){
      console.log("reportingtspage");
      this.getCall();
  }
  getCall(){
    this.bJdbService.getCall().subscribe(response => {this.items = response; this.totalAmt =this.sum(this.items);
    });
    
    }
  sum( obj ) {
      var sum = 0;
      var i =0;
      for( var Amount in obj ) {
        if( obj.hasOwnProperty( Amount ) ) {
          console.log(obj[i].Amount);
          sum += parseFloat( obj[i].Amount );
          i++;
        }
      }
      //this.totalAmt=sum;
      return sum;
    }
    

}
