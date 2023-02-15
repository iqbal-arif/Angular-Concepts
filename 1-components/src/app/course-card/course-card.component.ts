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

  @Input()
  // Define Card Index Input Variable
  cardIndex: number;
  // Emit Course Event to
  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  constructor() {}
  // Image Visibility Method
  isImageVisible() {
    //course property is defined & course iconUrl is visible
    return this.course && this.course.iconUrl;
  }

  // Event Handler
  onCourseViewed() {
    console.log("card component - button Clicked...");
    this.courseEmitter.emit(this.course);
  }

  // Classes Method
  cardClasses() {
    if (this.course.category === "BEGINNER") {
      // return ["beginner"]; // this return can be a string or array string
      return "beginner"; // this return can be a string or array string
    }
  }
}
