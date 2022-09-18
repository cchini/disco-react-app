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
