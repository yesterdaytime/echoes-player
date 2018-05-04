import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppSidebarProxy } from './app-sidebar.proxy';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./app-sidebar.scss'],
  template: `
  <div class="sidebar flex-column flex-full-v flex-full-h"
    [class.closed]="sidebarCollapsed$ | async">
    <div class="sidebar-backdrop" (click)="toggleSidebar()"></div>
    <nav>
      <app-brand></app-brand>
      <app-navigator [closed]="sidebarCollapsed$ | async" [searchType]="searchType$ | async">
      </app-navigator>
    </nav>
    <now-playing></now-playing>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSidebarComponent {
  sidebarCollapsed$ = this.appSidebarProxy.sidebarCollapsed$;
  searchType$ = this.appSidebarProxy.searchType$;

  constructor(private appSidebarProxy: AppSidebarProxy) {}

  toggleSidebar() {
    this.appSidebarProxy.toggleSidebar();
  }
}
