import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { KomponentaComponent } from '../modul/komponenta/komponenta.component';
import { ModulModule } from '../modul/modul.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ContentModule } from '../content/content.module';
import { MatTabsModule } from '@angular/material/tabs';
import {  MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core'


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    ContentModule,
    MatTabsModule,
    MatStepperModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    // TranslateModule.forChild()
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
      
    })
  ]
})
export class HomeModule { }
