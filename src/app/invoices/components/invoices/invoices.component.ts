import { Component } from '@angular/core';
import { Invoice } from '../../../models/invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styles: []
})
export class InvoicesComponent {
  invoices: Invoice[] = [];
}
