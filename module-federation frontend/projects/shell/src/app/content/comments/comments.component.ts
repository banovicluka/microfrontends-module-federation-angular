import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { AuthService } from '../../auth/auth.service';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { ContentService } from '../content.service';
import { QuestionModalComponent } from '../question-modal/question-modal.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments: any[] = []
  userId!: number;
  checked!: boolean;
  productId!: number;


  constructor(private dialog:MatDialog,private service: ContentService, private authService: AuthService){
    this.getAllComments();
    
  }

  isChecked(){
    return this.checked;
  }

  isUserLoggedIn(){
    return this.authService.isLoggedIn();
  }

  getAllComments(){
    this.service.getCommentsOfProduct().subscribe((data:any) =>{
      this.comments=data;
      // if(this.comments){
      //   this.productId = this.comments[0]?.productId;
      // }else{
      //   this.productId = 0;
      // }
      this.checkUser();
    });
  }

  checkUser(){
    let bool = false;
    this.service.getProductDetails().subscribe((data:any)=>{
      console.log(this.authService.userId + " wdasd" + data?.userId);
      bool = this.authService.userId==data?.userId;
      this.checked = bool;
    });

  
  }

  openReplyModal(commentId: number): void{
    const dialogRef = this.dialog.open(CommentModalComponent,{
      width:'400px',
      data: {commentId}
    });

    dialogRef.afterClosed().subscribe( reply => {
      if(reply){
        //dodati odgovor na odg komentar
        const comment = this.comments.find(c => c.id === commentId);
        if(comment){
          comment.answer = reply;
          this.service.addAnswerOnComment(comment, commentId).subscribe((response:any) =>{
            console.log("Uspjesno azuriranje.")
          },
          (error) => {
            console.log(error);
          });
        }
      }
    });
  }

  openQuestionModal(){
    this.service.getUserIdByUsername(this.authService.username).subscribe((data:any)=>{
      this.userId=data;
    });
    const dialogRef = this.dialog.open(QuestionModalComponent,{
      width:'400px'
    });

    dialogRef.afterClosed().subscribe( question =>{
      if(question){
        const body = {
          question: question,
          answer: null,
          productId: this.service.currentProductId,
          userId: this.userId
        }
        console.log(body);
        this.service.makeAComment(body).subscribe((data:any) =>{
          this.comments.push(data);
        });
        //this.getAllComments();
      }
    })
  }

  getTheme(){
    return this.service.currentTheme$;
  }
}
