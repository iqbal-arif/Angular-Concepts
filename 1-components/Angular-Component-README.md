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
