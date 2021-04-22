import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReplaceWithDashPipe } from './replace-with-dash.pipe';
import { ReplaceWithUpperCaseDotPipe } from './replace-with-upper-case-dot.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ReplaceWithDashPipe,
    ReplaceWithUpperCaseDotPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
