import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavigateComponent } from './navigate/navigate.component';
import {FormsModule} from '@angular/forms';
import { ShoppingContainerComponent } from './shopping-container/shopping-container.component';
import { ShoppingDetailsComponent } from './shopping-container/shopping-details/shopping-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavigateComponent,
    ShoppingContainerComponent,
    ShoppingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents : [ShoppingDetailsComponent]
})

export class AppModule { }
