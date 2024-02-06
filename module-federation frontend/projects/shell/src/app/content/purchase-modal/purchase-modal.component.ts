import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AllproductsComponent } from '../allproducts/allproducts.component';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.css']
})
export class PurchaseModalComponent {

  public option:string ='';

  constructor(
    public dialogRef: MatDialogRef<PurchaseModalComponent>,
    private router:Router
  ){}

  onSave(): void {
    this.dialogRef.close(this.option);
    this.router.navigateByUrl("");
  }

  onCancel(): void{
    this.dialogRef.close(null);
  }
}
