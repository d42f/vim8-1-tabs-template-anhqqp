import {
  Directive,
  TemplateRef
} from '@angular/core';

@Directive({
  selector: '[tab-title]'
})
export class TabTitleDirective {
  constructor(public template: TemplateRef<any>) {
    //
  }
}

@Directive({
  selector: '[tab-content]'
})
export class TabContentDirective {
  constructor(public template: TemplateRef<any>) {
    //
  }
}
