import { Component, OnInit, Input } from '@angular/core';
import { Course } from "../models/course.model";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() courses: Array<Course> = [];

  constructor(private sanitizer: DomSanitizer) { }
  returnPhotoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/people' + Math.round(Math.random()*3) + '.svg')
  }
  ngOnInit(): void {
  }

}
