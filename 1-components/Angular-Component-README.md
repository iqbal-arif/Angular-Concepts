/**\*\*\*\*** Angular Components & Core Directives \***\*\*\*\*\*\***/

1. Creating a Component
   1. ng generate component course-card
2. Based on Selector in course-card.components.ts; selector: 'course-card'
   1. Enter in app.component.html;
      <div class="courses"><course-card></course-card></div>
3. Enter the HTML code for component in course-card.component.html
4. To Multiple component: copy <course-card></course-card> it number of times in html file.
5. Populate COURSE Data into app.component.ts that is given in db-data.ts
   1. Create Variables in course-card.component.ts:
      export class AppComponent {
      coreCourse = COURSES[0];
      rxjsCourse = COURSES[1];
      ngrxCourse = COURSES[2];
      }
6. Display/Link in the view HTML file app.component.html:
   <h1>{{ coreCourse.description }}</h1>
7. Right way to define the input property in HTML is;
   1. Define title string in course-card.component.ts annotated with angular input decorator
   2. Define title property in app.component.html
      <course-card [title]="coreCourse.description"></course-card> in
   3. Define title heading at component level in course-card.component.html
      <div class="course-title">{{ title }}</div>
8. To bring the Object Types in Data Model
   1. Define Custom JS Object types in model/course.ts
   2. Import course object in component level
      @Input()
      // Defines complete course object importing from course model
      course: Course;
   3. Import Course properties at component level in course-card.components.html
   4. Import Course Component at App level in app.component.html
      /**\*\*\*\*** Component @Output - Custom Events & Event Emitters \***\*\*\*\***/
9. Custom Events & Events Emitters
   1. Define Event at component level in html
   2. Define Event handler at component level in ts
   3. Define Event at App level in the component tag
   4. Define Event Handler at App level in ts
   5. Results: When button is clicked both events are triggered.
   6. Replace Click event in App to Custom Event as courseSelected(onCourseSelected)
   7. Define EventEmitter at component level in ts annotated with angular Output decorator
   8. Emit the Course at component level in ts
   9. Define course parameter for onCourseSelected()
   10. Enter $event as a parameter for (courseSelected)="onCourseSelected($event)" to display course.
   11. Event Bubbling:
   12. Custom Event do not bubble up vs standard event
   13. Standard browser Event bubble from component to all the way up to app level
   14. Custom Event Name can be made different for App & Component level:
   15. Change event name to courseEmitter at component level
   16. Add App event handler name to Output decorator as a parameter to be linked to App
       /\***\*\*\*\*** Angular ngFor Core Directives \***\*\*\*\*\***/
10. ngFor Directives
    1. Import COURSES object at App level
    2. Define for loop at App level with \*ngFor
    3. ng Index Feature
       1. ng Indexing : Define Card indexing at App level
          <course-card
          \*ngFor="let course of courses; index as i" // index feature "index as i"
          (courseSelected)="onCourseSelected($event)"
          [course]="course"
          [cardIndex]="i + 1" // This property increments the index, where i=0
          > </course-card>
       2. ng CSS Border Styling: Top and Bottom Border CSS Styling
          \*ngFor="let course of courses; index as i; first as isFirst; last as isLast"
          [class.is-first]="isFirst"
          [class.is-last]="isLast"
       3. ng CSS Card Color Styling: Even & Odd
          <course-card
          \*ngFor="
          let course of courses;
          index as i;
          first as isFirst;
          last as isLast;
          even as isEven;
          odd as isOdd
          "
          [class.is-first]="isFirst"
          [class.is-last]="isLast"
          [class.is-even]="isEven"
          [class.is-odd]="isOdd"
          /\***\*\*\*\*** Angular ngIf Core Directive & Elvis Operator \***\*\*\*\*\***/
11. ngIf Directives
    1. ngIf ="Boolean"
       1. ngIf="false": Removes not only the image but also the screen html tag from Template.
    2. ngIf can take Boolean, JS Expression, it can coerce strings, methods as well.
    3. ngIf="Method()"
       1. ngIf="isImageVisible()" Method defined at App level
       2. Function defined at component level
          isImageVisible() {
          //course property is defined & course iconUrl is visible
          return this.course && this.course.iconUrl;
          }
    4. Undefined Object passed into data model
       1. use ngIf="course" at component level
    5. ng-Template for noImage in one of the cards
       1. ngIf="isImageVisible(); else noImage define as property
       2. else clause takes the next HTML tag to display for image invisibility
       <ng-template #noImage>
       <p>No Image is Available</p>
       </ng-template>
          /\***\*\*\*\*** Angular ngClass Core Directive \***\*\*\*\*\***/
12. ngClass Types (This is normally used in Industry)
    1. Class as a String:
       1. Class as a singel String: [ngClass]="'beginner'"
       2. Class as a multiple String: [ngClass]="'course-card beginner'"
    2. Class as an Array:
       1. Class Array: [ngClass]="['course-card', 'beginner']"
    3. Class as a Configuration Object
       1. Class Object: [ngClass]="{'course-card':true, 'beginner':false}"
    4. Recommended Approach:
       1. Define Class Method: [ngClass]="cardClasses()" at App Level
       2. Define Function at Component Level:
          cardClasses() {
          return {
          "course-card": true,
          beginner: this.course.category === "BEGINNER",
          };
          }
          /\***\*\*\*\*** Angular ngStyle Core Directive \***\*\*\*\*\***/
13. ngStyle (This is used when needed for specific component or need)
    1. CSS style to Components directly: [style.text-decoration]="'underline'".
       For each style we would need to repeat this code multiple times.
    2. ngStyle: For multiple CSS property  
       [ngStyle]="{ 'text-decoration': 'underline', color: 'red' }"
    3. ngStyle by Method:
       cardStyles() {
       return { "text-decoration": "underline", color: "red" };
       }
       /\***\*\*\*\*** Angular ngSwitch Core Directive \***\*\*\*\*\***/
14. ngSwitch
    1. Similar to JS Switch Statement. Used in multiple Possibilities
    2. Define [ngSwitch]="course.category"
    3. Define HTML tag possibilities based on course db.
    <div class="category" *ngSwitchCase="'BEGINNER'">Beginner</div>
    <div class="category" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="category" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="category" *ngSwitchDefault>All Levels</div>
