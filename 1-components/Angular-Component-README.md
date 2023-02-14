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
9. Component @Output - Custom Events & Event Emitters
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
   16. Add App event handler to Output decorator as a parameter.
