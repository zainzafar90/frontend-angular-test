import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Invoice } from "src/app/models/invoice";
import { PaymentStatus } from "src/app/models/enums/payment-status";

@Component({
  selector: "[app-invoice-item]",
  templateUrl: "./invoice-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class InvoiceItemComponent {
  @Input() invoice: Invoice;
  paymentStatus = PaymentStatus;

  get fullname(): string {
    return `${this.invoice.name.first} ${this.invoice.name.last}`;
  }
}
