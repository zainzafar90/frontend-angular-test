import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styles: [
    `
      :host {
        bottom: 0;
        position: absolute;
        width: 100%;
      }
    `
  ]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
