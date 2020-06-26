import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from "../models/course.model";

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css'],

})
export class FormCourseComponent implements OnInit {
  @Output() courseInsertion = new EventEmitter<Course>();
  nomeCurso: string;
  descCurso: string;
  curso: Course;
  createCourse() {
    console.log(this.nomeCurso);
    console.log(this.descCurso);
    this.curso = new Course(this.nomeCurso, this.descCurso);
    this.courseInsertion.emit(this.curso);
    this.nomeCurso = null
    this.descCurso = null
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
