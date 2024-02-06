import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.css']
})
export class CommentModalComponent {

  public reply: string = '';

  constructor(
    public dialogRef: MatDialogRef<CommentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  onSave(): void {
    this.dialogRef.close(this.reply);
  }

  onCancel(): void{
    this.dialogRef.close(null);
  }
}
