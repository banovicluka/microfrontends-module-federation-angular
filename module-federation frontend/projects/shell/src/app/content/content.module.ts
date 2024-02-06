import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommentsComponent } from './comments/comments.component';
import { MatDialogModule } from '@angular/material/dialog';
//import { CommentmodalComponent } from './commentmodal/commentmodal.component';
import { CommentModalComponent } from './comment-modal/comment-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { QuestionModalComponent } from './question-modal/question-modal.component';
import { PurchaseModalComponent } from './purchase-modal/purchase-modal.component';
import {MatSelectModule} from '@angular/material/select';
import { PublishAdModalComponent } from './publish-ad-modal/publish-ad-modal.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { UserSupportComponent } from './user-support/user-support.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [
    ProductDetailsComponent,
    AllproductsComponent,
    CommentsComponent,
    CommentModalComponent,
    ProfileComponent,
    QuestionModalComponent,
    PurchaseModalComponent,
    PublishAdModalComponent,
    UserSupportComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
    DragDropModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    TranslateModule.forChild(),
  ]
})
export class ContentModule { }
