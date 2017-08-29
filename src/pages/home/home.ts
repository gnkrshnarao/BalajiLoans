import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { RequestOptions  } from '@angular/http';
import { BJdbService } from '../../app/services/db.service';
import { DetailsPage } from '../details/details';
//import {Http, Response} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Component({
  selector: 'Search',
 // template: `<button (click)="Search(SearchKey.value)">Search</button>`
  template: '<ion-searchbar [(ngModel)]="SearchKey" [showCancelButton]="shouldShowCancel" placeholder="Name / Mobile / City" size="35" (ionInput)="Search(SearchKey.value)"></ion-searchbar>'
})

export class HomePage 
{
  items: any;
  constructor( public navCtrl: NavController,private bjdbservice: BJdbService) {
   
    this.bjdbservice = bjdbservice;
    this.navCtrl = navCtrl;
  }
   
  ngOnInit(){
    this.getCall();
    //console.log(this.items);
  }
  
  getCall(){
    this.bjdbservice.getCall().subscribe(response => {this.items = response ;});
    }

  Search(Searchkey:any) 
    {
    
    //console.log(Searchkey);
    this.bjdbservice.postCall(Searchkey).subscribe(Response => {this.items=Response});
    }
  viewDetails(item:any)
  {
    //console.log(item);
    this.navCtrl.push(DetailsPage,{item:item});
  }
  addNew(){
    
  }
  detailByDate(Searchkey:any){

    var Yesterday = new Date();
    var Today = new Date();
    var Tomorrow = new Date();
    Today.setDate(Today.getDate());
    Tomorrow.setDate(Today.getDate()+1);
    Yesterday.setDate(Today.getDate()-1);
    //console.log(Today,Tomorrow,Yesterday);
    if (Searchkey==0)
      {  
        this.bjdbservice.postCall(Yesterday).subscribe(Response => {this.items=Response});
     }
    if (Searchkey==1){
      this.bjdbservice.postCall(Today).subscribe(Response => {this.items=Response});
     }
    if (Searchkey==2){
      this.bjdbservice.postCall(Tomorrow).subscribe(Response => {this.items=Response});
     }
  }

}
//url : 