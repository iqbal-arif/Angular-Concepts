/**\*\***\*\***\*\*** Angular Directives Setup **\*\***\*\*\***\*\***/

1. git link
   https://github.com/angular-university/angular-course/tree/2-directives

2. git checkout -b 2-directives origin/2-directives.

/**\*\***\*\***\*\*** Angular Directives Types **\*\***\*\*\***\*\***/

1. Components directives with Template
2. Structural Directives: *ngIf : *ngFor : \*ngSwitch
   1. These attributes added to element of page, such as, plain HTML div, or Components
   2. Attributes either modify the behavior of that elements
3. Attribute Directives:
   1. Form attributes, such as, required and disabled applied to form input field.

/**\*\***\*\***\*\*** Angular Directives Types **\*\***\*\*\***\*\***/

1. Generating highlighted directives:
   ng g directive directives/highlighted
2. Attribute Selector: selector: "[highlighted]"
   Any Element that is highlighted attribute will be effected by it.

/**\*\***\*\***\*\*_ Angular HOST Binding DOM Properties VS Attributes _\*\***\*\*\***\*\***/

1.  Directives are applied to Host Elements (highlighted styles are in assets/styles.css)
    1.  Applying Directives as className:
        1. Select Element from the web.
        2. In Web Console type "$0" ; this gives the current element
        3. Applying className: $0.className = 'highlighted' and press enter
    2.  Applying Directives on host through HostBing Decorator
        1.  Apply it in directives.ts: @HostBinding("class.highlighted") when highlighted selector is applied on HTML element:
            <course-card highlighted
            (courseSelected)="onCourseSelected($event)"
            [course]="course">
    3.  Apply Highlighted Directives as an Input value in HTML element
        1. Replace highlighted with [highlighted]="true" when applying as Input property for Highlighted directives.
        2. Add to highlighted.directive.ts
           @Input("highlighted")
           isHighlighted = false;
    4.  Apply HTML Attributes to components
        1.  @HostBinding("attr.disabled")
            get disabled() {
            return "true";
            }
    5.  Apply Directives through HOST Listener
        1.  Add @HostListener("mouseover")
        2.  Add @HostListener("mouseleave")
        3.  To Get native DOM Event, Add $event variable to HostListener
            @HostListener("mouseover", ["$event"])
            mouseOver($event) {
            //L30: To display cursor position
            console.log($event);
    6.  Custom Event
        1.  Add @Output toggleHighlight trigger
        2.  Emit Value ON & OFF with toggleHighlight trigger
        3.  Add toggleHighlight event to App Template
