import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course.component.html',
  styles: ['img{ width: 40px; height: 40px}'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.retriveAll();
  }
}
