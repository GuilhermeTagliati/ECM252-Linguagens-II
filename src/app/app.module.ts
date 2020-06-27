import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormCourseComponent } from './form-course-component/form-course.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { FormUserComponent } from './form-user/form-user.component';
import { UserListComponent } from './user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    FormCourseComponent,
    CardComponentComponent,
    FormUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
