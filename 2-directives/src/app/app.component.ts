import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  // L31: Option 1: Accessing Highlighted Directive directly @ App Component Level
  // Activate To See in Action while Deactivate Option 2
  // @ViewChild(HighlightedDirective)
  // highlighted: HighlightedDirective;

  // L31: Option 2: Accessing Highlighted Directive through Card Component
  @ViewChild(CourseCardComponent, { read: HighlightedDirective })
  highlighted: HighlightedDirective;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  constructor() {}

  // L30: Toggle Highlight Event Handler
  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }

  ngAfterViewInit() {
    // L31: Logging HighLighted value after triggering it
    console.log(this.highlighted);
  }

  onCourseSelected(course: Course) {}
}
