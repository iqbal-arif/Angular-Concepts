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
      <course-card [title]="rxjsCourse.description"></course-card> in
   3. Define title heading at component level in course-card.component.html
      <div class="course-title">{{ title }}</div>
