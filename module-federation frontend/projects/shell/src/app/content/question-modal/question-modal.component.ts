import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent {
  public  question: string = '';

  constructor(
    public dialogRef: MatDialogRef<QuestionModalComponent>,
  
  ){}

  onSave(): void {
    this.dialogRef.close(this.question);
  }

  onCancel(): void{
    this.dialogRef.close(null);
  }
}
