import { Component, Input } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent {
  @Input()
  //Defines only the title property of the course object
  // title: string;
  // Defines complete course object importing from course model
  course: Course;
  constructor() {}
}
