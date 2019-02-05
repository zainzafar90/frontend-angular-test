import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-sidebar]",
  templateUrl: "./sidebar.component.html",
  styles: [
    `
      .bg-eventrone {
        background-color: #c62828 !important;
      }
    `
  ]
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
