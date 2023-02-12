import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This selector is used to link components (custom elements) in app.components.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//AppComponent is responsible for retrieving the data and making it available to the view.
export class AppComponent {
  /* title = 'Angular-Course';*/ // this Title is corresponds to {{title}} in app.components.html
  // 1.   Modified it to courseTitle in app.components.ts and also in app.component.html to make it work
  /*courseTitle = 'Angular-Course'; */ // this Title is corresponds to {{title}} in app.components.html
  // 2. Modified as an Object
  data = {
    title: 'Angular-Course',
  };
}
// {{title}} : is a javascript expression is called  interpolation syntax  gives access to data
