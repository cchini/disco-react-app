import { PagePlatform, Status } from '@models/public.model';

export interface Campaigns {
  id: string;
  name: string;
  statusId: string;
  status: Status;
  accountId: string;
  deleted: boolean;
  created: Date;
  modified: Date;
}

export interface TemplateCampaigns {
  id: string;
  title?: string;
  platforms: PagePlatform[];
}

export interface Campaign {
  id: string;
  accountId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  kpi: string;
  goal: number;
  statusId: string;
  status: Status;
  modified: Date;
  created: Date;
}
