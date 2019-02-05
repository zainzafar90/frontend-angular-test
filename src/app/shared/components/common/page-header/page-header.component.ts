import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styles: []
})
export class PageHeaderComponent {
  @Input() title;
}
