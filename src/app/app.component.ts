import { Component } from '@angular/core';
import { Course } from "./models/course.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cursos: Array<Course> = [];

  insertCard(curso: Course) {
    this.cursos = [curso, ...this.cursos];
  }
}
