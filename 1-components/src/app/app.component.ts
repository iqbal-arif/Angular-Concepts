import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  QueryList,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  // Listing Complete Course Model for the App Template
  courses = COURSES;
  // This model was done for displaying individual courses for the App Template HTML
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];
  /*
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
  */
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
  // Querying Multiple Card Reference for Deep querying
  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  // Querying Multiple Card Reference for HTML Element Type
  // Gives list of Native DOM Elements
  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cardsRef: QueryList<ElementRef>;

  constructor() {}
  ngAfterViewInit() {
    // changes.subscribe() method observes changes in the cards and display them
    //
    this.cards.changes.subscribe((cards) => console.log(cards));
    console.log(this.cardsRef);
  }
  //  Click Event Handler for Edit Course to Push new Course
  //  For changes.subscribe() Functionality
  onCourseEdited() {
    this.courses.push({
      id: 21,
      description: "Angular Core Deep Functionality",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "ADVANCED",
      lessonsCount: 11,
    });
  }

  // Click Event Handler
  onCourseSelected(course: Course) {
    console.log("App Component - Click event Bubbled....", course);
    // Querying Card by Component Reference
    console.log(this.cards);
    // Querying DIV by HTML Reference
    console.log("containerDiv", this.containerDiv);
  }
}
