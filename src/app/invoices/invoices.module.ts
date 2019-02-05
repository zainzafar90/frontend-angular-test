import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoicesRoutingModule } from "./invoices-routing.module";
import { InvoicesComponent } from "./components/invoices/invoices.component";
import { InvoiceItemComponent } from "./components/invoice-item/invoice-item.component";
import { InvoiceCreateComponent } from "./components/invoice-create/invoice-create.component";
import { InvoiceDetailsComponent } from "./components/invoice-details/invoice-details.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    InvoicesComponent,
    InvoiceItemComponent,
    InvoiceCreateComponent,
    InvoiceDetailsComponent
  ],
  imports: [CommonModule, InvoicesRoutingModule, SharedModule]
})
export class InvoicesModule {}
