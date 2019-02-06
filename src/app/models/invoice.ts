import { PaymentStatus } from "./enums/payment-status";
import { PaymentMethod } from "./enums/payment-method";

export interface Invoice {
  id: number;
  balance: string;
  discount: number;
  email: string;
  phone: string;
  dueDate: string;
  status: PaymentStatus;
  method: PaymentMethod;
  name: {
    first: string;
    last: string;
  };
}
