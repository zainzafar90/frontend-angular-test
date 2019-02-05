import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceCreateComponent } from './components/invoice-create/invoice-create.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';

const routes: Routes = [
  {
    path: 'invoices',
    component: InvoicesComponent,
    children: [
      { path: 'view', component: InvoiceDetailsComponent },
      { path: 'create', component: InvoiceCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {}
