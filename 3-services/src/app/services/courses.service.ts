import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor() {
    // L42: Logging to verify that it is the only one instance available in all cards
    console.log("creating CoursesServices");
  }
}
