import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./components/common/sidebar/sidebar.component";
import { NavbarComponent } from "./components/common/navbar/navbar.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { RouterModule } from "@angular/router";
import { PageHeaderComponent } from "./components/common/page-header/page-header.component";

const SHARED_COMPONENTS = [
  FooterComponent,
  NavbarComponent,
  PageHeaderComponent,
  SidebarComponent
];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  imports: [NgbModule, CommonModule, RouterModule]
})
export class SharedModule {}
