import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "[app-navbar]",
  templateUrl: "./navbar.component.html",
  styles: [`
  .navbar-brand img{
    height: 1.4rem;
  }`]
})
export class NavbarComponent implements OnInit {
  showMobileNavbar: boolean;
  showMinimizedSidebar: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {}

  toggleMobileNavbar() {
    this.showMobileNavbar = !this.showMobileNavbar;
  }

  toggleMinimizedSidebar() {
    this.showMinimizedSidebar = !this.showMinimizedSidebar;
    if (this.showMinimizedSidebar) {
      this.renderer.addClass(this.document.body, "sidebar-xs");
    } else {
      this.renderer.removeClass(this.document.body, "sidebar-xs");
    }
  }
}
