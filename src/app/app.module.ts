import { UtilsService } from './shared/services/utils.service';
import { AuthInterceptor } from './shared/interceptors/authinterceptor';
import { ForgotModule } from './Auth/forgot/forgot.module';
import { ContactModule } from './pages/contact/contact.module';
import { DetailproduitModule } from './pages/detailproduit/detailproduit.module';
import { ProduitsModule } from './pages/produits/produits.module';
import { CataloguesModule } from './pages/catalogues/catalogues.module';
import { ProduitsComponent } from './pages/produits/produits.component';
import { HomeModule } from './pages/home/home.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CatalogueBlockComponent } from './components/catalogueBlock/catalogueBlock.component';
import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotComponent } from './Auth/forgot/forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { CataloguesComponent } from './pages/catalogues/catalogues.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailproduitComponent } from './pages/detailproduit/detailproduit.component';
import { CountdownModule } from 'ngx-countdown';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ProductDetailsResolver } from './pages/detailproduit/datailproduit.resolver';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { AgmCoreModule } from '@agm/core';
import { ComponentsModule } from './components/components.module';
import { environment } from "../environments/environment";
import { PdfshowComponent } from './pages/pdfshow/pdfshow.component';
import { PdfshowModule } from './pages/pdfshow/pdfshow.module';
import { ToastrModule } from 'ngx-toastr';

export function tokenGetter() {
  return localStorage.getItem(environment.TOKEN);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    //ContactComponent,
    // CataloguesComponent,
   // ProduitsComponent,
    DetailproduitComponent,
    // SkeletonComponent,
    PdfshowComponent,
  ],
  imports: [
    // LazyImgDirective,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    InlineSVGModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    LazyLoadImageModule,
    CountdownModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-YHD1VLiZyKln_hC24GLpp2eNrq4ZTcc'
    }),
    // CountdownTimerModule.forRoot(),
    JwtModule.forRoot({
      config: {

        tokenGetter: tokenGetter
      },
    },
    ),
    HomeModule,
    ComponentsModule,
    PdfshowModule,
    CataloguesModule,
    ProduitsModule,
    DetailproduitModule,
    ContactModule,
    ForgotModule,
    // ToastrModule.forRoot({
    //   timeOut: 10000,
    //   positionClass: 'toast-bottom-right',
    //   preventDuplicates: true,
    // }),
    

  ],
  providers: [AuthService,
    JwtHelperService,
    ProductDetailsResolver,
    UtilsService,
   
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [
    // SkeletonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
