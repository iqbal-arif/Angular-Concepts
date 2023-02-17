import { Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
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
  title = COURSES[1].description;
  // Price for Pipes
  price = 9.998989;
  // Percentile For Pipes
  rate = 0.67;
  // Object Key Value Pipes
  course = COURSES[1];
  // Start Date for Pipes
  startDate = new Date(2023, 1, 1);

  // Child Reference in App Component
  // A Template Query Mechanism:  Query Component Type
  // @ViewChild(CourseCardComponent) Querying Component by Class Name
  // @ViewChild('cardRef') Querying Component Template Reference
  // @ViewChild("cardRef",{read:ElementRef}) Querying Component Plain HTML Element Reference
  @ViewChild("cardRef", { read: ElementRef })
  // card: CourseCardComponent; Activate with Querying by Class or Component Reference Instance
  card: ElementRef;

  // Querying HTML Element Type
  @ViewChild("container") // Querying by plain HTML Template Reference
  containerDiv: ElementRef; // Handles native DOM elements

  // Click Event Handler
  onCourseSelected(course: Course) {
    console.log("App Component - Click event Bubbled....", course);
    // Querying Card by Component Reference
    console.log(this.card);
    // Querying DIV by HTML Reference
    console.log("containerDiv", this.containerDiv);
  }
}
