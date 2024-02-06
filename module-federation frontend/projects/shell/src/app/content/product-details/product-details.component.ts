import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { of } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ContentService } from '../content.service';
import { PurchaseModalComponent } from '../purchase-modal/purchase-modal.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  images: any[]=[];
  currentImage: any;
  product: any;

  constructor(private service: ContentService, private dialog: MatDialog,public authService:AuthService){
    //uvesti slike sa backa
    // this.images.push("assets/images/iphone.jpg");
    // this.images.push("assets/images/iphone2.jpg")
    this.getProductDetails();
    //console.log(this.currentImage.path);
  }

  prevImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    const prevIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.currentImage = this.images[prevIndex];
  }

  nextImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    const nextIndex = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1;
    this.currentImage = this.images[nextIndex];
  }

  getProductDetails(){
    this.service.getProductDetails().subscribe((data: any) => {
    this.product=data;
    this.images = this.product.images;
    this.currentImage=this.images[0];
    
  });
  }

  purchaseModal(){
    const dialogRef = this.dialog.open(PurchaseModalComponent,{
      width:'400px'
    });

    dialogRef.afterClosed().subscribe((option)=>{
      if(option){
        //console.log(option);
        this.service.purchaseProduct(option).subscribe((data:any)=> {

        });
        //put zahtjev na produkat da je otkupljen
        //navigacija
      }
    });

  }

  getTheme(){
    return this.service.currentTheme$;
  }
}

