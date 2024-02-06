import { A11yModule } from '@angular/cdk/a11y';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import { ContentService } from '../content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  profileData:any;
  activeTab:number = 0;
  userProducts: any[]=[];
  purchasedProducts: any[]=[];

 

  constructor(public service:ContentService, private authService: AuthService){
  }
  ngOnInit(): void {
    this.getProfileData();
    // this.getAllUserOffers();
    // this.getPurachesProductsOfUser();
  }

  // getAllUserOffers(){
  //   this.service.getAllUserOffers(this.authService.username).subscribe((data:any)=>{
  //     this.userProducts=data;
  //     //console.log(this.userProducts);
  //   });
  // }

  getProfileData(){
    this.service.getProfileData(this.authService.username).subscribe((data:any)=>{
        this.profileData=data;
        //console.log("ef")
    });
  }

  getTheme(){
    return this.service.currentTheme$;
  }

  // getPurachesProductsOfUser(){
  //   this.service.getPurchasedProductsOfUser().subscribe((data:any)=>{
  //     this.purchasedProducts = data;
  //   })
  // }
}
