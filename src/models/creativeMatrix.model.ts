import { PagePlatform, Status } from '@models/public.model';

export interface CreativeMatrix {
  id: string;
  name: string;
  statusId: string;
  status: Status;
  accountId: string;
  deleted: boolean;
  created: Date;
  modified: Date;
  value?: string;
  label?: string;
}

export interface TemplateMatrix {
  id: string;
  title?: string;
  platforms: PagePlatform[];
}

export interface ReduxMatrix {
  matrixList: CreativeMatrix[];
}
