import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Price Action',
        imageUrl: './assets/images/forms.png',
        price: 100,
        code: 'string-1234',
        duration: 50,
        rating: 1,
        releaseDate: 'November, 2, 2019'
      },
      {
        id: 1,
        name: 'Tape reading',
        imageUrl: './assets/images/http.png',
        price: 200,
        code: 'string-4567',
        duration: 400,
        rating: 2,
        releaseDate: 'January, 2, 2020'
      }
    ]
  }
}