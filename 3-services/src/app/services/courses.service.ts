import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  // L43: Define private service to utilize HTTP Client Services
  constructor(private http: HttpClient) {}
  // L42: Logging to verify that it is the only one instance available in all cards
  // L42: Activate to see the log
  // console.log("creating CoursesServices");

  // L42: Defining API with return type Observable of Course Array
  // L42: Values emitted are going to be instances of array of Courses
  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    this.http.get("/api/courses", { params });
    return this.http.get<Course[]>("/api/courses", { params });
  }

  //L44: API Service Data Modification PUT
  saveCourse(course: Course) {
    // L44: Adding HTTP Header
    const headers = new HttpHeaders().set("X-Auth", "userId");
    return this.http.put(`/api/courses/${course.id}`, course, { headers });
  }
}
