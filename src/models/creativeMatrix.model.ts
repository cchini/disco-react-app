import { PagePlatform } from '@models/public.model';

export interface Status {
  id: string;
  name: string;
  code: string;
}

export interface CreativeMatrix {
  id: string;
  name: string;
  statusId: string;
  status: Status;
  accountId: string;
  deleted: boolean;
  created: Date;
  modified: Date;
}

export interface TemplateMatrix {
  id: string;
  title?: string;
  platforms: PagePlatform[];
}
