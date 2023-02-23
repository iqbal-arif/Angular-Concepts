import { Directive } from "@angular/core";

@Directive({
  selector: "[highlighted]", //Attribute Selector
})
export class HighlightedDirective {
  constructor() {
    console.log("Directive created...");
  }
}
