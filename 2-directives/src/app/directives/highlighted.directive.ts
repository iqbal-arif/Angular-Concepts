import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[highlighted]", //Attribute Selector
})
export class HighlightedDirective {
  // L29: Input Property Decorator
  @Input("highlighted")
  isHighlighted = false;

  constructor() {
    console.log("Directive created...");
  }
  // L29: Applying Directive Attribute as className (A DOM Property) to Host element
  // Option 1:
  // @HostBinding("className")
  // get cssClasses() {
  //   return "highlighted";
  // }
  // L29: Shorthand notation for class since class property is a know DOM Property
  // Option 2:
  @HostBinding("class.highlighted")
  get cssClasses() {
    // L29: This below code is for option 2
    // L29: return true;
    // L29: This code is for highlighted as a input value
    return this.isHighlighted;
  }

  // L29: Example of Applying border property. Not a part of Highlighted lesson
  // Activate it to test while deactivate other cssClasses to avoid duplication error
  // @HostBinding("style.border")
  // get cssClasses() {
  //   return "1px solid red";
  // }

  // L29:  Applying HTML Attributes To components
  @HostBinding("attr.disabled")
  get disabled() {
    return "true";
  }
}
