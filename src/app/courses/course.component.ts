import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'AGF-2021',
        duration: 180,
        rating: 6.8,
        releaseDate: 'Dezembro, 1, 2020',
      },
      {
        id: 2,
        name: 'Angular: HTTPClient',
        imageUrl: '',
        price: 39.99,
        code: 'AGH-2021',
        duration: 30,
        rating: 7.3,
        releaseDate: 'Janeiro, 10, 2021',
      },
    ];
  }
}
