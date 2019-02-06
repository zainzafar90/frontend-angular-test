import { Component } from '@angular/core';
import { Invoice } from '../../../models/invoice';
import { PaymentStatus } from 'src/app/models/enums/payment-status';
import { PaymentMethod } from 'src/app/models/enums/payment-method';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styles: []
})
export class InvoicesComponent {
  invoices: Invoice[] = [
    {
      id: 0,
      balance: '3,769.00',
      discount: 0.1,
      status: PaymentStatus.PAID,
      method: PaymentMethod.CHEQUE,
      name: {
        first: 'Annabelle',
        last: 'Beach'
      },
      email: 'annabelle.beach@undefined.biz',
      phone: '+92 (896) 422-3506',
      dueDate: 'February 12, 2014'
    },
    {
      id: 1,
      balance: '2,752.00',
      discount: 0,
      status: PaymentStatus.PENDING,
      method: PaymentMethod.CASH,
      name: {
        first: 'Velazquez',
        last: 'Calhoun'
      },
      email: 'velazquez.calhoun@undefined.info',
      phone: '+92 (867) 447-2301',
      dueDate: 'June 05, 2018'
    }
  ];
}
