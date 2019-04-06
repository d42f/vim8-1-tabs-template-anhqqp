import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;
  activeTab: TabComponent;

  ngAfterContentInit() {
    this.tabs.changes.subscribe(() => {
      if (this.tabs.toArray().indexOf(this.activeTab) === -1) {
        this.resetTab();
      }
    });
    this.resetTab();
  }

  resetTab() {
    this.selectTab(this.tabs.first);
  }

  selectTab(tab) {
    this.activeTab = tab;
  }
}
