import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from "../models/user.model";
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  constructor() {}
  @Output() userInsert = new EventEmitter<User>();
  userName: string;
  userEmail: string;
  userAge: number;
  userCourse: string;
  user: User;
  
  saveUser(user: any) {
    console.log(user);
    const name = user.value.userName;
    const age = user.value.userAge;
    const email = user.value.userEmail;
    const course = user.value.userCourse;
    this.createUserCard(name, age, email, course);

  }
  createUserCard(name: string, age: number, email: string, course: string) {
    this.user = new User(name, age, email, course);
    console.log(this.user);
    this.userInsert.emit(this.user);
  }

  ngOnInit(): void {}
}
