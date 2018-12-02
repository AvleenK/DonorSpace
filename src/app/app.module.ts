import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './main-page/register/register.component';
import { RegFormComponent } from './registeration-form/reg-form/reg-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { RouterModule } from '@angular/router';
import { RequestFormComponent } from './request-form/request-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { RedirectRegisterComponent } from './redirect-register/redirect-register.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegFormComponent,
    NavBarComponentComponent,
    AboutUsComponentComponent,
    RequestFormComponent,
    NotFoundComponent,
    FooterComponent,
    RedirectRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: RegisterComponent},
      {path: 'registeration-form', component: RegFormComponent},
      {path: 'request', component: RequestFormComponent},
      {path: 'redirect', component: RedirectRegisterComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
