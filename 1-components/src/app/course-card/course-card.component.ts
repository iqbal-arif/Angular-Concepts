import { Component, Input, EventEmitter, Output } from "@angular/core";
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

  // Emit Course Event to
  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  constructor() {}
  // Event Handler
  onCourseViewed() {
    console.log("card component - button Clicked...");
    this.courseEmitter.emit(this.course);
  }
}
