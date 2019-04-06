import {
  Component,
  ContentChild,
  Input,
} from '@angular/core';

import { TabTitleDirective, TabContentDirective } from './tabs.directives';

@Component({
  selector: 'tab',
  template: ''
})
export class TabComponent {
  @ContentChild(TabTitleDirective) public tabTitle: TabTitleDirective;
  @ContentChild(TabContentDirective) public tabContent: TabContentDirective;
}
