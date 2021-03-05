import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course.component.html',
  styles: ['img{ width: 40px; height: 40px}'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'AGF-2021',
        duration: 180,
        rating: 4.8,
        releaseDate: 'Dezembro, 1, 2020',
      },
      {
        id: 2,
        name: 'Angular: HTTPClient',
        imageUrl: '/assets/images/http.png',
        price: 39.99,
        code: 'AGH-2021',
        duration: 30,
        rating: 4.3,
        releaseDate: 'Janeiro, 10, 2021',
      },
    ];
  }
}
