# Angular-Concepts

Angular Concepts

1. Install Angular cli Command line Interface:
   1. npm install -g @angular/cli
2. Command Line tool called "ng"
   1. List all available ng command : ng --help (add, new, generate, update, build,etc)
3. Creating new Project angular-course: ng new angular-course
4. Start Angular Small Development Server: npm start

/**\*\*** Angular Custom HTML , Modules, & Views **\*\***/

1. HTML Files: src/app/app.components.html
2. Angular Component: src/app/app.components.ts
3. Key Features:
   1. Add input tag in app.component.html with class "demo"
   2. Adding value property as an HTML property: value = "Test"
      <input type="text" class="demo" value="Test"/>
   3. Adding value property as an expression : [value] = "data.title";
      data.title is expression coming from app.components
      Result: Value of data.title = Angular-Course
   4. If value property value is covered with single'' it becomes plain HTML property
      <input type="text" class="demo" [value]="'data.title'" />
      Result: Value of data.title = data.title
   5. Set Template Reference: #titleInput
