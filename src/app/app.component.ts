import { Component, OnInit } from '@angular/core';
import { Course } from './models/course.model';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public cursos: Array<Course> = [];
  public users: Array<User> = [];

  public showCourses = false;
  public showUsers = true;
  openCourses() {
    this.showCourses = true;
    this.showUsers = false;
  }

  openUsers() {
    this.showUsers = true;
    this.showCourses = false;
  }

  insertCard(curso: Course) {
    this.cursos = [curso, ...this.cursos];
  }
  insertUser(user: User){
    this.users = [user, ...this.users]
  }
  ngOnInit() {
    this.openCourses();
  }
}
