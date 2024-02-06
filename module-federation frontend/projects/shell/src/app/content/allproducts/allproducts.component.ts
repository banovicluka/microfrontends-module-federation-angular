import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ContentService } from '../content.service';
import { PublishAdModalComponent } from '../publish-ad-modal/publish-ad-modal.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit{

  @Input()
  products: any[]= [];
  categories: any[] = [];

  fromPrice!: number;
  toPrice!: number;

  selectedCategory: string | null = null;
  selectedCondition: string | null = null;
  selectedLocation: string | null = null;

  @Input()
  selectedTab:number=0;

  suggestions:string[]=[];
  searchText:string="";
  currentPage:number = 0;
  totalItems:number = 0;
 
  constructor(private service: ContentService, private router: Router, private authService: AuthService,
    private dialog: MatDialog, private titleService: Title){
    
      this.titleService.setTitle("Shell");
  }
  ngOnInit(): void {
    
    this.getAllProducts();
    this.getCategories();
  
  }
  public getAllProducts(){

    let params = new HttpParams();

    if(this.searchText !=null){
      params = params.append("search", this.searchText);
    }
    if(this.fromPrice !=null){
      params = params.append("minPrice", this.fromPrice);
    }
    if(this.toPrice != null){
      params = params.append("maxPrice", this.toPrice);
    }
    if(this.selectedCategory != null){
      params = params.append("category", this.selectedCategory);
    }
    if(this.selectedCondition != null){
      params = params.append("condition", this.selectedCondition);
    }
    if(this.selectedLocation != null){
      params = params.append("location" , this.selectedLocation);
    }
    //console.log(this.selectedTab);
    if(this.router.isActive('',true)){
      this.service.getAllProducts(params,this.currentPage).subscribe((response:any) => {
        //this.products=data;
        this.products = response?.content;
        this.totalItems = response?.totalElements;
        //this.products = this.products.filter((a) => a?.purchase == null);
      });
    }else if(this.router.isActive('/profile', true) && this.selectedTab==2){
      console.log("tab2");
      this.service.getAllUserOffers(this.authService.username,params).subscribe((data:any) => {
        this.products = data;
        //this.products = this.products.filter((a) => a?.purchase == null);
      })
    }else if(this.router.isActive('/profile', true) && this.selectedTab==3){
      console.log("tab3");
      this.service.getPurchasedProductsOfUser(params).subscribe((data:any) =>{
        this.products = data;
        
      })
    }
    
  }

  getCategories(){
    this.service.getAllCategories().subscribe((data:any)=>{
      this.categories = data;
    })
  }

  onCardClick(id:any){
    this.service.currentProductId = id;
    this.router.navigate(['/product', id]);

  }


  openPublishModal(){
    if(this.authService.isLoggedIn()){
      const dialogRef = this.dialog.open(PublishAdModalComponent,{
        // width:'400px'
      });
    }else{
      this.router.navigateByUrl('/login');
    }
    
  }

  getSuggestions(){
    this.service.getSuggestions(this.searchText).subscribe((data:any)=>{
      this.suggestions=data;
    })
  }

  isProfileRouteActive():boolean{
    return !this.router.isActive('/profile', true);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getAllProducts();
  }

  calculateTotalPages(): number {
    const number = Math.ceil(this.totalItems / 15);
    if(number == 0) return 1;
    else return number;
  }

  checkEndPagination(){
    if((this.currentPage+1) * 15 >=this.totalItems){
      return true;
    
    }else return false;
  }

  checkActiveRoute(){
    if(this.router.isActive('/profile',true)) return false;
    else return true;
  }

  getTheme(){
    return this.service.currentTheme$;
  }
  // applyPriceFilter() {
  //   // Ovdje implementirajte logiku za primjenu filtera
  //   console.log('From Price:', this.fromPrice);
  //   console.log('To Price:', this.toPrice);
  // }


}
