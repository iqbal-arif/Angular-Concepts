import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
// import{import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { CoursesService } from "./services/courses.service";

// @Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}
// }

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // L41: Implicit Observable by Angular Async Pipe
  // L41: Values emitted are going to be array of Courses
  courses$: Observable<Course[]>;
  /***ACTIVATE FOR LESSON 40 ****/
  // L40: This course is utilizing local db-data through COURSES model
  // L40:courses = COURSES;
  /*courses; */ // This one is from API
  /***ACTIVATE FOR LESSON 40 ****/

  // L40: Define private service to utilize HTTP Client Services
  // L42: Define coursesService:CoursesService with type annotation to inject an instance of course
  constructor(
    // /*private http: HttpClient, */ This is not needed since it is called in service file
    private coursesService: CoursesService
  ) {}

  //L40: ngOnInit: Another Life-cycle Hook
  // L40:Use in initialization logic, such as, triggering Backend Call to fetch Data for component
  // L40:This ngOnInit method is called by Angular Framework
  ngOnInit() {
    // L42: Logging the value of courseService
    // console.log(this.coursesService);
    // L40: Adding parameters to Http get request via Angular HttpParams utility
    /****L43: MOVED THIS ALL TO SERVICES TEMPLATE : This section is prior to L43 */
    // MOVED
    // const params = new HttpParams().set("page", "1").set("pageSize", "10");
    // MOVED

    // L40: http.get gives unobservable. To display the content use .subscribe() method
    // MOVED
    // this.http.get("/api/courses", { params }); //L40: Adding request parameters from params constant
    // MOVED
    // L41: Using Observable
    // this.courses$ = this.http.get<Course[]>("/api/courses", { params });
    /***ACTIVATE FOR LESSON 40 ****/
    // L40: This code is used to test the API connection and display it in console as array
    // L40:.subscribe((arg) => console.log(arg ));
    // .subscribe((courses) => (this.courses = courses));
    /***ACTIVATE FOR LESSON 40 ****/
    /****L43: MOVED THIS ALL TO SERVICES TEMPLATE: This section is prior to L43  */
    // L43:
    this.courses$ = this.coursesService.loadCourses();
  }
}
