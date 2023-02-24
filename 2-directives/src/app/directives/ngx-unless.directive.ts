import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[ngxUnless]",
})
export class NgxUnlessDirective {
  // L33: Condition to void multiple calls in the framework for Image Instantiation and clear
  visible = false;
  // L33: Programmatic Reference for Template
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    viewContainer.createEmbeddedView;
  }
  // L33: Setter Method to receive the ngxUnless property
  @Input()
  // The set method will be called by Angular even when value is in placed. This can cause multiple calls in the frame work . To avoid this use some visible condition
  set ngxUnless(condition: boolean) {
    // L33: Instantiating the View when condition is false
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true; // After the view is visible
    }
    // L33: Instantiating the View when condition is true
    else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false; // After the view is cleared
    }
  }
}
