import { LeadStatus } from "./enums/lead-status";
import { LeadSource } from "./enums/lead-source";

export interface Lead {
  id: 0;
  email: string;
  phone: string;
  lastCreationDate: string;
  status: LeadStatus;
  name: {
    first: string;
    last: string;
  };
  source: LeadSource;
}
