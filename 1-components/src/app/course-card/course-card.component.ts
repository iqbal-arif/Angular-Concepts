import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  ContentChild,
  ElementRef,
  ContentChildren,
  QueryList,
} from "@angular/core";
import { COURSES } from "src/db-data";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
// L23: Adding AfterView life-cycle hoo
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
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

  /****L23 ***/
  // Child Reference in Card Component
  // A Template Query Mechanism:  Query Projected Content in Component
  // @ContentChild('courseImage') Querying Component Template Reference
  // @ContentChild(CourseImageComponent) Querying  by Component Class name.
  // @ContentChild(CourseImageComponent, {read: ElementRef}) Querying Component Plain HTML Element Reference
  @ContentChild(CourseImageComponent, { read: ElementRef })
  // This is will give the instance of component
  image: CourseImageComponent;

  /***L24 ***/
  // Querying Multiple Image Reference for Deep querying
  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<CourseImageComponent>;
  // images;

  constructor() {}
  //L23: Method to display the value of the image Query.
  ngAfterViewInit() {
    // Gives a nativeElement , ie, native DOM element course-image
    // console.log(this.image);
  }

  //L24: Method to display the value of the imageS Query.
  ngAfterContentInit(): void {
    console.log(this.images);
  }
  ngOnInit(): void {}
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
  // Styles Method
  cardStyles() {
    return { "text-decoration": "underline", color: "red" };
  }
}
