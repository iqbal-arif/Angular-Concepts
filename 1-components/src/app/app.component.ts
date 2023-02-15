import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // Listing Complete Course Model for the App Template
  courses = COURSES;
  // This model was done for displaying individual courses for the App Template HTML
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];
  // Title for Pipes
  title = COURSES[0].description;
  // Start Date for Pipes
  startDate = new Date(2023, 1, 1);
  // Click Event Handler
  onCourseSelected(course: Course) {
    console.log("App Component - Click event Bubbled....", course);
  }
}
